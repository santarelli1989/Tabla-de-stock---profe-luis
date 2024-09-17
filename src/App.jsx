import "./App.css";
import Buscador from "./components/Buscador/Buscador";
import Botones from "./components/Botones/Botones";
import Header from "./components/Header/Header";

import Tabla from "./components/Tabla/Tabla";

function App() {
  return (
    <main>
      <Header />
      <Buscador />
      <Botones />
      <Tabla />
    </main>
  );
}

export default App;
