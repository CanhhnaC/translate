import React from "react";
import logo from "@/assets/img/logo.svg";
import "@/pages/popup/Popup.css";
import useStorage from "@/shared/hooks/useStorage";
import exampleThemeStorage from "@/shared/storages/exampleThemeStorage";
import withSuspense from "@/shared/hoc/withSuspense";
import withErrorBoundary from "@/shared/hoc/withErrorBoundary";
import { Button } from "@fluentui/react-components";

const Popup = () => {
	const theme = useStorage(exampleThemeStorage);

	return (
		<div
			style={{
				width: 300,
				height: 300,
			}}
		>
			<header
				className="App-header"
				style={{ color: theme === "light" ? "#000" : "#fff" }}
			>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: theme === "light" && "#0281dc",
						marginBottom: "10px",
					}}
				>
					Learn React!
				</a>
				<Button>Toggle Theme</Button>
			</header>
		</div>
	);
};

export default withErrorBoundary(
	withSuspense(Popup, <div> Loading ... </div>),
	<div> Error Occur </div>,
);
