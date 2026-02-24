import { Container, Text, Card, Box, Button } from "@mantine/core";

export function Packages() {
  return (
    <Container fluid bg={"white"} py={80} px={156} display={"flex"}>
      <Box>
        <Text mt="sm" mb={7}>
          {"Affordable Packages"}
        </Text>
        <Text size="sm" c="dimmed" lh={1.6}>
          {
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
          }
        </Text>
        <Button variant="subtle">Learn More</Button>
      </Box>
      <Box display={"flex"}>
        <Card shadow="md" radius="md" padding="xl">
          <Text fz="lg" fw={500} mt="md">
            {"Certified Teacher"}
          </Text>
          <Text fz="sm" c="dimmed" mt="sm">
            {"The gradual accumulation of information about "}
          </Text>
        </Card>
        <Card shadow="md" radius="md" padding="xl">
          <Text fz="lg" fw={500} mt="md">
            {"Expert instruction"}
          </Text>
          <Text fz="sm" c="dimmed" mt="sm">
            {"The gradual accumulation of information about "}
          </Text>
        </Card>
      </Box>
    </Container>
  );
}
