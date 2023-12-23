import React from "react";
import Slider from "react-slick";
import Card from "../Card";
import { Cuisine } from "@/data";
import { useRouter } from "next/navigation";

const SimpleSlider = () => {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleClick = (cuisine:string)=>{
    var url = `/items?cuisine=${cuisine}`
    router.push(url)
  }

  return (
    <div className="mt-4">
      <h2 className="text-3xl font-bold ">
        Exquisite Flavors of Asia
      </h2>
      <div className="mt-5">
        <Slider {...settings}>
          {Cuisine.map((x) => (
            <Card description={x.description} title={x.title} image={x.img}  />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
