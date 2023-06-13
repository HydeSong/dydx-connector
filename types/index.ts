import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string
    containerStyle?: string
    textStyle?: string
    rightIcon?: string
    btnType?: "button" | "submit"
    isDisabled?: boolean
    handleClick?: MouseEventHandler<HTMLButtonElement>
}