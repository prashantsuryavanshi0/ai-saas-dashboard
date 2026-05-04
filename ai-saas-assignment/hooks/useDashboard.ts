import { useEffect, useState } from "react";

export default function useDashboard() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const res = await fetch("/api/dashboard");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, refresh: fetchData };
}