export default function ErrorTable({ errors }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Type</th>
            <th className="p-2">Message</th>
            <th className="p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {errors.map(err => (
            <tr key={err.id} className="border-t">
              <td className="p-2">{err.type}</td>
              <td className="p-2 text-sm">{err.message}</td>
              <td className="p-2 text-sm">
                {new Date(err.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
