import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); // That is the default state, and use destructuring here to get two items from that array we got from useState.
  // This is a hook! All hooks begin with 'use'
  // location: current state; setLocation: an update function for that state - get back a hook always get back an array following this pattern.
  // use state create a hook
  const [breeds, setBreeds] = useState([]); //breeds will be an array
  // const [animal, setAnimal] = useState("dog");
  // const [breed, setBreed] = useState("");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
