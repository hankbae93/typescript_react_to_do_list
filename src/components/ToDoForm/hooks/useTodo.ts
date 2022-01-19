import { FC, useState } from "react";

type useToDoArg = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
];

const useTodo = (defaultValue: string): useToDoArg => {
  const [value, setValue] = useState<string>(defaultValue ?? "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, onChange, setValue];
};

export default useTodo;
