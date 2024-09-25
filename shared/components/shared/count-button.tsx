import { cn } from "@/shared/lib";
import { CountIconButton } from "./count-icon-button";

export interface CountButtonProps {
  className?: string;
  value?: number;
  size?: "sm" | "lg";
  onClick?: (type: "plus" | "minus") => void;
}

export const CountButton: React.FC<CountButtonProps> = ({
  className,
  onClick,
  size = "sm",
  value = 1,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick?.("minus")}
        disabled={value === 1}
        size={size}
        type="minus"
      />

      <b className={size === "sm" ? "text-sm" : "text-md"}>{value}</b>

      <CountIconButton
        onClick={() => onClick?.("plus")}
        size={size}
        type="plus"
      />
    </div>
  );
};
