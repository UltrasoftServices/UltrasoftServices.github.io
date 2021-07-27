import { Link } from "react-router-dom"

function LinkButtonComponent({ href, text, className, btnClassName }: params) {
    let btnClass = "btn btn-primary col-12 px-5"
    if (className) {
        btnClass += ` ${btnClassName}`
    }

    return (
        <Link to={href} className={className}>
            <button className={btnClass}>{text}</button>
        </Link>
    )
}

export default LinkButtonComponent

type params = {
    href: string,
    text: string,
    className?: string,
    btnClassName?: string
}