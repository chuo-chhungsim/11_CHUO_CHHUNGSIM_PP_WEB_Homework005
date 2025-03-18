"use client";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Title from "@/components/Title";

const FilterableCartoonList = ({ cartoons, cartoonsGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filteredCartoons, setFilteredCartoons] = useState(cartoons);

  useEffect(() => {
    if (!selectedGenre) {
      setFilteredCartoons(cartoons);
    } else {
      setFilteredCartoons(
        cartoons.filter((cartoon) => cartoon.ct_genre_id === selectedGenre)
      );
    }
    console.log("filtered cartoon", filteredCartoons);
  }, [selectedGenre, cartoons]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Title text1={"ALL"} text2={" cartoons"} />
        <Select onValueChange={(value) => setSelectedGenre(value)}>
          <SelectTrigger className="w-[250px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem>All CARTOONS</SelectItem>
            {cartoonsGenre.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.cartoon_genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCartoons.map((item) => (
          <Card
            key={item.id}
            route={"cartoons"}
            id={item.id}
            title={item.ct_title}
            description={item.ct_description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
export default FilterableCartoonList;
