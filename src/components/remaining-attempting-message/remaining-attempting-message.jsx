
const RemainingAttemptingMessage = ({attempts = 6}) => {
	return (
			<p>You have {attempts} guesses remaining</p>
	)
}

export default RemainingAttemptingMessage;
