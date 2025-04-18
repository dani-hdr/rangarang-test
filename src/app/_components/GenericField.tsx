"use client";

import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { OptionContext } from "./ProductForm";

const GenericField = ({ formField }: { formField: FormField }) => {
  const [dependentFields, setDependentFields] = useState<FormField[]>([]);
  const { selectedOptions, setSelectedOption } = useContext(OptionContext);

  const handleDependentFieldOptions = (value: string) => {
    if (formField.dependsOn == null) {
      const selected = formField.options?.find(
        (item) => item.value == Number(value)
      );
      if (selected && typeof setSelectedOption === "function") {
        if (value === "0") {
          setSelectedOption((prev) =>
            prev.filter(
              (item) =>
                !formField.options?.some((opt) => opt.value === item.value)
            )
          );
        } else {
          setSelectedOption((prev) => {
            const filteredPrev = prev.filter(
              (item) =>
                !formField.options?.some((opt) => opt.value === item.value)
            );
            return [...filteredPrev, selected];
          });
        }
      }
    }
  };

  switch (formField.inputType) {
    case "Text":
      return (
        <div className="flex items-center justify-between space-x-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Label
                className="text-gray-600 w-14 xl:w-28 leading-relaxed"
                htmlFor={formField.fieldId}
              >
                {formField.label}
              </Label>
            </TooltipTrigger>
            {formField.description && (
              <TooltipContent>
                <p>{formField.description}</p>
              </TooltipContent>
            )}
          </Tooltip>

          <Input
            defaultValue={formField.defaultValue}
            required={formField.required}
            id={formField.fieldId}
            className="w-full "
          />
        </div>
      );
    case "Number":
      return (
        <div className="flex items-center justify-between space-x-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Label
                className="text-gray-600 w-14 xl:w-28 leading-relaxed"
                htmlFor={formField.fieldId}
              >
                {formField.label}
              </Label>
            </TooltipTrigger>
            {formField.description && (
              <TooltipContent>
                <p>{formField.description}</p>
              </TooltipContent>
            )}
          </Tooltip>
          <Input
            defaultValue={formField.defaultValue}
            required={formField.required}
            id={formField.fieldId}
            className="w-full "
            type="number"
          />
        </div>
      );
    case "Dropdown":
      return (
        <>
          <div className="flex items-center justify-between space-x-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Label
                  className="text-gray-600 w-14 xl:w-28 leading-relaxed"
                  htmlFor={formField.fieldId}
                >
                  {formField.label}
                </Label>
              </TooltipTrigger>
              {formField.description && (
                <TooltipContent>
                  <p>{formField.description}</p>
                </TooltipContent>
              )}
            </Tooltip>
            <Select
              onValueChange={(value: string) => {
                setDependentFields(
                  formField.options?.find((item) => item.value == Number(value))
                    ?.dependentFields || []
                );
                handleDependentFieldOptions(value);
              }}
              required={formField.required}
            >
              <SelectTrigger className="w-full  ml-0">
                <SelectValue placeholder="انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {formField.options
                    ?.filter((item) => item.value !== 0)
                    .map((item) => (
                      <SelectItem
                        key={item.value}
                        value={item.value.toString()}
                      >
                        {item.display}
                      </SelectItem>
                    ))}
                </SelectGroup>

                {formField.dependsOn && (
                  <SelectGroup>
                    {selectedOptions.map(
                      (item) =>
                        item.dependentFieldOptions &&
                        item.dependentFieldOptions[
                          formField.fieldId
                        ].options?.map((opt) => (
                          <SelectItem
                            key={opt.value}
                            value={opt.value.toString()}
                          >
                            {opt.display}
                          </SelectItem>
                        ))
                    )}
                  </SelectGroup>
                )}
              </SelectContent>
            </Select>
          </div>
          {dependentFields
            .filter((item) => item.enabled)
            .map((item) => (
              <GenericField key={item.fieldId} formField={item} />
            ))}
        </>
      );
    case "MultiSelect":
      return (
        <>
          <div className="flex items-center justify-between space-x-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Label
                  className="text-gray-600 w-14 xl:w-28 leading-relaxed"
                  htmlFor={formField.fieldId}
                >
                  {formField.label}
                </Label>
              </TooltipTrigger>
              {formField.description && (
                <TooltipContent>
                  <p>{formField.description}</p>
                </TooltipContent>
              )}
            </Tooltip>
            <MultiSelect
              className="w-full "
              options={
                formField.options?.map((opt) => ({
                  label: opt.display,
                  value: opt.value.toString(),
                })) || []
              }
              onValueChange={(value) => {
                formField?.options?.map((item) => {
                  if (value.includes(item.value.toString())) {
                    setDependentFields(item?.dependentFields || []);
                  }
                });

                //handleDependentFieldOptions
              }}
              defaultValue={
                formField.defaultValue ? [formField.defaultValue] : []
              }
            />
          </div>
          {dependentFields
            .filter((item) => item.enabled)
            .map((item) => (
              <GenericField key={item.fieldId} formField={item} />
            ))}
        </>
      );
    case "Radio":
      return (
        <>
          <div className="flex items-center space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Label
                  className="text-gray-600 w-14 xl:w-28 leading-relaxed"
                  htmlFor={formField.fieldId}
                >
                  {formField.label}
                </Label>
              </TooltipTrigger>
              {formField.description && (
                <TooltipContent>
                  <p>{formField.description}</p>
                </TooltipContent>
              )}
            </Tooltip>
            <RadioGroup
              onValueChange={(value) =>
                setDependentFields(
                  formField.options?.find((item) => item.value == Number(value))
                    ?.dependentFields || []
                )
              }
              className="flex"
              defaultValue={formField.defaultValue}
              required={formField.required}
            >
              {formField.options?.map((item) => (
                <div key={item.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={item.value.toString()}
                    id="option-one"
                  />
                  <Label htmlFor="option-one">{item.display}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          {dependentFields
            .filter((item) => item.enabled)
            .map((item) => (
              <GenericField key={item.fieldId} formField={item} />
            ))}
        </>
      );
    case "Textarea":
      return (
        <div className="flex items-center justify-between space-x-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Label
                className="text-gray-600 w-14 xl:w-28 leading-relaxed"
                htmlFor={formField.fieldId}
              >
                {formField.label}
              </Label>
            </TooltipTrigger>
            {formField.description && (
              <TooltipContent>
                <p>{formField.description}</p>
              </TooltipContent>
            )}
          </Tooltip>
          <Textarea
            defaultValue={formField.defaultValue}
            required={formField.required}
            id={formField.fieldId}
            className="w-full"
          />
        </div>
      );
    case "File":
      return (
        <div className="flex items-center justify-between space-x-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Label
                className="text-gray-600 w-14 xl:w-28 leading-relaxed"
                htmlFor={formField.fieldId}
              >
                {formField.label}
              </Label>
            </TooltipTrigger>
            {formField.description && (
              <TooltipContent>
                <p>{formField.description}</p>
              </TooltipContent>
            )}
          </Tooltip>
          <Input
            defaultValue={formField.defaultValue}
            required={formField.required}
            id={formField.fieldId}
            className="w-full "
            type="file"
          />
        </div>
      );
    case "CheckBox":
      return (
        <>
          <div className="flex items-center  space-x-2">
            <Checkbox
              onCheckedChange={(value) =>
                value
                  ? setDependentFields(
                      formField.options?.[0]?.dependentFields || []
                    )
                  : setDependentFields([])
              }
              defaultChecked={Boolean(formField.defaultValue)}
              required={formField.required}
            />

            <Tooltip>
              <TooltipTrigger asChild>
                <Label className="text-gray-600 " htmlFor={formField.fieldId}>
                  {formField.label}
                </Label>
              </TooltipTrigger>
              {formField.description && (
                <TooltipContent>
                  <p>{formField.description}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </div>
          {dependentFields
            .filter((item) => item.enabled)
            .map((item) => (
              <GenericField key={item.fieldId} formField={item} />
            ))}
        </>
      );
  }
};

export default GenericField;
