import './App.css';
import Select from './component/Select';
import { useEffect, useState } from 'react';

function App() {
  const options = [
    {
      name: 'test',
      value: 'test'
    },
    {
      name: 'test2',
      value: 2
    },{
      name: 'test3',
      value: [456, 'a', 39]
    },
  ]

  const [selected, setSelected] = useState(options[0])

  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <div className="App">
      <Select options={options} selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
