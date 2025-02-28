import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homePage.css";

const HomePage = () => {
  const [character, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const { data } = await axios.get(
        `https://narutodb.xyz/api/character?limit=1431`
      );

      console.log(data.characters);
      setCharacters(data.characters);
    } catch (error) {
      console.error("Error while fetching characters");
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
