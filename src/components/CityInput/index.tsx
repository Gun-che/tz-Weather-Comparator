import React from 'react'

interface ICityInputProps {
  index: number;
  onChange(e: ChangeEvent<HTMLInputElement & { dataset: { key: number } }>): void;
  item: string;
}

export const CityInput: React.FC<ICityInputProps> = ({
  index, item, onChange
}) => {
  return (
    <div key={index}>

      <label htmlFor={'city' + (index + 1)}>{index + 1 + ' город'}</label>
      <input
        data-key={index}
        type="text"
        placeholder={index + 1 + ' город'}
        onChange={onChange}
        id={'city' + (index + 1)}
        name={'city' + (index + 1)}
        value={item}
      />
    </div>
  )
}
