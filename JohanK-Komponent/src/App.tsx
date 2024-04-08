import { useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";

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
        menuItems={menuItems} // Look menu above
        menuSize={2} // Rem
        iconSize={2} // Rem
        lineHeight={3}
        color="darkblue"
        menuBackgroundColor="lightgrey"
        position="start" // "start" | "center" | "end"
      />
    </>
  );
}

export default App;
