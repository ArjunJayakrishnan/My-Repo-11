import { useContext } from "react";
import stylesCompletedContainer from "./CompletedContainer.module.css";
import { WholeContext } from "../App";

function CompletedContainer({ children }) {
	const { theme } = useContext(WholeContext);
	return (
		<div
			className={
				theme === "dark"
					? stylesCompletedContainer.completedContainerDark
					: stylesCompletedContainer.completedContainerLight
			}
		>
			<p>{children}</p>
		</div>
	);
}

export default CompletedContainer;
