import React, { SyntheticEvent } from 'react'
import s from './index.module.scss'

interface ICityInputProps {
  index: number;
  onChange(e: React.ChangeEvent<HTMLInputElement & { dataset: { index: number } }>): void;
  item: [string, number];
  onClose(index: number): (e: SyntheticEvent) => void;
}

export const CityInput: React.FC<ICityInputProps> = ({
  index,
  item,
  onChange,
  onClose
}) => {

  return (
    <div className={"input-field " + s.wrap}>
      <button
        className="btn-floating btn-small waves-effect waves-light blue lighten-3"
        onClick={onClose(index)}>
        <i role="button" className="material-icons">close</i>
      </button>
      <i className="material-icons prefix">location_on</i>
      <input
        className="validate"
        data-index={index}
        type="text"
        onChange={onChange}
        id={'city' + (index + 1)}
        name={'city' + (index + 1)}
        value={item[0]}
      />
      <label htmlFor={'city' + (index + 1)}>{index + 1 + ' город'}</label>
    </div>
  )
}
