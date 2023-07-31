
interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    name: string;
    iconName?: string;
    onClick: () => void;
    secondary?: boolean;
    buttonSize?: ButtonSize;
}

export enum ButtonSize {
    NORMAL = "text-lg",
    SMALL = "text-sm",
}

export const Button = ({name, iconName, className, onClick, secondary, buttonSize = ButtonSize.NORMAL}: IButtonProps) => {
    return <button className={`${secondary ? 'bg-btn-secondary' : 'bg-regular-purple'} ${secondary ? 'active:bg-btn-secondary-focus' : 'active:bg-darken-regular-purple'} hover:drop-shadow-md px-6 py-2 rounded-md ${buttonSize.valueOf()} text-primary ${className}`} onClick={onClick}>
    {
        iconName && <i className={`${iconName} mr-2`}></i>
    }
      {name}
    </button>
}