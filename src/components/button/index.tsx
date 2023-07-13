import {
    ButtonHTMLAttributes,
    ReactElement,
    ReactNode,
    cloneElement
} from "react"
import classNames from "classnames"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | string
    iconleft?: ReactElement
    iconright?: ReactElement
    variant?: "primary" | "secondary"
}

const Button = ({
    children,
    iconleft,
    iconright,
    variant = "primary",
    ...props
}: ButtonProps) => {
    return (
        <button
            className={classNames({
                [`
                inline-flex 
                py-2 
                px-4 
                items-center 
                gap-[10px] 
                text-sm 
                not-italic 
                font-medium 
                rounded-[0.25rem]
                text-white
                `]: true,
                [`
                bg-bt-primary-red
                hover:bg-bt-hover-red

                `]: variant === "primary",
                [` 
                border 
                border-solid 
                border-gray/200 
                bg-white 
                hover:border-gray/300 
                focus:border-gray/800 
                
                disabled:bg-gray/200 
                disabled:text-gray/500
                `]: variant === "secondary"
            })}
            {...props}
        >
            {iconleft &&
                cloneElement(iconleft, {
                    className: "w-[16px] h-[16px] shrink-0"
                })}
            <span>{children}</span>
            {iconright &&
                cloneElement(iconright, {
                    className: "w-[16px] h-[16px] shrink-0"
                })}
        </button>
    )
}

export default Button