import { Carousel } from "@mantine/carousel";
import {
  Container,
  Title,
  Text,
  Card,
  Image,
  Stack,
  Flex,
} from "@mantine/core";
import { Icon } from "./shared/icons";

const TEAM = [
  { image: 1, name: "Julian Jameson", role: "Profession" },
  { image: 2, name: "Julian Jameson", role: "Profession" },
  { image: 3, name: "Julian Jameson", role: "Profession" },
  { image: 4, name: "Julian Jameson", role: "Profession" },
];

function TeamCard({
  image,
  name,
  role,
}: {
  image: number;
  name: string;
  role: string;
}) {
  return (
    <Card radius="lg" shadow="lg" padding="0" h="100%" ta="center">
      <Image src={`user-cover-${image}.png`} fit="cover" height={296} />

      <Text fz="md" fw={700} mt="md" lts={0.2}>
        {name}
      </Text>

      <Text fz="xs" c="neutral" mt="sm">
        {role}
      </Text>

      <Flex justify="center" gap={16} py={16}>
        <Icon type="facebook" />
        <Icon type="instagram" />
        <Icon type="twitter" />
      </Flex>
    </Card>
  );
}

export function Testimonial() {
  return (
    <Container
      fluid
      py={80}
      px={{ lg: 256, md: 96, sm: 28, base: 28 }}
      bg="white"
    >
      <Stack>
        <Text size="sm" fw={700} c="success">
          Team
        </Text>

        <Title size={28} fw={800} lh={1}>
          Get Quality Education
        </Title>

        <Text c="neutral" size="sm" maw={452} fw={600}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Text>
      </Stack>

      <Stack pt={96}>
        <Container fluid p={0}>
          <Carousel
            withIndicators={false}
            slideGap="xl"
            slideSize={{
              base: "100%",
              xs: "50%",
              sm: "33.3333%",
              md: "33.3333%",
              lg: "25%",
            }}
            emblaOptions={{ loop: true, align: "start" }}
            px={{ lg: 0, base: 48 }}
          >
            {[...TEAM, ...TEAM].map((member, idx) => (
              <Carousel.Slide key={idx} pb={36}>
                <TeamCard {...member} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Container>
      </Stack>
    </Container>
  );
}
