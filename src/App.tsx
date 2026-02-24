import "@mantine/core/styles.css";
import { Navbar } from "./components/Navbar";
import { AppShell } from "@mantine/core";
import { Hero } from "./components/Hero";
import { Packages } from "./components/Packages";
import { Testimonial } from "./components/Testimonial";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <AppShell bg={"light"}>
        <AppShell.Header bg={"light"} pos={"sticky"} top={0} bd={0}>
          <Navbar />
        </AppShell.Header>
        <AppShell.Main>
          <Hero />
          <Packages />
          <Testimonial />
          <Newsletter />
          <Footer />
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default App;
