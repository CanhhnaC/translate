import logo from "@/assets/img/logo.svg";
import "@/pages/popup/Popup.css";
import withErrorBoundary from "@/shared/hoc/withErrorBoundary";
import withSuspense from "@/shared/hoc/withSuspense";
import exampleThemeStorage from "@/shared/storages/exampleThemeStorage";
import { Button } from "@fluentui/react-components";
import React from "react";

const Popup = () => {
	return (
		<div
			style={{
				width: 300,
				height: 300,
			}}
		/>
	);
};

export default withErrorBoundary(
	withSuspense(Popup, <div> Loading ... </div>),
	<div> Error Occur </div>,
);
