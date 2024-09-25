"use client";

import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";
import { Category } from "@prisma/client";
import React from "react";

interface Props {
  className?: string;
  items: Category[];
}

export const Categories: React.FC<Props> = ({ className, items }) => {
  const CategoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-2",
            CategoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={id}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
