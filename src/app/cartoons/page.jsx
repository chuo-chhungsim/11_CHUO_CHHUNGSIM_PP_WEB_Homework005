import {
  getAllCartoons,
  getAllCartoonGenre,
} from "@/services/cartoons/cartoonService";
import FilterableCartoonList from "./_components/FilterableCartoonList";

const Page = async ({ searchParams }) => {
  const { query } = searchParams;
  const cartoons = await getAllCartoons();
  const cartoonsGenre = await getAllCartoonGenre();

  let filterSearchCartoons = cartoons;
  if (query) {
    filterSearchCartoons = cartoons.filter((cartoon) =>
      cartoon.ct_title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return (
    <div>
      <FilterableCartoonList
        cartoons={filterSearchCartoons}
        cartoonsGenre={cartoonsGenre}
      />
    </div>
  );
};

export default Page;
