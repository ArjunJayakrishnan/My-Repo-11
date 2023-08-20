import { useContext } from "react";
import stylesActiveContainer from "./ActiveContainer.module.css";
import { WholeContext } from "../App";

function ActiveContainer({ children, id }) {
	const { theme, handleCompletedText, handleDeleteActiveText } =
		useContext(WholeContext);
	return (
		<div
			className={
				theme === "dark"
					? stylesActiveContainer.activeContainerDark
					: stylesActiveContainer.activeContainerLight
			}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="#494C6B"
				width="32px"
				height="32px"
				onClick={() => handleCompletedText(id)}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<p>{children}</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32px"
				height="32px"
				className={stylesActiveContainer.cross}
				onClick={() => handleDeleteActiveText(id)}
			>
				<path
					fill="#494C6B"
					fillRule="evenodd"
					d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
				/>
			</svg>
		</div>
	);
}

// localStorage.clear();

export default ActiveContainer;
