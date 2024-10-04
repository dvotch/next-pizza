import { cn } from "@/shared/lib";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button, Skeleton } from "../ui";
import { WhiteBlock, CheckoutItemDetail } from "./index";

interface Props {
  className?: string;
  totalAmount: number;
  loading?: boolean;
}

const VAT = 15;
const DELIVERY_PRICE = 250;

export const CheckoutSidebar: React.FC<Props> = ({
  className,
  totalAmount,
  loading,
}) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итог</span>
        {loading ? (
          <Skeleton className="h-11 w-48" />
        ) : (
          <span className="text-[34px] font-extrabold h-11">
            {totalPrice} ₽
          </span>
        )}
      </div>

      <CheckoutItemDetail
        title={
          <div className="flex items-center">
            <Package className="mr-2 text-gray-300" size={18} />
            Стоимость корзины
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-14" /> : `${totalAmount} ₽`}
      />
      <CheckoutItemDetail
        title={
          <div className="flex items-center">
            <Percent className="mr-2 text-gray-300" size={18} />
            Налог
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-14" /> : `${vatPrice} ₽`}
      />
      <CheckoutItemDetail
        title={
          <div className="flex items-center">
            <Truck className="mr-2 text-gray-300" size={18} />
            Доставка
          </div>
        }
        value={
          loading ? <Skeleton className="h-6 w-14" /> : `${DELIVERY_PRICE} ₽`
        }
      />

      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
