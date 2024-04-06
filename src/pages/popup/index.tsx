import refreshOnUpdate from "virtual:reload-on-update-in-view";
import Popup from "@/pages/popup/Popup";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import React from "react";
import { createRoot } from "react-dom/client";

refreshOnUpdate("pages/popup");

function init() {
	const appContainer = document.querySelector("#app-container");
	if (!appContainer) {
		throw new Error("Can not find #app-container");
	}
	const root = createRoot(appContainer);
	root.render(
		<FluentProvider theme={webLightTheme}>
			<Popup />
		</FluentProvider>,
	);
}

init();
