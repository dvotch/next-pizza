"use client";

import React, { ChangeEvent, FC, useState } from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";

type Item = FilterCheckboxProps;

interface IProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  loading?: boolean;
  selected?: Set<string>;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  name: string;
}

export const CheckboxFiltersGroup: FC<IProps> = ({
  items,
  title,
  className,
  defaultItems,
  defaultValue,
  limit = 5,
  onClickCheckbox,
  loading,
  selected,
  searchInputPlaceholder = "Поиск...",
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton className="h-6 mb-4 rounded-[8px]" key={index} />
          ))}
        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать всё"}
          </button>
        </div>
      )}
    </div>
  );
};
