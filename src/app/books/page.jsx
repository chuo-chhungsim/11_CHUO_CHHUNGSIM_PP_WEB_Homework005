import { getAllBooks, getAllCategories } from "@/services/book/bookServices";
import FilterBookList from "./_components/FilterBookList";

const page = async ({ searchParams }) => {
  const { search } = await searchParams;
  const books = await getAllBooks();
  // console.log("hello", books);
  const bookCategories = await getAllCategories();
  console.log(books);
  let filterSearchBook = books;
  if (search) {
    filterSearchBook = books.filter((book) =>
      book.book_title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <div>
      <FilterBookList
        books={filterSearchBook}
        catagoriesBooks={bookCategories}
      />
    </div>
  );
};
export default page;
