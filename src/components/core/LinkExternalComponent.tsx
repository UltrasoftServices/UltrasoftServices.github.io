function LinkExternalComponent({href, element}: props) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {element}
        </a>
    )
}

export default LinkExternalComponent

type props = {
    href: string,
    element: JSX.Element
}