import styles from "./character-field.module.css";

const CharacterField = ({
	letter,
	existingLetter,
	correctLetter,
	incorrectLetter,
}) => {
	return (
		<div
			className={styles["character-field"]}
			data-existing-letter={existingLetter}
			data-correct-letter={correctLetter}
			data-incorrect-letter={incorrectLetter}
		>
			{letter}
		</div>
	);
};

export default CharacterField;
