"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetailsToText } from "@/shared/lib";
import { useCartStore } from "@/shared/store";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const {
    totalAmount,
    items,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
  } = useCartStore((state) => state);

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length}</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto flex-1 gap-2 flex flex-col">
          {items.map((item) => (
            <CartDrawerItem
              key={item.id}
              details={
                item.pizzaSize && item.pizzaType
                  ? getCartItemDetailsToText(
                      item.ingredients,
                      item.pizzaType,
                      item.pizzaSize
                    )
                  : ""
              }
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onClickCountButton={(type) =>
                onClickCountButton(item.id, item.quantity, type)
              }
              onClickRemove={() => removeCartItem(item.id)}
            />
          ))}
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
