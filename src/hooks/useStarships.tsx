import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const result = await fetch(`https://swapi.py4e.com/api/starships/`);
  return await result.json();
}

export function useStarships() {
  return useQuery({ queryKey: ["starships"], queryFn: fetchData });
}
