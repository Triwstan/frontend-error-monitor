import ErrorTable from "./ErrorTable";
import ErrorStats from "./ErrorStats";

export default function Dashboard() {
  const errors = JSON.parse(localStorage.getItem("errors") || "[]");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Error Monitoring Dashboard</h1>
      <ErrorStats errors={errors} />
      <ErrorTable errors={errors} />
    </div>
  );
}
