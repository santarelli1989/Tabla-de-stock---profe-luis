import "./Botones.css";

function Botones() {
  return (
    <div className="botones border-y">
      <div className="vista-botones">
        <div className="botones-derecha">
          <button>vista normal</button>
          <button>precios mas bajo</button>
          <button>stock mas bajos</button>
        </div>
        <div className="botones-izquierda">
          <button className="agregar-producto">agregar producto</button>
        </div>
      </div>
    </div>
  );
}
export default Botones;
