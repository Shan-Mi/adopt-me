import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
// import SearchParams from "./SearchParams";
// import Details from "./Details";
// delete that, because we don't want Parcel to bundle that details right now.
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
// dynamically import, it is a js thing. it is a promise thing
// Now Details is a placeholder comoponent that will not load this code until later when Details is actually tried to be rendered for the first time.
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  // set some default value
  // now we grab the whole array and call it themeHook
  // themeHook = [color, setColor]
  // inside of <ThemeContext.Provider >, everything has a global app state
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
