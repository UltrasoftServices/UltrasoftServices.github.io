import GamesItemComponent from "components/games/GamesItemComponent"
import MainContactInfoComponent from "components/main/MainContactInfoComponent";
import gameModel, { gameType } from "models/gameModel"
import { Fragment } from "react";

const games: gameModel[] = [
    { name: "Leprechaun's Coins", imgSrc: "leprechauns", gameType: gameType.slot, hasLink: false },
    { name: "Bamboo Grove", imgSrc: "bamboogrove", gameType: gameType.slot },
    { name: "Guises of Dracula", imgSrc: "guisesofdracula", gameType: gameType.slot },
    { name: "Might of Zeus", imgSrc: "mightofzeus", gameType: gameType.slot },
    { name: "1001 spins", imgSrc: "thousandonespins", gameType: gameType.slot },
    { name: "Lord of the Sun", imgSrc: "lordofthesun", gameType: gameType.slot },
    { name: "7 & Hot Fruits", imgSrc: "hotfruits", gameType: gameType.slot },
    { name: "Wealth of Wisdom", imgSrc: "wealthofwisdom", gameType: gameType.slot },
    { name: "Hawaiian Night", imgSrc: "hawaiiannight", gameType: gameType.slot },
    { name: "Santa's Bag", imgSrc: "santasbag", gameType: gameType.slot },
    { name: "Royal Lotus", imgSrc: "royallotus", gameType: gameType.slot },
    { name: "Chilli Fiesta", imgSrc: "chillifiesta", gameType: gameType.slot },
    { name: "Dynasty Warriors", imgSrc: "dynastywarriors", gameType: gameType.slot },
    { name: "Wild Spin", imgSrc: "wildspin", gameType: gameType.slot },
    { name: "Da Ji Da Li", imgSrc: "dajidali", gameType: gameType.slot },
    { name: "The Ancient Four", imgSrc: "theancientfour", gameType: gameType.slot },
    { name: "Dragon's Element", imgSrc: "dragonselement", gameType: gameType.slot },
    { name: "Pirate's Map", imgSrc: "piratesmap", gameType: gameType.slot },
    { name: "Jackpot Lab", imgSrc: "jackpotlab", gameType: gameType.slot },
    { name: "Aztec Coins", imgSrc: "azteccoins", gameType: gameType.slot },
    { name: "Chinese Tigers", imgSrc: "chinesetigers", gameType: gameType.slot },
    { name: "Rhino Mania", imgSrc: "rhinomania", gameType: gameType.slot },
    { name: "Pharaoh's Empire", imgSrc: "pharaohsempire", gameType: gameType.slot },
    { name: "Bison Trail", imgSrc: "bisontrail", gameType: gameType.slot },
    { name: "Jade Valley", imgSrc: "jadevalley", gameType: gameType.slot },
    { name: "Neon Classic", imgSrc: "neonclassic", gameType: gameType.slot },
    { name: "Power of Poseidon", imgSrc: "powerofposeidon", gameType: gameType.slot },
    { name: "Great Ocean", imgSrc: "greatocean", gameType: gameType.slot },
    { name: "Mega Drago", imgSrc: "megadrago", gameType: gameType.slot },
    { name: "Legend of Atlantis", imgSrc: "legendofatlantis", gameType: gameType.slot },
    { name: "Aztec Temple", imgSrc: "aztectemple", gameType: gameType.slot },
    { name: "Book of Egypt", imgSrc: "bookofegypt", gameType: gameType.slot },
    { name: "Triple Dragon", imgSrc: "tripledragon", gameType: gameType.slot },
    { name: "Cinderella", imgSrc: "cinderella", gameType: gameType.slot },
    { name: "Crystal Sevens", imgSrc: "crystalsevens", gameType: gameType.slot },
    { name: "Love is", imgSrc: "loveis", gameType: gameType.slot },
    { name: "Lucky Money", imgSrc: "luckymoney", gameType: gameType.slot },
    { name: "Monkey's Journey", imgSrc: "monkeysjourney", gameType: gameType.slot },
    { name: "Sakura Wind", imgSrc: "sakurawind", gameType: gameType.slot },
    { name: "Magical Mirror", imgSrc: "magicalmirror", gameType: gameType.slot },
    { name: "Power of Gods", imgSrc: "powerofgods", gameType: gameType.slot },
    { name: "Cleo's Gold", imgSrc: "cleosgold", gameType: gameType.slot },
    { name: "Fiery Planet", imgSrc: "fieryplanet", gameType: gameType.slot },
    { name: "Jewel Bang", imgSrc: "jewelbang", gameType: gameType.slot },
    { name: "Princess of Birds", imgSrc: "princessofbirds", gameType: gameType.slot },
    { name: "Fairy Forest", imgSrc: "fairyforest", gameType: gameType.slot },
    { name: "Safari Adventures", imgSrc: "safariadventures", gameType: gameType.slot },
    { name: "Crocoman", imgSrc: "crocoman", gameType: gameType.slot },
    { name: "Juicy Spins", imgSrc: "juicyspins", gameType: gameType.slot },
    { name: "Fruity Sevens", imgSrc: "fruitysevens", gameType: gameType.slot },
    { name: "Jungle Spin", imgSrc: "junglespin", gameType: gameType.slot },
    { name: "Arabian Tales", imgSrc: "arabiantales", gameType: gameType.slot },
    { name: "Mistress of Amazon", imgSrc: "mistressofamazon", gameType: gameType.slot },
    { name: "Magical Wolf", imgSrc: "magicalwolf", gameType: gameType.slot },
    { name: "Richy Witchy", imgSrc: "richywitchy", gameType: gameType.slot },
    { name: "Lucky Dolphin", imgSrc: "luckydolphin", gameType: gameType.slot },
    { name: "Crazy Jelly", imgSrc: "crazyjelly", gameType: gameType.slot }
]

function GamesPage() {
    return (
		<Fragment>
			<div className="container">
				<h3>Slot Games</h3>
				<hr />
				<div className="row">
					{
						games.map((x, i) => <GamesItemComponent key={i} item={x}></GamesItemComponent>)
					}
				</div>
			</div>
			<MainContactInfoComponent />
		</Fragment>
    )
}

export default GamesPage