

import {
  Tabs,

  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ProductTabs() {
  return (
    <Tabs defaultValue="account" className="w-full mt-5">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
        <TabsTrigger value="1">لیست نظرات</TabsTrigger>
        <TabsTrigger value="2">نکات</TabsTrigger>
        <TabsTrigger value="3">توضیحات محصول</TabsTrigger>
        <TabsTrigger value="4">ویدیوی آموزشی</TabsTrigger>
        <TabsTrigger value="5">قالب و راهنما</TabsTrigger>
        <TabsTrigger value="6">پرسش و پاسخ</TabsTrigger>
      </TabsList>
      
    </Tabs>
  )
}
