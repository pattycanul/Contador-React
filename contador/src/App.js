import { useState } from "react";
import './styles.css';


function App() {
  const [contador, setCount] = useState(0);

  const contadorClase = contador > 0 ? "text-success" : contador < 0 ? "text-danger" : "";

  return (
    <div className="Contenedor">
      <div className="card text-center">
        <div className="card-body">
          <h1>CONTADOR APP</h1>
          <button className="color-box green"></button>
          <button className="color-box red"></button>
          <div className="color-box"></div>
          <div className="my-5">
            <h1 className={`my-5 ${contadorClase}`}>{contador}</h1>
            <button className="btn btn-danger mx-3" onClick={() => setCount(contador - 1)}>
              -
            </button>
            
            <button className="btn btn-secondary mx-3" onClick={() => setCount(0)}>
              Reset
            </button>

            <button className="btn btn-success mx-3" 
            onClick={() => setCount(contador + 1)}>
              +
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
