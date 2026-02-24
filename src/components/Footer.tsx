import { Container, Grid, Stack, Text, Group, Divider } from "@mantine/core";

export function Footer() {
  return (
    <Container fluid bg={"white"} px={156} py={40}>
      <Grid>
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

          <Stack gap="xs" c="dimmed">
            <>
              <Text size="xs">(480) 555-0103</Text>
            </>
            <>
              <Text size="xs">4517 Washington Ave. Manchester, Kentucky 39495</Text>
            </>
            <>
              <Text size="xs">debra.holt@example.com</Text>
            </>
          </Stack>
        </Grid.Col>
      </Grid>

      <Divider my="xl" />

      <Group justify="space-between">
        <Text size="sm" c="dimmed">
          Made With Love By Figmaland All Right Reserved
        </Text>

        <Group gap="md">
          <>
            <Text size="sm">Facebook</Text>
          </>
          <>
            <Text size="sm">Instagram</Text>
          </>
          <>
            <Text size="sm">Twitter</Text>
          </>
        </Group>
      </Group>
    </Container>
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
          <Text key={item} size="xs" c="dimmed">
            {item}
          </Text>
        ))}
      </Stack>
    </Grid.Col>
  );
}
