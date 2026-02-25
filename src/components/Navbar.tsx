import {
  Group,
  Button,
  Container,
  Text,
  Burger,
  Drawer,
  Stack,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "./shared/icons";

const links = ["Home", "Product", "Pricing", "Contact"];

function NavLinks({
  size,
  color,
  fw,
}: {
  size: string;
  color: string;
  fw: number;
}) {
  return links.map((link) => (
    <Text
      key={link}
      component="a"
      href={`#${link.toLowerCase()}`}
      size={size}
      fw={fw}
      c={color}
      style={{ cursor: "pointer" }}
    >
      {link}
    </Text>
  ));
}

function AuthButtons({ stacked = false }) {
  const Wrapper = stacked ? Stack : Group;

  return (
    <Wrapper gap={stacked ? 2 : undefined}>
      <Button
        variant={stacked ? "subtle" : "transparent"}
        c="success"
        fz={stacked ? "h6" : undefined}
      >
        Login
      </Button>

      <Button
        variant="filled"
        bg="success"
        c={stacked ? "light" : undefined}
        size="md"
        fz={stacked ? "h6" : undefined}
        rightSection={<Icon type="arrow" />}
      >
        {stacked ? (
          "JOIN US"
        ) : (
          <Text c="light" size="xs" fw={600}>
            JOIN US
          </Text>
        )}
      </Button>
    </Wrapper>
  );
}

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header>
      <Container
        fluid
        py="md"
        pos="sticky"
        top={0}
        px={{ xs: 28, sm: 28, md: 96, lg: 256 }}
      >
        <Group justify="space-between">
          <Text fw={800} size="xl" c="primary">
            Brandname
          </Text>

          <Group gap="lg" visibleFrom="sm">
            <NavLinks size="sm" fw={700} color="neutral" />
          </Group>

          <Flex gap={28} align="center">
            <Group visibleFrom="xs">
              <AuthButtons />
            </Group>

            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
          </Flex>
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        bg="light"
        size="xs"
        title={
          <Text fw={800} size="xl" c="primary">
            Brandname
          </Text>
        }
      >
        <Stack gap="md" mt="md" ta="center" pb={28}>
          <NavLinks size="md" fw={500} color="primary" />
        </Stack>

        <Stack hiddenFrom="xs">
          <AuthButtons stacked />
        </Stack>
      </Drawer>
    </header>
  );
}
