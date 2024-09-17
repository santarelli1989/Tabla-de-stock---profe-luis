import "./Tabla.css";

function Tabla() {
  return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>precio</th>
            <th>stock</th>
            <th>proveedor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Laptop Dell XPS 13</td>
            <td>999.99</td>
            <td>25</td>
            <td>DELL</td>
          </tr>
        </tbody>
      </table>
  );
}

export default Tabla;
