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
      <Grid h={{ lg: "100vh" }} gutter={0} px={0}>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          pl={{ lg: 156, md: 28, sm: 28, xs: 28, base: 28 }}
        >
          <Stack h="100%" justify="center" maw={500} pb={{ lg: 128 }}>
            <Text size="sm" fw={700} c="success">
              Welcome
            </Text>

            <Title
              fz={{ lg: 58, md: 46, sm: 36 }}
              fw={700}
              lh={1.45}
              lts={0.2}
              c={"primary"}
            >
              Best Learning Opportunities
            </Title>

            <Text
              c="neutral"
              lh={1.45}
              lts={0.2}
              size="lg"
              fw={600}
              maw={{ sm: "60%", xs: "60%", md: "60%", base: "100%" }}
              mt={16}
            >
              Our goal is to make online education work for everyone
            </Text>

            <Group pt={16}>
              <Button size="lg" bg="success">
                <Text size="sm" fw={600} px={16}>
                  Join Us
                </Text>
              </Button>
              <Button size="lg" variant="outline" color="success">
                <Text size="sm" fw={700} c="success">
                  Learn More
                </Text>
              </Button>
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image src="hero-cover-1.png" h="100%" fit="cover" />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
