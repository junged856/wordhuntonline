import { useState } from "react";
import "./App.css";
import Board from "./Board";
import LinePath from "./LinePath";

export interface TileObject {
	letter: string;
	idx: number;
	x: number;
	y: number;
}

function App() {
	const [tilesPressed, setTilesPressed] = useState<TileObject[]>([]);

	// whenever mouse is released anywhere in the app, the tiles reset
	const resetTiles = () => {
		console.clear();
		setTilesPressed([]);
	};

	const getWordSelected = () => {
		let selectedWord = "";
		tilesPressed.map((tile) => {
			selectedWord += tile.letter;
		})
		return selectedWord;
	}

	return (
		<div onMouseUp={resetTiles} className="window">
			<h1 className="game_title">WORD HUNT</h1>
			<Board
				letters="abcdefghijklmnop"
				tilesPressed={tilesPressed}
				setTilesPressed={setTilesPressed}
			/>
			<LinePath tilesPressed={tilesPressed}></LinePath>
			<h1 className="selected_letters">{getWordSelected()}</h1>
		</div>
	);
}

export default App;
