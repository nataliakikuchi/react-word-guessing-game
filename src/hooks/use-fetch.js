const useFetch = () => {
	const getData = async () => {
		const data = await fetch("https://api.frontendeval.com/fake/word");
		// const word = await data.json();

		return data.text();
	};
	return getData;
};

export default useFetch;
