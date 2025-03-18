export const getAllCartoons = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/cartoon`);
    if (!res.ok) throw new Error("Failed to fetch cartoon");
    const data = await res.json();
    return data.payload;
  } catch {
    console.error("Error fetching cartoons");
    return [];
  }
};
export const getAllCartoonGenre = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/cartoon_genre`
    );
    if (!res.ok) throw new Error("Failed to fetch cartoon genre");
    const data = await res.json();
    return data.payload;
  } catch {
    console.error("Error fetching cartoons genre");
    return [];
  }
};
export const getCartoonById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/cartoon/${id}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch cartoon id`);
    }
    const data = await res.json();
    console.log(data);
    return data.payload;
  } catch {
    console.error("Error fetching cartoon by id");
    return null;
  }
};
