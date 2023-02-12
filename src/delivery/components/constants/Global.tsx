export type Theme = "default" | "rounded" | "none" | undefined ;
export const Theme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
}

export type Size = "small" | "medium" | "large" | "none" | undefined;
export const Size = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    NONE: 'none',
}

export type Orientation = "vertical" | "horizontal" | undefined;
export const Orientation = {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal',
}

export type Color = "primary" | "secondary" | "success" | "info" | "warning" |"danger" | "white" | undefined;
export const Color = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    DANGER: 'danger',
    WHITE: 'white'
}