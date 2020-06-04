import { createContext } from "react";

// we can put anything in createContext - object, string... here we put a hook
// put an empty function as a placeholder
// a hook: a state and an updater
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
