import "./styles/app.scss";

import { Header } from "./components/globals/Header";

import { Hero } from "./components/sections/Hero";
import { Categories } from "./components/sections/Categories";
import { Liquors } from "./components/sections/Liquors";
import { Random } from "./components/sections/Random";

function App() {
  return (
    <div id="container-all" className="container-all">
      <Header />

      <main id="main" className="main">
        <Hero />
        <Random />
        <Categories />
        <Liquors />
      </main>
    </div>
  );
}

export default App;
