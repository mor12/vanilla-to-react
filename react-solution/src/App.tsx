import { useState } from 'react';

type StateType = {
  [key: string]: boolean;
};

const App = () => {
  const initialState: StateType = {
    test1: true,
    test2: true,
    test3: true,
    test4: true,
    test5: true,
    test6: true,
    test7: true,
    test8: true
  };

  const [state, setState] = useState(initialState);

  // ✅ Toggle para activar/desactivar elementos y botones
  const toggleVisibility = (key: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  // ✅ Guardar estado (simulación de llamada a una API)
  const saveState = async () => {
    console.log('Saved State:', JSON.stringify(state));

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      });

      if (response.ok) {
        alert('State saved successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-4">
      {/* ✅ Group 1-6 */}
      <div className="row">
        {Object.keys(state).slice(0, 6).map((key) => (
          state[key] && (
            <div key={key} className="col border p-2 text-center">
              {key}
            </div>
          )
        ))}
      </div>

      {/* ✅ Group 7-8 */}
      <div className="row mt-2">
        {Object.keys(state).slice(6).map((key) => (
          state[key] && (
            <div key={key} className="col border p-2 text-center">
              {key}
            </div>
          )
        ))}
      </div>

      {/* ✅ Botones de control */}
      <div className="mt-3">
        <div className="row">
          <div className="col">
            {Object.keys(state).slice(0, 6).map((key) => (
              <button
                key={key}
                className={`btn ${state[key] ? 'btn-primary' : 'btn-secondary'} mr-2`}
                onClick={() => toggleVisibility(key)}
              >
                {state[key] ? `Disable ${key}` : `Enable ${key}`}
              </button>
            ))}
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            {Object.keys(state).slice(6).map((key) => (
              <button
                key={key}
                className={`btn ${state[key] ? 'btn-primary' : 'btn-secondary'} mr-2`}
                onClick={() => toggleVisibility(key)}
              >
                {state[key] ? `Disable ${key}` : `Enable ${key}`}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ Botón para guardar el estado */}
        <div className="row mt-2">
          <div className="col">
            <button className="btn btn-success" onClick={saveState}>
              Save State
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;