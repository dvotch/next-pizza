"use client";

import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CountButton, CountButtonProps } from "./count-button";
import * as CartItemDetails from "./cart-item-details";
import { cn } from "@/shared/lib";
import { X } from "lucide-react";

interface Props extends CartItemProps {
  onClickRemove?: VoidFunction;
  onClickCountButton?: CountButtonProps["onClick"];
  className?: string;
}

export const CheckouttItem: React.FC<Props> = ({
  name,
  price,
  details,
  imageUrl,
  className,
  quantity,
  disabled,
  onClickRemove,
  onClickCountButton,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        { "opacity-50 pointer-events-none": disabled },
        className
      )}
    >
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetails.Image src={imageUrl} />
        <CartItemDetails.Info
          name={name}
          details={details}
          className="w-[90%]"
        />
      </div>

      <CartItemDetails.Price value={price} />

      <div className="flex items-center gap-5 ml-20">
        <CountButton onClick={onClickCountButton} value={quantity} />
        <button type="button" onClick={onClickRemove}>
          <X
            className="text-gray-400 cursor-pointer hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};
