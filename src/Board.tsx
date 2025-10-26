import "./index.css";
import Tile from "./Tile";
import { use, useState, type Dispatch, type SetStateAction } from "react";

interface Props {
	letters: string;
	tilesPressed: number[];
    setTilesPressed: Dispatch<React.SetStateAction<number[]>>;
}

function Board({letters, tilesPressed, setTilesPressed}: Props) {
	const boardSize = 800;
	const tileSize = 200;
    const tile_gap_size = 20;
	const rowCapacity = Math.floor(boardSize / tileSize);

	const uppercase = [...letters].map((char) => {
		return char.toUpperCase();
	});

	// array storing tile data
	const tiles = uppercase.map((char, index) => {
		let col = Math.floor(index % rowCapacity);
		let row = Math.floor(index / rowCapacity);
		return {
			char: char,
			idx: index,
			x: tileSize * col + col*20,
			y: tileSize * row + row*20,
		};
	});

	return (
		<div className="board_div">
			{tiles.map((tile) => (
				<Tile
					tilesPressed={tilesPressed}
					setTilesPressed={setTilesPressed}
					letter={tile.char}
					idx={tile.idx}
					x={tile.x}
					y={tile.y}
				/>
			))}
		</div>
	);
}

export default Board;
