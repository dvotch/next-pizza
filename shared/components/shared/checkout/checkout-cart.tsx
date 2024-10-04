import { PizzaType, PizzaSize } from "@/shared/constants/pizza";
import { getCartItemDetailsToText } from "@/shared/lib";
import { removeCartItem } from "@/shared/services/cart";
import { CheckouttItem, WhiteBlock } from "../index";
import { CartStateItem } from "@/shared/store";
import { Skeleton } from "../../ui";

interface Props {
  className?: string;
  items: CartStateItem[];
  loading?: boolean;
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  removeCartItem: (id: number) => void;
}

export const CheckoutCart: React.FC<Props> = ({
  className,
  items,
  loading,
  onClickCountButton,
  removeCartItem,
}) => {
  return (
    <WhiteBlock title="1. Корзина" className={className}>
      <div className="flex flex-col gap-5">
        {loading
          ? [...Array(4)].map((_, index) => (
              <Skeleton key={index} className="h-15 w-full" />
            ))
          : items.map((item) => (
              <CheckouttItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                details={getCartItemDetailsToText(
                  item.ingredients,
                  item.pizzaType as PizzaType,
                  item.pizzaSize as PizzaSize
                )}
                onClickCountButton={(type) =>
                  onClickCountButton(item.id, item.quantity, type)
                }
                onClickRemove={() => removeCartItem(item.id)}
                disabled={item.disabled}
              />
            ))}
      </div>
    </WhiteBlock>
  );
};
