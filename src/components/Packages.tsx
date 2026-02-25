import {
  Container,
  Text,
  Card,
  Box,
  Button,
  Avatar,
  Flex,
  Grid,
} from "@mantine/core";
import { Icon } from "./shared/icons";
import { useHover } from "@mantine/hooks";

export function Packages() {
  const { ref } = useHover();

  return (
    <Container
      fluid
      bg="white"
      py={{ lg: 196, md: 196, sm: 98, xs: 98, base: 98 }}
      px={{ lg: 256, md: 96, sm: 28 }}
    >
      <Grid gutter={32} align="center">
        <Grid.Col span={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Box mr={12}>
            <Box h={8} w={96} bg="danger" mb={36} />

            <Text fz={{ lg: 40, md: 32, sm: 28 }} fw={700} mt="md" mb={32}>
              Affordable Packages
            </Text>

            <Text
              size="sm"
              c="neutral"
              lh={1.6}
              mb={32}
              fw={600}
              mr={{ lg: 164, md: 12 }}
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </Text>

            <Button
              ref={ref}
              p={0}
              m={0}
              c="success"
              variant="transparent"
              rightSection={<Icon type="angle" />}
            >
              Learn More
            </Button>
          </Box>
        </Grid.Col>

        <Grid.Col span={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Flex gap={16} p={{ sm: "xl" }}>
            <Card shadow="md" radius="0" p={{ lg: "xl", md: "lg" }}>
              <Avatar
                variant="filled"
                radius={6}
                h={76}
                w={76}
                mb={8}
                color="success"
              >
                <Icon type="board" />
              </Avatar>

              <Text
                fz="md"
                fw={700}
                mt="md"
                lts={0.2}
                mb={16}
                style={{ whiteSpace: "nowrap" }}
              >
                Certified Teacher
              </Text>

              <Box h={4} w={48} bg="danger" mb={16} />

              <Text fz="sm" c="neutral">
                The gradual accumulation of information about
              </Text>
            </Card>

            <Card shadow="md" radius="0" p={{ lg: "xl", md: "lg" }}>
              <Avatar
                variant="filled"
                radius={6}
                h={76}
                w={76}
                mb={8}
                color="success"
              >
                <Icon type="telescope" />
              </Avatar>

              <Text
                fz="md"
                fw={700}
                mt="md"
                lts={0.2}
                mb={16}
                style={{ whiteSpace: "nowrap" }}
              >
                Expert instruction
              </Text>

              <Box h={4} w={48} bg="danger" mb={16} />

              <Text fz="sm" c="neutral">
                The gradual accumulation of information about
              </Text>
            </Card>
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
