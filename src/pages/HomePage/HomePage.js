import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homePage.css";

const HomePage = () => {
  const [character, setCharacter] = useState([]);

  const fetchCharacters = async () => {
    try {
      const { data } = await axios.get(
        `https://narutodb.xyz/api/character?limit=10`
      );

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
    // <div>
    //   {/* <div className='card'>
    //     {character.map((el, index) => (
    //       <div className='cards' key={index}>
    //         <img src={el.images} alt='img' />
    //       </div>
    //     ))}
    //   </div> */}
    // </div>
  );
};

export default HomePage;
