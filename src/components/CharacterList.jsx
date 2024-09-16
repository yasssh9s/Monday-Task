import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";
import CharacterModal from "./CharacterModal";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageUrl, setPageUrl] = useState("https://swapi.dev/api/people/");
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharacters = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (error) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(pageUrl);
  }, [pageUrl]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error)
    return <div className="text-center mt-5 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
      </div>
      <Pagination
        next={nextPage}
        prev={prevPage}
        onNext={() => setPageUrl(nextPage)}
        onPrev={() => setPageUrl(prevPage)}
      />
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default CharacterList;
