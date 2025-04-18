import React from "react";
import { Input } from "./ui/input";
import {
  Search,
  ShoppingBasket,
  CircleUserRound,
  BookUser,
  Phone,
  AlignJustify,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { NavItems } from "@/constant";

const SearchInput = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative ", className)}>
      <Search
        className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground"
        size={20}
      />
      <Input className="bg-gray-100 h-12 pl-10" />
    </div>
  );
};
const Navbar = () => {
  return (
    <nav className="border-y hidden xl:block">
      <div className="container mx-auto py-2 px-2">
        <div className="flex justify-between">
          <ul className="flex items-center  gap-7  font-semibold ">
            {NavItems.map((item) => (
              <li key={item.id}>
                <Link
                  className="group flex items-center gap-1 whitespace-nowrap  text-gray-400 text-sm hover:text-gray-600 transition-all"
                  href="/"
                >
                  {React.createElement(item.icon, {
                    className: "group-hover:text-primary transition-all ",
                  })}
                  <span> {item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 ">
            <Button className="h-fit text-xs">
              نوبت دهی سفارش <br />
              حضوری دیجیتال <BookUser className="size-8" />{" "}
            </Button>
            <Link
              href="tel:021-54889000"
              className="flex items-center gap-2 text-gray-500 font-semibold "
            >
              021-54889000
              <div className="bg-primary rounded-full p-3">
                <Phone className="size-5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
const Header = () => {
  return (
    <header className="border-b xl:border-none w-full ">
      <div className="flex items-center justify-between gap-5 container mx-auto py-10 px-2 ">
        <Link href="/" className="text-primary font-black text-2xl">
          Rangarang Logo
        </Link>

        <SearchInput className="w-full max-w-xl hidden xl:block" />
        <div className="flex items-center gap-1 xl:gap-5">
          <Button className="h-fit text-xs xl:hidden">
          <BookUser className="size-8" />{" "}
           <span> نوبت دهی سفارش <br/>حضوری دیجیتال</span>
          </Button>
          <Link
            href="/sign-in"
            className=" items-center gap-2 group text-gray-500 hidden sm:flex"
          >
            <CircleUserRound className="text-primary group-hover:text-primary  size-8" />
            <span className="group-hover:text-primary hidden xl:block">
              ورود | ثبت نام
            </span>
          </Link>
          <Button className="hidden sm:block xl:hidden !p-0" variant="ghost">
            <Search className="size-8 text-primary" />
          </Button>
          <Button className="hidden sm:block xl:hidden !p-0" variant="ghost">
            <AlignJustify className="size-8 text-primary" />
          </Button>
          <Link
            href="tel:021-54889000"
            className="flex items-center gap-2 text-gray-500 font-semibold xl:hidden"
          >
            <div className="bg-primary rounded-full p-1.5">
              <Phone className="size-5 text-white" />
            </div>
          </Link>
          <Link
            href="/cart"
            className="relative hidden sm:block  xl:border-3 border-primary  rounded-full xl:p-1"
          >
            <ShoppingBasket className=" text-primary size-8 xl:size-5" />
            <span className="absolute top-0.5 xl:top-1/2 -translate-y-1/2 right-6 xl:-right-3 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              1
            </span>
          </Link>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
