import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Section from "./Section";

function App() {
  return (
    <Container size="sm" textAlign="center" my="10rem">
      <Routes>
        <Route path="/" element={<Section />}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
