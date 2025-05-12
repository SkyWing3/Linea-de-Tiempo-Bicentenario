import { useEffect, useState } from 'react';
import { fetchItems } from './services/api';
import Timeline from './components/Timeline';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems()
      .then(res => setItems(res.data.filter(i => i.activo)))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 shadow">
        <h1 className="text-center text-3xl font-semibold">Línea de Tiempo: Bicentenario de Bolivia</h1>
      </header>
      {loading 
        ? <div className="flex justify-center items-center h-64"><span>Cargando...</span></div>
        : <Timeline items={items} />
      }
    </div>
  );
}

export default App;
