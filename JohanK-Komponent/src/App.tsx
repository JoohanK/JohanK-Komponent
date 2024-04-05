import { useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Home" },
    { label: "About" },
    { label: "Contact" },
    { label: "Blog" },
    { label: "Careers" },
  ];

  return (
    <>
      <HamburgerMenu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        menuItems={menuItems}
        color="red"
      />
    </>
  );
}

export default App;
