import { CartStateItem } from "../store/cart";
import { CartDto } from "../services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";
import { PizzaSize, PizzaType } from "../constants/pizza";

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDto): ReturnProps => {
  const items: CartStateItem[] = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    price: calcCartItemTotalPrice(item),
    pizzaSize: item.productItem.size as PizzaSize | null,
    pizzaType: item.productItem.pizzaType as PizzaType | null,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  }));

  return { totalAmount: data.totalAmount, items };
};
