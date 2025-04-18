"use client";
import React, { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  const images = [
    {
      id: 1,
      src: "/images/product1.jpg",
    },
    {
      id: 2,
      src: "/images/product2.jpg",
    },
    {
      id: 3,
      src: "/images/product3.jpg",
    },
    {
      id: 4,
      src: "/images/product4.jpg",
    },
  ];

  const NextArrow = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        onClick={onClick}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
    );
  };

  const PrevArrow = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        onClick={onClick}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    );
  };

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
  };

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full mx-auto">
      <div className="mb-4">
        <Slider
          {...mainSettings}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1 || undefined)}
        >
          {images.map((img) => (
            <div key={img.id} className="relative aspect-square">
              <Image
                src={img.src}
                alt={`Product image ${img.src
                  .replace("/images/product", "")
                  .replace(".jpg", "")}`}
                fill
                className="object-cover rounded-lg"
                priority={img.id === images[0].id}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="px-4">
        <Slider
          {...thumbnailSettings}
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2 || undefined)}
        >
          {images.map((img) => (
            <div key={`thumb-${img.id}`} className="px-1">
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={`Thumbnail ${img.src
                    .replace("/images/product", "")
                    .replace(".jpg", "")}`}
                  fill
                  className="object-cover rounded-md cursor-pointer"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
