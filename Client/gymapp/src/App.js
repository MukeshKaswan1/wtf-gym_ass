import { Center, Heading, Img } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Gyms from "./pages/Gyms";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Gyms />
      <Footer />
    </>
  );
}

export default App;
