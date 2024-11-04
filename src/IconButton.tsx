import './IconButton.less'

export type IconButtonProps = {
    iconName: string;
    text: string;
    onClick: () => void;
}

export function IconButton({ iconName, text, onClick }: IconButtonProps) {
    return <button class="IconButton" onClick={onClick}>
        <span class="material-symbols-outlined">
            {iconName}
        </span>
        {text}
    </button>
}