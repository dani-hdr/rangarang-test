"use client";
import React from "react";
import { Rating,Star  } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CustomRating = ({ value = 0, maxValue = 5 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(maxValue)].map((_, index) => (
        <div 
          key={index}
          className={`w-5 h-1.5 rounded-md ${
            index < value ? 'bg-primary' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  )
}
  
const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ee264f',
    inactiveFillColor: '#dddd'
  }
const InfoBox = () => {
  return (
    <div className="shadow-lg rounded-md px-4 py-5 ">
      <div className="flex flex-wrap justify-between gap-3">
        <div className="w-full xl:w-fit flex  tracking-tighter items-center justify-between text-xs text-gray-600 gap-2">
          تعداد نظرات
          <div>
            <span className="bg-green-500 text-[10px] rounded px-1 py-0.5 text-white ml-1">
              13
            </span>
            نظر
          </div>
        </div>
        <div className="w-full xl:w-fit flex font-medium  tracking-tighter items-center justify-between text-sm text-gray-600 gap-4">
          کیفیت محصول
          <CustomRating value={4}/>
        </div>
        <div className="w-full xl:w-fit flex  tracking-tighter items-center justify-between text-xs text-gray-600 gap-2">
          امتیاز 
         <Rating style={{ maxWidth: 80 }} value={4} readOnly itemStyles={myStyles} />
        </div>
        <div className="w-full xl:w-fit flex font-medium  tracking-tighter items-center justify-between text-sm text-gray-600 gap-4">
            مقرون به صرفه
          <CustomRating value={4}/>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
