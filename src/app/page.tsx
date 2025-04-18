import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Gallery from "./_components/Gallery";
import Info from "./_components/Info";
import Tags from "./_components/Tags";
import Price from "./_components/Price";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brush, Linkedin, Twitter, Instagram } from "lucide-react";
import Form from "./_components/ProductForm";
import { ProductTabs } from "./_components/ProductTabs";

const breadCrumbItems = [
  { id: 0, label: "شما اینجا هستید :", href: "/" },
  { id: 1, label: "چاپ ایران کهن", href: "/" },
  { id: 2, label: "چاپ دیجیتال اختصاصی", href: "/components" },
  {
    id: 3,
    label: "چاپ دیجیتال اختصاصی بدون صحافی",
    href: "/components",
  },
];

const getFromApi = async (
  productGroupId: string,
  workTypeId: string
): Promise<Form> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/Order/GetForm?productGroupId=${productGroupId}&workTypeId=${workTypeId}&OrderId=0`
  );
  const data = await res.json();
  return data;
};
type SearchParams = Promise<{ [key: string]: string  }>

export default async function Home(props: {
  
  searchParams: SearchParams
}) {

  const searchParams = await props.searchParams
  const productGroupId =  searchParams.productGroupId  ;
  const workTypeId =  searchParams.workTypeId  ;
 console.log(productGroupId)

  
  const data = await getFromApi(productGroupId, workTypeId);
  if (data) {
    return (
      <div>
        <CustomBreadcrumb className="mt-8" items={breadCrumbItems} />
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 mt-14">
          {/* Right */}
          <div className="flex flex-col gap-5 w-full lg:w-1/4">
            <Gallery />
            <Info />
            <Tags />
          </div>

          {/* Center */}
          <div className="w-full overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-500">
              {data.title}
            </h1>
            <Form sections={data.sections} />
          </div>

          {/* Left */}
          <div className=" lg:sticky lg:top-5 w-full lg:w-1/3">
            <div className=" flex flex-col gap-5">
              <Price basePrice={data.basePrice} currency={data.currency} />
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full font-medium"
                >
                  <Brush />
                  سفارش طراحی آنلاین
                </Button>
              </Link>
              <div className="bg-gray-100 text-xs p-2 rounded-md text-yellow-500 text-center ">
                <b>توجه:</b> باتوجه به زمانبر بودن سفارشات تیراژ بالا، زمان
                تحویل برای این سفارشات حدودی است.
                <br />
                تخفیف برای تیراژ های بالا به صورت خودکار اعمال می شود.
              </div>
              <div className="bg-gray-100  p-2 rounded-md  flex items-center justify-between text-xs">
                <span className="text-gray-500">
                  ما را در شبکه های اجتماعی دنبال کنید
                </span>
                <div className="flex items-center gap-2 ">
                  <Link href="">
                    <Instagram className="text-gray-600 hover:text-primary size-4" />
                  </Link>
                  <Link href="">
                    <Twitter className="text-gray-600 hover:text-primary size-4" />
                  </Link>
                  <Link href="">
                    <Linkedin className="text-gray-600 hover:text-primary size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductTabs />
      </div>
    );
  }
}
