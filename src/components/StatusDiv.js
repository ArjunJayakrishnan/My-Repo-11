import { useContext } from "react";
import stylesStatusDiv from "./StatusDiv.module.css";
import { WholeContext } from "../App";
import ShownSelectDiv from "./ShownSelectDiv";
import { WINDOW_WIDTH_LAPTOP } from "../constantChars";

function StatusDiv({ length }) {
	const { theme, setCompletedText } = useContext(WholeContext);
	return (
		<>
			<div
				className={
					theme === "dark"
						? stylesStatusDiv.statusDivDark
						: stylesStatusDiv.statusDivLight
				}
			>
				<p>{length} items left</p>
				{window.innerWidth > WINDOW_WIDTH_LAPTOP ? <ShownSelectDiv /> : <></>}
				<p
					onClick={() => {
						setCompletedText([]);
					}}
				>
					Clear completed
				</p>
			</div>
			{window.innerWidth < WINDOW_WIDTH_LAPTOP ? <ShownSelectDiv /> : <></>}
		</>
	);
}

export default StatusDiv;
