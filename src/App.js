import { useState } from 'react';
import './App.css';

function App() {
  const [sueldo, setSueldo] = useState('');

  const handleChange = (e) => {
    setSueldo(e.target.value);
  };

  return (
    <div className="App">
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-lg-12'>
            <h2>Página de cálculo de remuneraciones</h2>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-lg-6'>
            <h4>Ingrese Sueldo Bruto</h4>
            <input
              type="number"
              className="form-control"
              placeholder="Ej: 850000"
              value={sueldo}
              onChange={handleChange}
            />
          </div>

          <div className='col-lg-6'>
            <h4>Datos ingresados</h4>
            <p><strong>Sueldo bruto:</strong> {sueldo ? `$${Number(sueldo).toLocaleString()}` : 'No ingresado'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
