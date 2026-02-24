import { Box, Button, Center, Container, Text, TextInput } from "@mantine/core";

export function Newsletter() {
  return (
    <Container fluid px={156}>
      <Center h={"90vh"}>
        <Box ta={"center"}>
        <Text size="sm" fw={700} c="success">
          Newsletter
        </Text>
        <Text size="lg" fw={700}>
          Watch our courses
        </Text>
        <Text c="dimmed" size="lg">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Text>
        <TextInput
          size="lg"
          radius={0}
          placeholder="Your Email"
          rightSectionWidth={132}
          rightSection={
            <Button bg={"success"} radius={0} size="lg" variant="filled" aria-label="Search">
              Subscribe
            </Button>
          }
          aria-label="Your Email"
        />
        </Box>
      </Center>
    </Container>
  );
}
