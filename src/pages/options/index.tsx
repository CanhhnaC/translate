import refreshOnUpdate from "virtual:reload-on-update-in-view";
import Options from "@/pages/options/Options";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import * as React from "react";
import { createRoot } from "react-dom/client";

refreshOnUpdate("pages/options");

function init() {
	const appContainer = document.querySelector("#app-container");
	if (!appContainer) {
		throw new Error("Can not find #app-container");
	}
	const root = createRoot(appContainer);
	root.render(
		<FluentProvider theme={webLightTheme}>
			<Options />
		</FluentProvider>,
	);
}

init();
