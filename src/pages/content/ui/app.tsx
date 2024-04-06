import { root } from "@fluentui-contrib/react-shadow";
import {
	Button,
	FluentProvider,
	createCSSRuleFromTheme,
	webLightTheme,
} from "@fluentui/react-components";
import * as React from "react";

const LIGHT_THEME_CLASS_NAME = "fluentui-light-theme";

export default function App() {
	const providerRef = React.useRef<HTMLElement>(null);

	React.useEffect(() => {
		// Use a Fluent theme to create a style rule
		// E.g., `.class-name { --vars ... }`
		// Fluent themes are all CSS vars so they pierce the
		// shadow DOM, we just need to ensure the class name
		// used here will match an element.
		const lightThemeCSS = createCSSRuleFromTheme(
			`.${LIGHT_THEME_CLASS_NAME}`,
			webLightTheme,
		);

		const sheet = new CSSStyleSheet();
		sheet.insertRule(lightThemeCSS);

		const shadowRoot = providerRef.current?.getRootNode() as ShadowRoot;

		if (shadowRoot.adoptedStyleSheets) {
			// Append the sheet so styles are available to shadow DOM
			shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, sheet];
		}
	}, []);

	return (
		<FluentProvider
			theme={webLightTheme}
			ref={providerRef}
			className={LIGHT_THEME_CLASS_NAME}
		>
			<root.div>
				{/* Fluent React v9 Button rendered in a shadow root */}
				<Button>Fluent UI React Button in shadow DOM</Button>
			</root.div>
		</FluentProvider>
	);
}
