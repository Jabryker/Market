import { Input, Slider } from "antd";
import { ChangeEvent, FC } from "react";

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
    <div>
      <div className="flex justify-between">
        <Input
          type="number"
          placeholder="From"
          value={value[0]}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange([Number(e.target.value), value[1]])
          }
          className="w-3/12 xl:w-1/5 2xl:w-1/6 px-0 lg:px-1 2xl:px-2" 
        />
        <Input
          type="number"
          placeholder="To"
          value={value[1]}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange([value[0], Number(e.target.value)])
          }
          className="w-3/12 xl:w-1/5 2xl:w-1/6 px-0 lg:px-1 2xl:px-2"
        />
      </div>
      <Slider
        range
        min={0}
        max={200}
        value={value}
        onChange={(value: [number, number]) => onChange(value)}
      />
    </div>
  );
};
