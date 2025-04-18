"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useState } from "react";
import {
  Tooltip,
  TooltipContent,
 
  TooltipTrigger,
} from "@/components/ui/tooltip";
import GenericField from "./GenericField";

// Update the context type definition
export const OptionContext = createContext<{
  selectedOptions: FormFieldOption[];
  setSelectedOption: React.Dispatch<React.SetStateAction<FormFieldOption[]>>;
}>({
  selectedOptions: [],
  setSelectedOption: () => {},
});

const Form = ({ sections }: { sections: FormSection[] }) => {
  const [selectedOptions, setSelectedOption] = useState<FormFieldOption[]>([]);

  return (
    <form className="flex flex-col gap-2 mt-5">
      {sections.length > 0 &&
        sections.map((section, index) => (
          <div
            className={cn("p-3 rounded-md", {
              border: section.collapsible,
              hidden: section.fields.length < 1,
            })}
            key={index}
          >
            {section.collapsible &&  (
              <Tooltip>
                <TooltipTrigger
                  className="border-r-2 border-primary pr-2 text-sm font-medium"
                  asChild
                >
                  <span>{section.title}</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{section.description}</p>
                </TooltipContent>
              </Tooltip>
            )}

            <div className="flex flex-col gap-2 mt-3">
              <OptionContext.Provider
                value={{ selectedOptions, setSelectedOption }}
              >
                {section.fields
                  .filter((item) => item.enabled)
                  .map((item) => (
                    <GenericField key={item.fieldId} formField={item} />
                  ))}
              </OptionContext.Provider>
            </div>
          </div>
        ))}
    </form>
  );
};

export default Form;
