import { useState } from "react";
import "./App.css";
import Board from "./Board";

function App() {
	const [tilesPressed, setTilesPressed] = useState<number[]>([]);

  // whenever mouse is released anywhere in the app, the tiles reset
	const resetTiles = () => {
		console.clear();
		setTilesPressed([]);
	};

	return (
		<div onMouseUp={resetTiles} className='window'>
      <h1 className="game_title">WORD HUNT</h1>
			<Board
				letters="abcdefghijklmnop"
				tilesPressed={tilesPressed}
				setTilesPressed={setTilesPressed}
			/>
		</div>
	);

	// return (
	//   <>
	//     <div>
	//       <a href="https://vite.dev" target="_blank">
	//         <img src={viteLogo} className="logo" alt="Vite logo" />
	//       </a>
	//       <a href="https://react.dev" target="_blank">
	//         <img src={reactLogo} className="logo react" alt="React logo" />
	//       </a>
	//     </div>
	//     <h1>Vite + React</h1>
	//     <div className="card">
	//       <button onClick={() => setCount((count) => count + 1)}>
	//         count is {count}
	//       </button>
	//       <p>
	//         Edit <code>src/App.tsx</code> and save to test HMR
	//       </p>
	//     </div>
	//     <p className="read-the-docs">
	//       Click on the Vite and React logos to learn more
	//     </p>
	//   </>
	// )
}

export default App;
