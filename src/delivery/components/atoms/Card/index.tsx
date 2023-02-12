import { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
    className? : string;
    theme?: string;
    children?: ReactNode;
}

const Card = (props : CardProps) => {
    const {
        className="",
        children,
        theme="default",
    } = props;

    const classProps = `${styles.card} ${className} ${styles[theme]}`;
    
    return (
        <>
            <div className={classProps}>
                {children}
            </div>
        </>
    );
}

export default Card;