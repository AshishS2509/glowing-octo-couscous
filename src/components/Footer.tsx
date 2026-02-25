import {
  Container,
  Grid,
  Stack,
  Text,
  Group,
  Flex,
} from "@mantine/core";
import { Icon } from "./shared/icons";

export function Footer() {
  return (
    <>
      <Container fluid bg={"white"} px={{ lg: 256, md: 96, sm: 28 }} py={40}>
        <Grid justify="space-between">
          <FooterColumn
            title="Company Info"
            items={["About Us", "Carrier", "We are hiring", "Blog"]}
          />
          <FooterColumn
            title="Legal"
            items={["About Us", "Carrier", "We are hiring", "Blog"]}
          />
          <FooterColumn
            title="Features"
            items={[
              "Business Marketing",
              "User Analytic",
              "Live Chat",
              "Unlimited Support",
            ]}
          />
          <FooterColumn
            title="Resources"
            items={["IOS & Android", "Watch a Demo", "Customers", "API"]}
          />

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Text fw={600} mb="sm">
              Get In Touch
            </Text>

            <Stack gap="xs" c="neutral">
              <Flex align={"center"}>
                <Icon type="contact" />
                <Text pl={16} size="xs" fw={700}>
                  (480) 555-0103
                </Text>
              </Flex>
              <Flex align={"center"}>
                <Icon type="location" />
                <Text pl={20} size="xs" fw={700}>
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Text>
              </Flex>
              <Flex align={"center"}>
                <Icon type="email" />
                <Text pl={16} size="xs" fw={700}>
                  debra.holt@example.com
                </Text>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      <Container fluid py={36} bg={"light"} px={{ lg: 256, md: 96, sm: 28 }}>
        <Group justify="space-between">
          <Text size="sm" c="neutral" fw={600}>
            Made With Love By Figmaland All Right Reserved
          </Text>

          <Group gap="md">
            <Icon type="facebook" />
            <Icon type="instagram" />
            <Icon type="twitter" />
          </Group>
        </Group>
      </Container>
    </>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <Grid.Col span={{ base: 6, md: 2 }}>
      <Text fw={600} mb="sm">
        {title}
      </Text>

      <Stack gap="xs">
        {items.map((item) => (
          <Text key={item} size="xs" fw={700} c="neutral">
            {item}
          </Text>
        ))}
      </Stack>
    </Grid.Col>
  );
}
