export const getAllBooks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/book`);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data.payload;
  } catch {
    console.error("Error fetching books");
    return [];
  }
};
export const getAllCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/book_category`
    );
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data.payload;
  } catch {
    console.error("Error fetching categories");
    return [];
  }
};
export const getBookById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/book/${id}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch book. Status: ${res.status}`);
    }
    const data = await res.json();
    return data.payload;
  } catch {
    console.error("Error fetching book by id");
    return null;
  }
};
