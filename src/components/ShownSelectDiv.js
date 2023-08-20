import stylesStatusDiv from "./StatusDiv.module.css";
import { useContext } from "react";
import { WholeContext } from "../App";

function ShownSelectDiv() {
	const { setShown, theme } = useContext(WholeContext);
	return (
		<div
			className={
				theme === "dark"
					? stylesStatusDiv.shownSelectDivDark
					: stylesStatusDiv.shownSelectDivLight
			}
		>
			<p
				onClick={(e) => {
					setShown("all");
				}}
			>
				All
			</p>
			<p
				onClick={(e) => {
					setShown("active");
				}}
			>
				Active
			</p>
			<p
				onClick={(e) => {
					setShown("completed");
				}}
			>
				Completed
			</p>
		</div>
	);
}

export default ShownSelectDiv;
