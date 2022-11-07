import React, { useState } from 'react'
import Section1 from "../HomeSections/Section1";
import Section2 from "../HomeSections/Section2";
// import Section3 from "./Sections/Section3";
// import Section4 from "./Sections/Section4";
// import Section5 from "./Sections/Section5";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <div>
        <Navbar toggle={toggle} />
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Section5 /> */}
      <Footer />
    </div>
  );
};

export default Home;
