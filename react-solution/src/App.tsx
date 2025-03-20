import { useState } from 'react';
import DivItem from './components/DivItem';
import ControlPanel from './components/ControlPanel';

const App: React.FC = () => {

  const [state, setState] = useState<Record<string, boolean>>({
    test1: true,
    test2: true,
    test3: true,
    test4: true,
    test5: true,
    test6: true,
    test7: true,
    test8: true
  });


  const toggleVisibility = (key: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };


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

      if (!response.ok) {
        throw new Error(`Failed to save state: ${response.status}`);
      }

      alert('State saved successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-4">
      {/* Group 1-6 */}
      <div className="row">
        {Object.keys(state).slice(0, 6).map((key) => (
          <DivItem key={key} id={key} visible={state[key]} />
        ))}
      </div>

      {/* Group 7-8 */}
      <div className="row mt-2">
        {Object.keys(state).slice(6).map((key) => (
          <DivItem key={key} id={key} visible={state[key]} />
        ))}
      </div>

      {/* Control Panel */}
      <ControlPanel state={state} onToggle={toggleVisibility} onSave={saveState} />
    </div>
  );
};

export default App;