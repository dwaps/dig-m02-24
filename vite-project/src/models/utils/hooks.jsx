import { useEffect, useState } from "react";

export function useFetchData(url = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTodos() {
      setLoading(true);
      const res = await fetch(url);
      try {
        if (res.ok) {
          const dataReceived = await res.json();
          if (dataReceived) {
            setTimeout(() => {
              setData(dataReceived);
              setLoading(false);
            }, 5000);
          } else {
            console.log("pas de data");
          }
        }
      } catch (e) {
        console.error("Impossible de récupérer la resource");
      }
    }

    getTodos();
  }, []);

  return { data, loading };
}
