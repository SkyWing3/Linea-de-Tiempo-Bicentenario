export default function TimelineItem({ item }) {
    return (
      <div className="mb-8 flex justify-between items-center w-full">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-white text-lg">{new Date(item.fecha).getDate()}</h1>
        </div>
        <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 className="font-bold text-xl">{item.titulo}</h3>
          <p className="text-gray-500 text-sm">{item.fecha}</p>
          <p className="mt-2">{item.descripcion}</p>
          {item.tipo === 'video' && (
            <a href={item.url} target="_blank" className="text-blue-600 hover:underline mt-2 block">
              Ver video
            </a>
          )}
          <p className="text-gray-400 text-xs mt-2">Créditos: {item.creditos}</p>
        </div>
      </div>
    );
  }
  