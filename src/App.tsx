import { Route, Routes } from "react-router-dom";

import "./styles/app.scss";

import { Header } from "./components/globals/Header";

import { Home } from "./components/sections/Home";
import { CocktailList } from "./components/sections/CocktailList";

import { CocktailDetail } from "./components/sections/CocktailDetail";

import { Footer } from "./components/globals/Footer";

function App() {
  return (
    <div id="container-all" className="container-all">
      <Header />
      <main id="main" className="main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<CocktailList />} />
          <Route path="/search/:term" element={<CocktailList />} />
          
          <Route path="/cocktail" element={<CocktailDetail />} />
          <Route path="/cocktail/:id" element={<CocktailDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
