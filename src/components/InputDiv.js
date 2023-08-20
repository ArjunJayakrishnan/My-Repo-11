import { useContext } from "react";
import {
	MAX_CHARS_LAPTOP,
	MAX_CHARS_MOBILE,
	MAX_CHARS_SMALL_MOBILE,
	WINDOW_WIDTH_LAPTOP,
	WINDOW_WIDTH_MOBILE,
} from "../constantChars";
import stylesInputDiv from "./InputDiv.module.css";
import { WholeContext } from "../App";

function InputDiv() {
	const { inputText, setInputText, handleActiveText, theme } =
		useContext(WholeContext);

	return (
		<div
			className={
				theme === "dark"
					? stylesInputDiv.inputDivDark
					: stylesInputDiv.inputDivLight
			}
		>
			<input
				type="text"
				name="input-text"
				className={
					theme === "dark"
						? stylesInputDiv.inputTextDark
						: stylesInputDiv.inputTextLight
				}
				value={inputText}
				onChange={(e) => {
					if (
						window.innerWidth >= WINDOW_WIDTH_LAPTOP &&
						e.target.value.length <= MAX_CHARS_LAPTOP
					) {
						setInputText(e.target.value);
					} else if (
						(window.innerWidth <= WINDOW_WIDTH_LAPTOP) &
							(window.innerWidth >= WINDOW_WIDTH_MOBILE) &&
						e.target.value.length <= MAX_CHARS_MOBILE
					) {
						setInputText(e.target.value);
					} else if (
						window.innerWidth <= WINDOW_WIDTH_MOBILE &&
						e.target.value.length <= MAX_CHARS_SMALL_MOBILE
					) {
						setInputText(e.target.value);
					} else return;
				}}
			></input>
			<button
				className={
					theme === "dark"
						? stylesInputDiv.saveButtonDark
						: stylesInputDiv.saveButtonLight
				}
				onClick={handleActiveText}
			>
				Save
			</button>
		</div>
	);
}

export default InputDiv;
