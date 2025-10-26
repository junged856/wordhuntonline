import { type Dispatch, useState } from "react";
import "./index.css";
import { NUM_ROWS, NUM_COLS } from "./constants.ts";
import { type TileObject } from "./App.tsx";

interface Props {
	tilesPressed: TileObject[];
	setTilesPressed: Dispatch<React.SetStateAction<TileObject[]>>;
	letter: string;
	idx: number;
	x: number;
	y: number;
}

function Tile({ tilesPressed, setTilesPressed, letter, idx, x, y }: Props) {
	const pos = get_position(idx);

	function get_position(idx: number) {
		let row = Math.floor(idx / NUM_ROWS);
		let col = Math.floor(idx % NUM_ROWS);
		// error handling for negative indices
		if (idx < 0 || idx === undefined) {
			row = -1;
			col = -1;
		}
		return { row: row, col: col };
	}

	function is_adjacent_to_last_selection(tile: { row: number; col: number }) {
		const last_selected_pos = get_position(
			tilesPressed[tilesPressed.length - 1].idx
		);
		if (
			(last_selected_pos.row == -1 && last_selected_pos.col == -1) ||
			Math.max(
				Math.abs(last_selected_pos.row - tile.row),
				Math.abs(last_selected_pos.col - tile.col)
			) === 1
		) {
			return true;
		} else {
			return false;
		}
	}

	const handleHold = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.buttons === 1) {
			console.log(`User entered ${pos.row + "," + pos.col}, index: ${idx}`);
			if (
				!isPressed() &&
				(tilesPressed.length === 0 || is_adjacent_to_last_selection(pos))
			) {
				setTilesPressed([...tilesPressed, {letter: letter, idx: idx, x: x, y: y}]);
			}
			console.log(tilesPressed);
		}
	};

	const isPressed = () => {
		return tilesPressed.some(tile => tile.idx === idx);
	};

	return (
		<div
			className={isPressed() ? "tile_div_pressed" : "tile_div"}
			style={{ top: `${y}px`, left: `${x}px` }}
		>
			<h1
				onMouseEnter={handleHold}
				onMouseDown={handleHold}
				className="tile_letter"
			>
				{letter}
			</h1>
		</div>
	);
}

export default Tile;