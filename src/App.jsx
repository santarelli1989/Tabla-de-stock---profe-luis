import "./App.css";
import Buscador from "./components/Buscador/Buscador";
import Botones from "./components/Button/Botones";
import Header from "./components/Header/Header";

import Tabla from "./components/Tabla/Tabla";

function App() {
  return (
    <>
      <Header />
      <Botones />
      <Tabla />
      <Buscador />
    </>
  );
}

export default App;
