import {
  Container,
  Text,
  Card,
  Box,
  Button,
  Avatar,
  Flex,
  Grid,
  Stack,
} from "@mantine/core";
import { Icon, type IconType } from "./shared/icons";
import { useHover } from "@mantine/hooks";

const FEATURES = [
  {
    icon: "board",
    title: "Certified Teacher",
    description: "The gradual accumulation of information about",
  },
  {
    icon: "telescope",
    title: "Expert instruction",
    description: "The gradual accumulation of information about",
  },
];

/* Reusable feature card */
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <Card shadow="md" radius="0" p={{ lg: "xl", md: "lg" }}>
      <Avatar variant="filled" radius={6} h={76} w={76} mb={8} color="success">
        <Icon type={icon} />
      </Avatar>

      <Text
        fz={{ base: "14px", xs: "14px", sm: "14px", md: "16px", lg: "16px" }}
        fw={700}
        mt="md"
        lts={0.2}
        mb={16}
        style={{ whiteSpace: "nowrap" }}
      >
        {title}
      </Text>

      <Box h={4} w={48} bg="danger" mb={16} />

      <Text fz="sm" c="neutral">
        {description}
      </Text>
    </Card>
  );
}

export function Packages() {
  const { ref, hovered } = useHover();

  return (
    <Container
      fluid
      bg="white"
      py={{ lg: 196, md: 196, sm: 98, xs: 98, base: 98 }}
      px={{ lg: 256, md: 96, sm: 28, base: 28 }}
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
              styles={{ root: { transition: "all 200ms" } }}
              size="md"
              color="success"
              variant="subtle"
              rightSection={
                <Stack
                  pl={hovered ? "5px" : 0}
                  styles={{ root: { transition: "all 200ms" } }}
                >
                  <Icon type="angle" />
                </Stack>
              }
            >
              Learn More
            </Button>
          </Box>
        </Grid.Col>

        <Grid.Col span={{ lg: 6, md: 6, sm: 12, xs: 12 }} p={0}>
          <Flex gap={16} p={{ sm: "xl" }}>
            {FEATURES.map((item) => (
              <FeatureCard
                key={item.title}
                {...item}
                icon={item.icon as IconType}
              />
            ))}
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
