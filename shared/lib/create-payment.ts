import { PaymentData } from "@/@types/yookassa";
import axios from "axios";

interface Props {
  description: string;
  orderId: string;
  amount: string;
}

export const createPayment = async (details: Props) => {
  const { data } = await axios.post<PaymentData>(
    "https://api.yookassa.ru/v3/payments",
    {
      amount: {
        value: details.amount,
        currency: "RUB",
      },
      capture: true,
      description: details.description,
      metadata: {
        order_id: details.orderId,
      },
      confirmation: {
        type: "redirect",
        return_url: process.env.YOO_CALLBACK_URL,
      },
    },
    {
      auth: {
        username: "469097",
        password: process.env.YOO_MONEY_API_KEY as string,
      },
      headers: {
        "Idempotence-Key": Math.random().toString(36).substring(7),
        "Content-Type": "application/json",
      },
    }
  );

  return data;
};
