import React from "react";
import { CountButtonProps } from "./count-button";
import { Button } from "../ui";
import { cn } from "@/shared/lib";
import { Minus, Plus } from "lucide-react";

interface Props {
  size?: CountButtonProps["size"];
  disabled?: boolean;
  type?: "plus" | "minus";
  onClick?: VoidFunction;
}

export const CountIconButton: React.FC<Props> = ({
  size = "sm",
  disabled,
  onClick,
  type,
}) => {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={cn(
        "p-0 hover:bg-primary hover:text-white disabled:border-gray-400 disabled:text-gray-400",
        size === "sm"
          ? "w-[30px] h-[30px] rounded-[10px]"
          : "w-[38px] h-[38px] rounded-md"
      )}
    >
      {type === "plus" ? (
        <Plus className={size === "sm" ? "h-4" : "h-5"} />
      ) : (
        <Minus className={size === "sm" ? "h-4" : "h-5"} />
      )}
    </Button>
  );
};
