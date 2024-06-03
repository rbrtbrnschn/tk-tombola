import { InputHTMLAttributes } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  number: number | string;
  onChange: (name: string) => void;
  onDelete: () => void;
}
