import React from "react";
import "./HamburgerMenu.scss";

interface MenuItem {
  label: string;
}

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  menuItems: MenuItem[];
  color?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  toggleMenu,
  menuItems,
  color = "black",
}) => {
  const getLineStyle = () => ({
    backgroundColor: color,
  });

  return (
    <div className="HamburgerMenu">
      <div onClick={toggleMenu} className={`hamburger ${isOpen ? "open" : ""}`}>
        {!isOpen ? (
          <>
            <div className="line" style={getLineStyle()} />
            <div className="line" style={getLineStyle()} />
            <div className="line" style={getLineStyle()} />
          </>
        ) : (
          <div className="x-icon" style={{ color: color }}>
            ✕
          </div>
        )}
      </div>

      {isOpen && (
        <div className="menu">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="menu-item" style={{ color: color }}>
              {menuItem.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
