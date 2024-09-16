import React, { useState, useEffect } from "react";

const CharacterModal = ({ character, onClose }) => {
  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    const fetchHomeworld = async () => {
      const response = await fetch(character.homeworld);
      const data = await response.json();
      setHomeworld(data);
    };
    fetchHomeworld();
  }, [character]);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div className="p-8 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{character.name}</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            Close
          </button>
        </div>
        <p>Height: {character.height / 100} meters</p>
        <p>Mass: {character.mass} kg</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Number of films: {character.films.length}</p>
        {homeworld && (
          <>
            <p>Homeworld: {homeworld.name}</p>
            <p>Terrain: {homeworld.terrain}</p>
            <p>Climate: {homeworld.climate}</p>
            <p>Population: {homeworld.population}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterModal;
