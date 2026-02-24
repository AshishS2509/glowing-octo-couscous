import {
  Container,
  Title,
  Text,
  Card,
  Avatar,
  Group,
  SimpleGrid,
  Stack,
} from "@mantine/core";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCo",
    avatar: "SJ",
    text: "This platform completely transformed how we work. The results have been incredible and our team productivity doubled.",
  },
  {
    name: "Mike Chen",
    role: "Developer",
    avatar: "MC",
    text: "The best tool I've used in years. Simple, powerful, and the support team is outstanding. Highly recommended!",
  },
  {
    name: "Emma Williams",
    role: "Product Manager",
    avatar: "EW",
    text: "We saw a 3x improvement in our workflow within the first month. It's now an essential part of our stack.",
  },
];

export function Testimonial() {
  return (
    <Container  fluid py={80} px={156} bg={"white"}>
      <Stack>
        <Text size="sm" fw={700} c="success">
          Team
        </Text>
        <Title size={36} fw={800} lh={1}>
          Get Quality Education
        </Title>
        <Text c="dimmed" size="lg" >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Text>
      </Stack>
      <Stack pt={120}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" w="100%">
          {testimonials.map((t) => (
            <Card key={t.name} shadow="sm" padding="lg" radius="md" withBorder>
              <Group gap={4} mb="sm">
                {[...Array(5)].map(() => (
                  <></>
                ))}
              </Group>
              <Text size="sm" c="dimmed" mb="lg">
                {t.text}
              </Text>
              <Group>
                <Avatar color="blue" radius="xl">
                  {t.avatar}
                </Avatar>
                <div>
                  <Text size="sm" fw={600}>
                    {t.name}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {t.role}
                  </Text>
                </div>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
