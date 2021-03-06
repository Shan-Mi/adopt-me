import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent,
} from "react";
import pet, { ANIMALS, Animal } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";
import { RouteComponentProps } from "@reach/router";

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
  const [location, setLocation] = useState("Seattle, WA"); // That is the default state, and use destructuring here to get two items from that array we got from useState.
  // This is a hook! All hooks begin with 'use'
  // location: current state; setLocation: an update function for that state - get back a hook always get back an array following this pattern.
  // use state create a hook
  const [breeds, setBreeds] = useState([] as string[]); // breeds will be an array
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  // Animal: label; dog: default state; ANIMALS: list of options to choose from
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([] as Animal[]);
  const [theme, setTheme] = useContext(ThemeContext);
  // above, it comes back with a setTheme as well, but we are not going to use it so not grab it

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  // handle data asynchronized
  // run after the render happens
  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error); //return a promise

    // This is to clear the input, aka the set of breeds after we choose new breed.
    // After that we re-render the page with that new breed (if we choose a new breed)
    setBreeds([]);
    setBreed(""); // get it from useDropdown

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name); // destructuring breeds and turn property name to string
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // this is a list of dependencies, react is going to check if any one of these changed, rerun this effect after it renders; if location changes, it will not rerun this effect.

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Mediumorchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
