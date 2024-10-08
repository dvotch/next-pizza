import { axiosInstance } from "./instance";
import { CartDto, CreateCartItemValues } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDto> => {
  return (await axiosInstance.get<CartDto>("/cart")).data;
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<CartDto> => {
  return (
    await axiosInstance.patch<CartDto>("/cart/" + itemId, {
      quantity,
    })
  ).data;
};

export const removeCartItem = async (id: number): Promise<CartDto> => {
  return (await axiosInstance.delete("/cart/" + id)).data;
};

export const addCartItem = async (
  values: CreateCartItemValues
): Promise<CartDto> => {
  return (await axiosInstance.post("/cart", values)).data;
};
