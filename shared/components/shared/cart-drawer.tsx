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

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto flex-1 gap-2 flex flex-col">
          <CartDrawerItem
            details={getCartItemDetailsToText(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
            name="Чоризо фреш"
            price={100}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetailsToText(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
            name="Чоризо фреш"
            price={100}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetailsToText(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
            name="Чоризо фреш"
            price={100}
            quantity={1}
          />

          <CartDrawerItem
            details={getCartItemDetailsToText(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
            name="Чоризо фреш"
            price={100}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetailsToText(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
            name="Чоризо фреш"
            price={100}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetailsToText(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
            name="Чоризо фреш"
            price={100}
            quantity={1}
          />
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">500 ₽</span>
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
