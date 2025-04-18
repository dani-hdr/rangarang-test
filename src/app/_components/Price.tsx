import { Button } from "@/components/ui/button";
import { CircleDollarSign, CircleHelp, Truck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Price = ({ basePrice, currency }: { basePrice: number; currency: string }) => {
  return (
    <div className="flex flex-col gap-4 w-full bg-primary rounded-md p-5 text-white text-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <CircleDollarSign />
          قیمت :
        </div>
        <b>{basePrice} {currency}</b>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Truck />
          زمان تحویل :
        </div>
        <b>2 روز کاری</b>
      </div>
      <hr className="opacity-70" />
      <Button
        variant="secondary"
        size={"lg"}
        className="w-full font-bold text-gray-600 text-base"
      >
        تایید و ادامه
      </Button>
      <Link href="" className="flex self-center items-center gap-1 tracking-tight">
        <CircleHelp />
        راهنمای سفارش
      </Link>
    </div>
  );
};

export default Price;
