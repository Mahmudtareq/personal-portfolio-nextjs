export async function getData() {
  const res = await fetch("../data/project.json");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
