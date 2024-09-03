import "./styles/app.scss";

import { Header } from "./components/globals/Header";

import { Hero } from "./components/sections/Hero";
import { Categories } from "./components/sections/Categories";
import { Liquors } from "./components/sections/Liquors";

function App() {
  return (
    <div id="container-all" className="container-all">
      <Header />

      <main id="main" className="main">
        <Hero />
        <Categories />
        <Liquors />
      </main>
    </div>
  );
}

export default App;
