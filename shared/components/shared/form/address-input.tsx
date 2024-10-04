"use client";

import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="be0cb35ae0f47df508ed1d5b5e24068ccb4189f1"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
