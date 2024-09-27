"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store";
import toast from "react-hot-toast";
import { ChoosePizzaForm } from "./choose-pizza-form";
import { ChooseProductForm } from "./choose-product-form";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit }) => {
  const { addCartItem, loading } = useCartStore();

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(product.items[0].pizzaType);

  const onClickAddItem = async (
    productItemId?: number,
    ingredients?: number[]
  ) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({ productItemId: itemId, ingredients });

      toast.success(product.name + " добавлен в корзину");
      onSubmit?.();
    } catch (error) {
      toast.error(`Не удалось добавить в козину`);
      console.error(error);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        ingredients={product.ingredients}
        name={product.name}
        items={product.items}
        onClickAddCart={onClickAddItem}
        loading={loading}
      />
    );
  }
  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onClickAddCart={onClickAddItem}
      price={firstItem.price}
      loading={loading}
    />
  );
};
