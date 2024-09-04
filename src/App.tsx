import "./styles/app.scss";

import { Header } from "./components/globals/Header";

import { Hero } from "./components/sections/Hero";
import { Random } from "./components/sections/Random";
import { Cocktails } from "./components/sections/Cocktails";

function App() {
  return (
    <div id="container-all" className="container-all">
      <Header />

      <main id="main" className="main">
        <Hero />
        <Random />
        <Cocktails />
      </main>
    </div>
  );
}

export default App;
