import { FC, ChangeEvent } from "react";
import { Input, Slider } from "antd";

interface NameFilterProps {
    value: string;
    onChange: (value: string) => void;
}

interface AddressFilterProps {
    value: string | number;
    onChange: (value: string | number) => void;
}

interface BrandFilterProps {
    value: string;
    onChange: (value: string) => void;
}

interface CountryFilterProps {
    value: string;
    onChange: (value: string) => void;
}

interface PriceRangeProps {
    value: [number, number];
    onChange: (value: [number, number]) => void;
}

export const NameFilterAtom: FC<NameFilterProps> = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Введите название товара"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};

export const AddressFilterAtom: FC<AddressFilterProps> = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Введите адрес"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};

export const BrandFilterAtom: FC<BrandFilterProps> = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Введите brand"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};

export const CountryFilterAtom: FC<CountryFilterProps> = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Введите Страну производства"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};

export const PriceRangeAtom: FC<PriceRangeProps> = ({ value, onChange }) => {
  return (
    <Slider
      range
      min={0}
      max={100}
      value={value}
      onChange={(value: [number, number]) => onChange(value)}
    />
  );
};
