interface Window {
  NutrientViewer?: {
    load: (options: { container: HTMLElement; document: string }) => void;
    unload: (container: HTMLElement) => void;
  };
}
