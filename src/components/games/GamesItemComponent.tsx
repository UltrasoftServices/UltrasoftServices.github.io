import LinkExternalComponent from "components/core/LinkExternalComponent";
import gameModel, { gameType } from "models/gameModel"
import classes from "./css/GamesItemComponent.module.css"

const images = require.context('../../imgs/games', true);

function GamesItemComponent({ item }: props) {
    let containerClassName = classes["cs-container"]
    const containerMainClassName = `${classes["cs-container-main"]} col-12 col-sm-6 col-md-4 pb-5`
    const imgContainerClassName = classes["cs-container-img"]
    const src = images(`./${item.imgSrc}.jpg`)

    const href = item.hasLink === undefined || item.hasLink === true
        ? "https://platipusgaming.com/games_5/game.html?game=" + item.imgSrc
        : undefined

    if (href) {
        containerClassName += ` ${classes["cs-container-active"]}`
    }

    let itemContent = (
        <div className={containerClassName}>
            <div className={imgContainerClassName}>
                <img src={src.default} alt={item.imgSrc} />
            </div>
            <p>{item.name}</p>
            <p><i>{getTypeText(item.gameType)}</i></p>
        </div>
    )

    if (href) {
        itemContent = LinkExternalComponent({ href: href, element: itemContent })
    }

    return (
        <div className={containerMainClassName}>
            {itemContent}
        </div>
    )
}

type props = {
    item: gameModel
}

export default GamesItemComponent

function getTypeText(type: gameType) {
    switch (type) {
        case gameType.slot:
            return "Video slot"
        case gameType.table:
            return "Video table"
        default:
            return ""
    }
}