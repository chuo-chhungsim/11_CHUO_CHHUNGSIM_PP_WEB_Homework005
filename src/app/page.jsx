import ImageCard from "@/components/ImageCard";
import Title from "@/components/Title";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title text1={"TOP"} text2={" trending categories"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
        <Link href={"/books"}>
          <ImageCard
            title={"Book"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            image={
              "https://assets.designhill.com/design-blog/wp-content/uploads/2018/05/Bold-Typography.jpg"
            }
          />
        </Link>
        <Link href={"/cartoons"}>
          <ImageCard
            title={"Cartoon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            image={
              "https://i.pinimg.com/736x/16/3d/b0/163db0a5935fc109245cda579ccd6c12.jpg"
            }
          />
        </Link>
      </div>
    </div>
  );
}
