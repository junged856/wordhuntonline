import "./index.css";
import Tile from "./Tile";
import { type Dispatch } from "react";
import { type TileObject } from "./App";

interface Props {
	letters: string;
	tilesPressed: TileObject[];
	setTilesPressed: Dispatch<React.SetStateAction<TileObject[]>>;
}

function Board({ letters, tilesPressed, setTilesPressed }: Props) {
	const board_size = 800;
	const tile_size = 200;
	const tile_spacing = 20;
	const max_tiles_per_row = Math.floor(board_size / tile_size);

	const letters_uppercase = [...letters].map((char) => {
		return char.toUpperCase();
	});

	// array storing tile data
	const tiles = letters_uppercase.map((char, index) => {
		let col = Math.floor(index % max_tiles_per_row);
		let row = Math.floor(index / max_tiles_per_row);
		return {
			char: char,
			idx: index,
			x: tile_size * col + col * 20,
			y: tile_size * row + row * 20,
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
