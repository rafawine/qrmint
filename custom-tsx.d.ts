import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "md-filled-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      // Añade aquí otros Web Components que vayas a utilizar
    }
  }
}
