import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { ChevronsLeft } from "lucide-react";

const CustomBreadcrumb = ({
  className,
  items,
}: {
  className?: string;
  items: { id: number; label: string; href: string }[];
}) => {
  return (
    <div className={cn("flex items-center justify-center gap-2 ", className)}>
     
      <Breadcrumb >
        <BreadcrumbList className="justify-center">
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <BreadcrumbItem className="text-xs tracking-tight">
                {index === items.length - 1 ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && (
                <ChevronsLeft  className="text-primary size-4" />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default CustomBreadcrumb;
