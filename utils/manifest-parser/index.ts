type Manifest = chrome.runtime.ManifestV3;

class ManifestParser {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}

	static convertManifestToString(manifest: Manifest): string {
		let manifestParser = manifest;
		if (process.env.__FIREFOX__) {
			manifestParser =
				ManifestParser.convertToFirefoxCompatibleManifest(manifest);
		}
		return JSON.stringify(manifestParser, null, 2);
	}

	static convertToFirefoxCompatibleManifest(manifest: Manifest) {
		const manifestCopy = {
			...manifest,
		} as { [key: string]: unknown };

		manifestCopy.background = {
			scripts: [manifest.background?.service_worker],
			type: "module",
		};
		manifestCopy.options_ui = {
			page: manifest.options_page,
			browser_style: false,
		};
		manifestCopy.content_security_policy = {
			extension_pages: "script-src 'self'; object-src 'self'",
		};
		manifestCopy.options_page = undefined;
		return manifestCopy as Manifest;
	}
}

export default ManifestParser;
