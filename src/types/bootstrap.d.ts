// src/types/bootstrap.d.ts
interface Bootstrap {
  Carousel: new (
    element: Element,
    options?: { interval?: number; ride?: string }
  ) => {
    cycle: () => void;
  };
}

declare global {
  interface Window {
    bootstrap: Bootstrap;
  }
}
