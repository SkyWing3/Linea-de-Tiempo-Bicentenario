import TimelineItem from './TimelineItem';

export default function Timeline({ items }) {
  // Ordenar cronológicamente ascendente
  const sorted = [...items].sort((a,b) => new Date(a.fecha) - new Date(b.fecha));
  return (
    <div className="container mx-auto p-4">
      <div className="relative wrap overflow-hidden p-2 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-blue-500 h-full left-1/2 transform -translate-x-1/2"></div>
        {sorted.map(item => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
