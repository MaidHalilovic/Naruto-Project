import React, { use, useEffect, useState } from "react";
import axios from "axios";
import "./homePage.css";

const HomePage = () => {
  const [character, setCharacter] = useState([]);

  const fetchCharacters = async () => {
    try {
      const { data } = await axios.get(`https://narutodb.xyz/api/character`);

      console.log(data.characters);
      setCharacter(data.characters);
    } catch (error) {
      console.error("Error while fetching characters");
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
  return (
    <div className='container'>
      <h1>Characters:</h1>
      <div className='card'>
        {character.map((el, index) => (
          <div className='cards' key={index}>
            <img
              src={el.images}
              alt='img'
              style={{
                height: 200,
                width: 200,
              }}
            />
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
