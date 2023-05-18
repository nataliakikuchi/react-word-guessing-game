import { useState } from "react";

const Input = ({ guessWord }) => {
	const [inputValue, setInputValue] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputValue.length === 5) {
			guessWord(inputValue);
			setInputValue("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(event) => setInputValue(event.target.value)}
				maxLength={5}
				value={inputValue}
			></input>
		</form>
	);
};

export default Input;
