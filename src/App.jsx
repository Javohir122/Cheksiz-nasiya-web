import React from "react";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <About />
      <Services />
      <Contacts />

      <Footer />
    </div>
  );
}

export default App;
