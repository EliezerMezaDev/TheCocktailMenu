import { Route, Routes } from "react-router-dom";

import "./styles/app.scss";

import { Header } from "./components/globals/Header";

import { Hero } from "./components/sections/Hero";
import { Random } from "./components/sections/Random";
import { Cocktails } from "./components/sections/Cocktails";
import { CocktailDetail } from "./components/sections/CocktailDetail";

import { Footer } from "./components/globals/Footer";

function App() {
  return (
    <div id="container-all" className="container-all">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main id="main" className="main">
              <Hero />
              <Random />
              <Cocktails />
            </main>
          }
        />

        <Route path="/cocktail/:id" element={<CocktailDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
