import { createContext, useEffect, useState } from "react";
import ActiveContainer from "./components/ActiveContainer";
import CompletedContainer from "./components/CompletedContainer";
import Header from "./components/Header";
import InputDiv from "./components/InputDiv";
import StatusDiv from "./components/StatusDiv";

export const WholeContext = createContext();

function App() {
	const [theme, setTheme] = useState("dark");
	const [shown, setShown] = useState("all");

	// on line 27 we do setitem to the loclstorage. so here, we're just retrieving it and setting it as a state.
	const [activeText, setActiveText] = useState(function () {
		const storedActiveValue = localStorage.getItem("activeText");
		return JSON.parse(storedActiveValue) || [];
	});
	const [completedText, setCompletedText] = useState(function () {
		const storedCompletedValue = localStorage.getItem("completedText");
		// || [] is for preventing null at the initial render. so if null return empty array.
		return JSON.parse(storedCompletedValue) || [];
	});
	const [inputText, setInputText] = useState("");

	// Update local storage whenever activeText or completedText changes
	useEffect(() => {
		localStorage.setItem("activeText", JSON.stringify(activeText));
		localStorage.setItem("completedText", JSON.stringify(completedText));
	}, [activeText, completedText]);

	function handleActiveText(e) {
		e.preventDefault();
		setActiveText([...activeText, inputText]);
		setInputText("");
	}
	function handleCompletedText(id) {
		const removedItem = activeText[id];
		setCompletedText([...completedText, removedItem]);
		setActiveText(activeText.filter((_, index) => index !== id));
	}

	function handleTheme() {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	}

	function handleDeleteActiveText(id) {
		setActiveText(activeText.filter((_, index) => index !== id));
	}
	return (
		<>
			<WholeContext.Provider
				value={{
					theme,
					handleTheme,
					inputText,
					setInputText,
					handleActiveText,
					handleCompletedText,
					handleDeleteActiveText,
					setShown,
					setCompletedText,
				}}
			>
				<div
					className={
						theme === "dark" ? "bgimage-filler-dark" : "bgimage-filler-light"
					}
				></div>
				<div className="container">
					<Header />
					<InputDiv />
					<div className="saved-div">
						{(shown === "all" || shown === "active") &&
							activeText.map((item, i) => (
								<ActiveContainer key={i} id={i}>
									{item}
								</ActiveContainer>
							))}
						{(shown === "all" || shown === "completed") &&
							completedText.map((item, i) => (
								<CompletedContainer key={i}>{item}</CompletedContainer>
							))}
						{(activeText.length > 0 || completedText.length > 0) && (
							<StatusDiv length={activeText.length} />
						)}
					</div>
				</div>
				<div
					className={
						theme === "dark" ? "bgcolor-filler-dark" : "bgcolor-filler-light"
					}
				></div>
			</WholeContext.Provider>
		</>
	);
}

export default App;
