import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AiFeature from "./components/AiFeature";

function App() {
  return (
    <Box>
      <NavBar />
      <Box as={"main"} backgroundColor={"red"} position={"relative"}>
        <Hero  />
        <Stats />
        <AiFeature />
        <Box backgroundColor={"blueviolet"}>How it works Section</Box>
        <Box backgroundColor={"lavender"}>Benifit Section</Box>
        <Box backgroundColor={"lightcoral"}>CTA Section</Box>
        <Box backgroundColor={"gray"}>footer</Box>
      </Box>
    </Box>
  );
}

export default App;
