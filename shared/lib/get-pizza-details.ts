import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

/**
 * Функция для подсчета общей стоимости пиццы
 *
 * @param type - тип теста выбранной пиццы
 * @param size - размер выбранной пиццы
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 * @returns number общую стоимость
 */
export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number> = new Set<number>()
) => {
  const textDetaills = `${size} см, ${mapPizzaType[type]} тесто`;
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  return { totalPrice, textDetaills };
};
