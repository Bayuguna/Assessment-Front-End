

import React, { ChangeEvent, ReactNode } from "react";
import styles from "./TextInput.module.css";
import TextField from "../../atoms/TextField";
import { Color, Size } from "../../constants/Global";

export interface TextInputVerticalInterface {
    type?: string;
    placeholder?: string;
    value?: string;
    className? : string;
    size?: Size;
    children?: ReactNode;
    text?: string;
    color?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const TextInput = (props: TextInputVerticalInterface) => {
    const {
        type,
        className,
        placeholder,
        value,
        size,
        text,
        color = Color.SECONDARY, 
        onChange = (e: ChangeEvent<HTMLInputElement>) => {console.log("Text Input Changed")}
    } = props;

    return (
        <div className={`${styles[color]}`}>
            <label className={`block ${styles[size!]} font-bold mb-2`}>
                {text}
            </label>
            <TextField
                type={type}
                className={`${className}`}
                size={size}
                placeholder={placeholder}
                color={color}
                value={value}
                onChange={onChange}
            ></TextField>
        </div>
    );
};

export default TextInput;
