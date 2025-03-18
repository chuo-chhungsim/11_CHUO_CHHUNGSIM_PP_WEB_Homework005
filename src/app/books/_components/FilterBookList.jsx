"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Title from "@/components/Title";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
const FilterBookList = ({ books, catagoriesBooks }) => {
  const [selectGenre, setSelectGenre] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    if (!selectGenre) {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((book) => book.book_cate_id === selectGenre)
      );
      console.log("filtered books", filteredBooks);
    }
  }, [selectGenre, books]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Title text1={"ALL"} text2={" book"} />
        <Select onValueChange={(value) => setSelectGenre(value)}>
          <SelectTrigger className="w-[250px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem>ALL BOOKS</SelectItem>
            {catagoriesBooks.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.book_cate_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredBooks.map((item) => (
          <Card
            key={item.id}
            route={"books"}
            id={item.id}
            title={item.book_title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
export default FilterBookList;
