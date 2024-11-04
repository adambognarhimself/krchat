import { IconButton } from "./IconButton";
import { TextInput, TextInputProps } from "./TextInput";
import './TextInputAndButton.less'


export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    onClick?: () => void;
    iconName: string;
}
export function TextInputAndButton({ buttonContent, onClick,iconName , ...textInputProps }:
    TextInputAndButtonProps) {
    return <div class="TextInputAndButton">
        <TextInput {...textInputProps} onEnter={onClick}/>
        <IconButton iconName={iconName} text={buttonContent} onClick={onClick}/>

    </div>
}