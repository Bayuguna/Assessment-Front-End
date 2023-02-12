import { Color, Size } from '../../constants/Global';
import styles from './TextField.module.css';
import { ReactNode } from 'react';

export interface TextFieldInterface {
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


const TextField = (props : TextFieldInterface) => {
    
    
    const {
        type= 'text',
        size= Size.MEDIUM,
        placeholder= "Enter text",
        value,
        className="",
        children,
        color= Color.SECONDARY,
        onChange = (e: React.ChangeEvent<HTMLInputElement>) => {console.log("Text Input Changed")}
    } = props;

    const classProps = `${styles.input} ${styles[size]} ${className} ${styles[color]}`;
    
    return (
        <>
            <div className='flex item-center w-full'>
                <input type={type} placeholder={placeholder} defaultValue={value} className={classProps} onChange={onChange}/>
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default TextField;