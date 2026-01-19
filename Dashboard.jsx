import { useEffect, useState } from "react";
import { getAllErrors } from "../core/readErrors";
import ErrorTable from "./ErrorTable";
import ErrorStats from "./ErrorStats";

export default function Dashboard() {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getAllErrors().then(setErrors);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Error Monitoring Dashboard</h1>
      <ErrorStats errors={errors} />
      <ErrorTable errors={errors} />
    </div>
  );
}
