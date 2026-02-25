import { Box, Button, Center, Container, Text, TextInput } from "@mantine/core";

export function Newsletter() {
  return (
    <Container fluid >
      <Center h={"90vh"}>
        <Box ta={"center"}>
          <Text size="sm" fw={700} c="success" mb={8}>
            Newsletter
          </Text>
          <Text size="lg" fw={700} mb={8}>
            Watch our Courses
          </Text>
          <Text c="neutral" size="sm" fw={600} mb={8}>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </Text>
          <TextInput
            size="lg"
            radius={0}
            placeholder="Your Email"
            miw={{ lg: 840 }}
            rightSectionWidth={126}
            mt={96}
            rightSection={
              <Button
                bg={"success"}
                radius={0}
                right={0}
                size="lg"
                variant="filled"
                aria-label="Search"
              >
                <Text size="sm" fw={600}>Subscribe</Text>
              </Button>
            }
            aria-label="Your Email"
          />
        </Box>
      </Center>
    </Container>
  );
}
