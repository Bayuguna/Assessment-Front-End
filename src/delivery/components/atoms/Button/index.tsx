import { ReactNode } from 'react';
import styles from './Button.module.css';
import { Color, Size, Theme } from '../../constants/Global';

interface ButtonProps {
  children: ReactNode;
  onClick?: any;
  className ?: string;
  disabled?: boolean;
  size?: Size;
  style?: string;
  id?: string,
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = (props: ButtonProps) => {
  const {
    id,
    size= Size.MEDIUM,
    className= "",
    disabled= false,
    children,
    style= "reguler",
    type= "button",
    onClick = () => {console.log("Button Clicked")},
    ...buttonProps
  } = props;

  const classProps = `${styles[size]} ${styles[style!]} ${className}`;
  return (
    <button
      onClick={onClick}
      id={id}
      disabled={disabled}
      className={classProps}
      // type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
