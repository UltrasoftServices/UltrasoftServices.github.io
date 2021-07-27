interface gameModel {
    name: string,
    imgSrc: string,
    gameType: gameType,
    hasLink?: boolean
}

export enum gameType {
    slot,
    table
}

export default gameModel