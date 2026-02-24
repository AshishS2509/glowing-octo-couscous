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
        px={{ sm: 8, md: 64, lg: 128 }}
        maw={"1322"}
      >
        <Group justify="space-between">
          <Text fw={800} size="xl" c="primary">
            Brandname
          </Text>

          <Group gap="xl" visibleFrom="sm">
            {links.map((link) => (
              <Text
                key={link}
                component="a"
                href={`#${link.toLowerCase()}`}
                size="sm"
                fw={500}
                c="dimmed"
                style={{ cursor: "pointer" }}
              >
                {link}
              </Text>
            ))}
          </Group>
          <Flex gap={28} align={"center"}>
            <Group visibleFrom="xs">
              <Button variant="subtle" c={"success"}>
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
