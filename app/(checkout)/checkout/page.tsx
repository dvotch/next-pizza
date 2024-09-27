"use client";

import {
  CheckoutItemDetail,
  CheckouttItem,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input } from "@/shared/components/ui";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCart } from "@/shared/hooks/use-cart";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  return (
    <Container className="mt-8">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex gap-40">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              <CheckouttItem
                id={0}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                name="Чоризо фреш"
                price={300}
                quantity={1}
                details="Свежие томаты, Красный лук, Сочные ананасы, Итальянские травы, Сладкий перец, Кубики брынзы, Митболы"
              />
              <CheckouttItem
                id={0}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                name="Чоризо фреш"
                price={300}
                quantity={3}
                details="Свежие томаты, Красный лук, Сочные ананасы, Итальянские травы, Сладкий перец, Кубики брынзы, Митболы"
              />
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Textarea
                className="text-base"
                rows={5}
                placeholder="Комментарий к заказу"
              />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итог</span>
              <span className="text-[34px] font-extrabold">
                {totalAmount} ₽
              </span>
            </div>

            <CheckoutItemDetail
              title={
                <div className="flex items-center">
                  <Package className="mr-2 text-gray-300" size={18} />
                  Стоимость товаров
                </div>
              }
              value="3000"
            />
            <CheckoutItemDetail
              title={
                <div className="flex items-center">
                  <Percent className="mr-2 text-gray-300" size={18} />
                  Налог
                </div>
              }
              value="200"
            />
            <CheckoutItemDetail
              title={
                <div className="flex items-center">
                  <Truck className="mr-2 text-gray-300" size={18} />
                  Доставка
                </div>
              }
              value="120"
            />

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Перейти к оплате
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
