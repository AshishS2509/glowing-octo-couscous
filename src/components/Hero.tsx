import {
  Container,
  Title,
  Text,
  Button,
  Grid,
  Image,
  Stack,
  Group,
} from "@mantine/core";

export function Hero() {
  return (
    <Container fluid p={0} bg="light">
      <Grid h="100vh" gutter={0} px={0}>
        {/* Left content */}
        <Grid.Col
          span={{ base: 12, md: 6 }}
          order={{ base: 2, md: 1 }}
          pl={156}
        >
          <Stack h="100%" justify="center" maw={500} pb={{ lg: 128 }}>
            <Text size="sm" fw={700} c="success">
              Welcome
            </Text>

            <Title size={58} fw={700} lts={0.2}>
              Best Learning Opportunities
            </Title>

            <Text c="neutral" lh={1.4} lts={0.2} size="20px" maw="60%">
              Our goal is to make online education work for everyone
            </Text>

            <Group>
              <Button size="lg" bg="success">
                Join Us
              </Button>
              <Button size="lg" variant="outline" color="success">
                Learn More
              </Button>
            </Group>
          </Stack>
        </Grid.Col>

        {/* Right image */}
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
          <Image src="hero-cover-1.png" h="100%" fit="cover" />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
