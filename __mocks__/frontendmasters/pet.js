import { readFileSync } from "fs";
import path from "path";
import { act } from "react-testing-library";

const breeds = [
  { name: "Bichon Frise" },
  { name: "Bologenese" },
  { name: "Coton de Tulear" },
  { name: "Havanese" },
  { name: "Maltese" }
];

const doggos = JSON.parse(
  readFileSync(path.join(__dirname, "res.json")).toString()
);
// up here is node thing, the magic part...wth
// doggos is res.json file actually

export const ANIMALS = ["dog", "cat", "bird"];
export const _breeds = breeds;
export const _dogs = doggos.animals;

const mock = {
  breeds: jest.fn(() => {
    return {
      then: callback => act(() => callback({ breeds }))
    };
  }), // spy function
  animals: jest.fn(() => {
    return {
      then: callback => act(() => callback(doggos))
    };
  })
};

export default mock;

/* 
Here we created a mock library of pet, so we've been calling our pet API client all over the place and creating an object looks like it and acts like it.
It has a breeds function, and we're making breeds a spy function that we can later make sure this called, and called with these things, so on and so forth.
It returns promise looked object (then:...), it is an object with a then function on it.
*/
