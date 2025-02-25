import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='main-Container'>
      <div>
        <button onClick={() => navigate("/AllCharacters")}>
          AllCharacters
        </button>
        <button onClick={() => navigate("/Clans")}>Clans</button>
        <button onClick={() => navigate("/Kekkeigenkai")}>Kekkeigenkai</button>
        <button onClick={() => navigate("/Teams")}>Teams</button>
        <button onClick={() => navigate("/Kara")}>Kara</button>
        <button onClick={() => navigate("/TailedBeasts")}>TailedBeasts</button>
        <button onClick={() => navigate("/Villages")}>Villages</button>
        <button onClick={() => navigate("/Akatsuki")}>Akatsuki</button>
      </div>
    </div>
  );
};

export default Header;
