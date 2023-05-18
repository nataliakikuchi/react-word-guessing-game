import "./App.css";
import RemainingAttemptingMessage from "./components/remaining-attempting-message/remaining-attempting-message";
import GameOverMessage from "./components/game-over-message/game-over-message";
import WinMessage from "./components/win-message/win-message";
import Input from "./components/input/input";
import CharacterField from "./components/character-field/character-field";
import { useEffect, useState } from "react";
import useFetch from "./hooks/use-fetch";

const items = Array.from({ length: 6 }).map((_, index) => ({
	row: index,
	characters: Array.from({ length: 5 }).map(() => ({
		letter: "",
		existingLetter: false,
		correctLetter: false,
		incorrectLetter: false,
	})),
}));

function App() {
	const [currentRow, setCurrentRow] = useState(0);
	const [attempts, setAttempts] = useState(items);
	const [wordOfTheDay, setWordOfTheDay] = useState("");

	const getData = useFetch();

	useEffect(() => {
		// const getWordOfTheDay = async () => {
		// 	const result = await getData();
		// 	console.log(result);
		// };
		// getWordOfTheDay();
		getData().then((value) => {
			console.log(value);
			setWordOfTheDay(value.split(""));
		});
	}, []);

	const validateWord = (word) => {
		const updatedAttempts = attempts.map((attempt, index) => {
			if (currentRow === attempt.row) {
				const allCharacters = word.split("").map((letter, index) => ({
					letter,
					existingLetter: wordOfTheDay.includes(letter),
					correctLetter: wordOfTheDay[index] === letter,
					incorrectLetter: !wordOfTheDay.includes(letter),
				}));
				attempt.characters = allCharacters;
				console.log(allCharacters);
				return attempt;
			}
			return attempt;
		});
		setAttempts(updatedAttempts);
		setCurrentRow((previousState) => previousState + 1); //atualizar a linha
	};

	return (
		<>
			<div>
				<RemainingAttemptingMessage />
				<GameOverMessage />
				<WinMessage />
			</div>
			<div className="container">
				<Input guessWord={(word) => validateWord(word)} />
				{attempts.map((attempt, rowIndex) => (
					<div className="container__row" key={rowIndex}>
						<div className="container__character">
							{attempt.characters.map((character, fieldIndex) => (
								<CharacterField
									key={fieldIndex}
									letter={character.letter}
									existingLetter={character.existingLetter}
									correctLetter={character.correctLetter}
									incorrectLetter={character.incorrectLetter}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
