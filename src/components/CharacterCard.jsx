import React from "react";

const CharacterCard = ({ character, onClick }) => {
  const speciesColor = (species) => {
    // Return a color based on species
    if (!species.length) return "bg-gray-200";
    return "bg-green-200";
  };

  return (
    <div
      className={`shadow-lg cursor-pointer hover:scale-105 transition-transform w-full h-80 rounded-2xl relative ${speciesColor(
        character.species
      )}`}
      onClick={onClick}
      style={{
        backgroundImage: `url('https://picsum.photos/200?random=${character.name}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        // background: `linear-gradient(90deg in oklab, black, #444, black)`,
      }}
    >
      {/* <img
        className="w-full h-40 object-cover rounded mb-4"
        src={`https://picsum.photos/200?random=${character.name}`}
        alt={character.name}
      /> */}

      <h3
        style={{
          background: `linear-gradient(90deg in oklab, indigo, black, black)`,
        }}
        className="w-full text-2xl font-bold p-4 opacity-80 absolute bottom-0 h-28 text-white rounded-2xl"
      >
        {character.name}
      </h3>
    </div>
  );
};

export default CharacterCard;
