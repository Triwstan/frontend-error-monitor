export default function ErrorStats({ errors }) {
  const counts = errors.reduce((acc, e) => {
    acc[e.type] = (acc[e.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex gap-4">
      {Object.entries(counts).map(([type, count]) => (
        <div key={type} className="p-4 border rounded">
          <h3 className="font-semibold">{type}</h3>
          <p className="text-xl">{count}</p>
        </div>
      ))}
    </div>
  );
}
