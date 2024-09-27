import { cn } from "@/shared/lib";
import { Title } from "./title";

interface Props {
  className?: string;
  contentCLassName?: string;
  title?: string;
  endAdornment?: React.ReactNode;
}

export const WhiteBlock: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
  contentCLassName,
  endAdornment,
  title,
}) => {
  return (
    <div className={cn("bg-white rounded-3xl", className)}>
      {title && (
        <div className="flex items-center justify-between py-5 px-7 border-b border-gray-100">
          <Title text={title} size="sm" className="font-bold" />
          {endAdornment}
        </div>
      )}

      <div className={cn("px-5 py-4", contentCLassName)}>{children}</div>
    </div>
  );
};
