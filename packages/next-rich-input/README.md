# next-rich-input

Next.js optimized rich‑text input built on `react-rich-input`. Supports SSR and dynamic imports.

## Installation

```bash
npm install next-rich-input
```

## Usage

```tsx
import dynamic from "next/dynamic";
import "next-rich-input/dist/style.css";

const RichInput = dynamic(() => import("next-rich-input"), { ssr: false });

export default function Page() {
  const [html, setHtml] = useState("<p>...</p>");
  return <RichInput value={html} onChange={setHtml} toolbar={["bold", "italic"]} />;
}
```

## Props

Same as `react-rich-input`.

## Development

```bash
npm run build
npm test
```

## License

MIT © Javad Amiry
