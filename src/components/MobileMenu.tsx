import React from "react";
import MenuBg from "@/assets/images/mobile-menu-bg.png";
import Image from "next/image";
import {
  Search,
  ShoppingBasket,
  CircleUserRound,
  AlignJustify,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
const MobileMenu = () => {
  return (
    <div className="w-full fixed  bottom-0 left-0 z-50 h-16 sm:hidden">
      <Image
        src={MenuBg}
        alt=""
        className="w-full h-full object-cover relative z-0"
      />
      <div className="flex items-center justify-between px-5 absolute w-full left-0 top-0 z-10  h-full">
        <div className="flex items-center gap-5">
        <Button variant='ghost' className="group !p-0 flex flex-col items-center gap-1">
          <AlignJustify className="text-gray-700 size-5"  />
          <span className="text-xs group-hover:text-primary"> دسته بندی</span>
        </Button>
        <Button variant='ghost' className="group !p-0 flex flex-col items-center gap-1">
          <Search className="text-gray-700 size-5"  />
          <span className="text-xs group-hover:text-primary"> جست و جو</span>
        </Button>
        
        </div>
        <Link className="text-primary text-lg font-bold" href=''>Logo</Link>
       <div className="flex items-center gap-5">
       <Link href="" className="group flex flex-col items-center gap-1">
          <ShoppingBasket className="text-gray-700 size-5"  />
          <span className="text-xs group-hover:text-primary">سبد خرید</span>
        </Link>
        <Link href="" className="group flex flex-col items-center gap-1">
          <CircleUserRound className="text-gray-700 size-5"  />
          <span className="text-xs group-hover:text-primary">
            ورود / ثبت نام
          </span>
        </Link>
       </div>
       
      </div>
    </div>
  );
};

export default MobileMenu;
