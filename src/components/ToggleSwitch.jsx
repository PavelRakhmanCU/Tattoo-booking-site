import React, { useContext } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { GlobalContext } from "../context/GlobalContext";
function ToggleSwitch() {
  const { toggleSwitchState, setToggleSwitchState } = useContext(GlobalContext);
  
  const handleToggle = () => {
    setToggleSwitchState(!toggleSwitchState);
  };

  return (
    <div className={`toggle-switch ${toggleSwitchState ? 'active' : ''}`} onClick={handleToggle}>
      <CgMenuGridR />
    </div>
  );
}

export default ToggleSwitch;