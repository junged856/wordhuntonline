import type { TileObject } from "./App";

interface Props {
	tilesPressed: TileObject[];
}

const LinePath = ({ tilesPressed }: Props) => {
	// console.log({x1, x2, y1, y2});
	return (
		<svg
			width={`${800 + 3 * 20}px`}
			height={800 + 3 * 20}
			className="line_path"
			style={{ border: "10px solid black" }}
		>
			{tilesPressed.map((tile, index) => {
				if (index < tilesPressed.length - 1) {
					const nextTile = tilesPressed[index + 1];
					return (
						<line
							x1={tile.x}
							y1={tile.y}
							x2={nextTile.x}
							y2={nextTile.y}
							stroke="#ff0000ff"
							strokeWidth="15px"
							stroke-linecap="round"
							style={{ transform: "translateX(100px) translateY(100px)" }}
						/>
					);
				}
			})}
		</svg>
	);
};

export default LinePath;
