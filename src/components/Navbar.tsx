import {
  Group,
  Button,
  Container,
  Text,
  Burger,
  Drawer,
  Stack,
  Flex,
  Avatar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const links = ["Home", "Product", "Pricing", "Contact"];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header>
      <Container
        fluid
        py="md"
        pos={"sticky"}
        top={0}
        px={{ xs: 28, sm: 28, md: 96, lg: 256 }}
      >
        <Group justify="space-between">
          <Text fw={800} size={"xl"} c="primary">
            Brandname
          </Text>

          <Group gap="lg" visibleFrom="sm">
            {links.map((link) => (
              <Text
                key={link}
                component="a"
                href={`#${link.toLowerCase()}`}
                size="sm"
                fw={700}
                c="neutral"
                style={{ cursor: "pointer" }}
              >
                {link}
              </Text>
            ))}
          </Group>
          <Flex gap={28} align={"center"}>
            <Group visibleFrom="xs">
              <Button variant="transparent" c={"success"}>
                Login
              </Button>
              <Button variant="filled" bg={"success"} size="md">
                <Text c={"light"} size="xs" fw={600}>
                  JOIN US{" "}
                </Text>
                <Avatar
                  src={"vector.svg"}
                  ml={16}
                  radius={0}
                  h={10}
                  w={12}
                  size={""}
                />
              </Button>
            </Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
          </Flex>
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        bg={"light"}
        size="xs"
        title={
          <Text fw={800} size="xl" c="primary">
            Brandname
          </Text>
        }
      >
        <Stack gap="md" mt="md" ta={"center"} pb={28}>
          {links.map((link) => (
            <Text
              key={link}
              component="a"
              href={`#${link.toLowerCase()}`}
              size="md"
              c={"primary"}
              fw={500}
              onClick={close}
              style={{ cursor: "pointer" }}
            >
              {link}
            </Text>
          ))}
        </Stack>
        <Stack gap={2} hiddenFrom="xs">
          <Button variant="subtle" fz={"h6"} size="md" c={"success"}>
            Login
          </Button>
          <Button
            variant="filled"
            bg={"success"}
            c={"light"}
            fz={"h6"}
            size="md"
          >
            JOIN US
          </Button>
        </Stack>
      </Drawer>
    </header>
  );
}
