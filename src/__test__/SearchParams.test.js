import React from "react";

import { render, cleanup } from "@testing-library/react";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";

afterEach(cleanup);
test("SearchParams", async () => {
  const { getByTestId } = render(<SearchParams />);
  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(pet.breeds).toHaveBeenCalled();
  const breedDropdown = getByTestId("use-dropdown-breed");
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1);
});
