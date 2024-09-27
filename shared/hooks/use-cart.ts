import React from "react";
import { CartStateItem, useCartStore } from "../store";

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
};

export const useCart = (): ReturnProps => {
  const {
    totalAmount,
    items,
    loading,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
  } = useCartStore((state) => state);

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  return {
    totalAmount,
    items,
    loading,
    updateItemQuantity,
    removeCartItem,
  };
};
