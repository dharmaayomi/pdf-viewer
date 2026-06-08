import { useEffect, useRef } from "react";
import "./App.css";

function App() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;

		const { NutrientViewer } = window;
		if (container && NutrientViewer) {
			NutrientViewer.load({
				container,
				document:
					"/public/files/powertrust.pdf",
					// "https://drive.google.com/file/d/1KY7DJRbz05sc3WSrVTZ-7nk-61qE0jWf/view?usp=sharing",
			});
		}

		return () => {
			if (container) {
				NutrientViewer?.unload(container);
			}
		};
	}, []);

	// Set the container height and width.
	return (
		// Make sure to set the container height and width explicitly.
		<div ref={containerRef} style={{ height: "100vh", width: "100vw" }} />
	);
}

export default App;
