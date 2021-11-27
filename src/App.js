import { Container } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Section from "./Section";

function App() {
  const location = useLocation();
  return (
    <Container size="sm" textAlign="center" my="10rem">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Section />}>
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Container>
  );
}

export default App;
