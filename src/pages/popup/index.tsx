import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "@/pages/popup/Popup";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

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
