import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { RiHealthBookFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import { FaShoppingCart } from "react-icons/fa";
function SideBarMenu() {
  const { toggleSwitchState, setToggleSwitchState } = useContext(GlobalContext);
  const [activeIndex, setActiveIndex] = useState(null);
  let location = useLocation();

  useEffect(() => {
    setActiveIndex(null);
    setToggleSwitchState(false);
  }, [location, setToggleSwitchState]);

  const handleAccordionToggle = (index) => {
    if (!toggleSwitchState) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className={`accordeon ${toggleSwitchState ? 'active' : ''}`}>
      <div className="accordeon-item">
        <div className="accordeon-header">
          <Link to="/">
            <span className="icon"><IoHomeSharp></IoHomeSharp></span>
            <span className="title">Home</span>
          </Link>
        </div>
      </div>
      <div className="accordeon-item">
        <div className="accordeon-header" onClick={() => handleAccordionToggle(1)}>
          <span className="icon"><GrGallery></GrGallery></span>
          <span className="title">Galleries <FaAngleDown></FaAngleDown></span>
        </div>
        <div className={`accordeon-body ${activeIndex === 1 && toggleSwitchState ? 'active' : ''}`}>
          <div className="accordeon-body-content">
            <ul>
              <li><Link to="/gallery1">Color</Link></li>
              <li><Link to="/gallery2">Black and Gray</Link></li>
              <li><Link to="/gallery3">Cover up</Link></li>
              <li><Link to="/gallery4">Post-mastectomy reconstruction tattoo</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="accordeon-item">
        <div className="accordeon-header">
          <Link to="/aftercare">
            <span className="icon"><RiHealthBookFill></RiHealthBookFill></span>
            <span className="title">Aftercare</span>
          </Link>
        </div>
      </div>

      <div className="accordeon-item">
        <div className="accordeon-header">
          <Link to="/">
            <span className="icon"><FaShoppingCart /></span>
            <span className="title">Merch</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SideBarMenu;