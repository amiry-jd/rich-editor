# next-rich-editor

Next.js optimized rich‑text editor built on `react-rich-editor`. Supports SSR and dynamic imports.

## Installation

```bash
npm install next-rich-editor
```

## Usage

```tsx
import dynamic from "next/dynamic";
import "next-rich-editor/dist/style.css";

const RichEditor = dynamic(() => import("next-rich-editor"), { ssr: false });

export default function Page() {
  const [html, setHtml] = useState("<p>...</p>");
  return <RichEditor value={html} onChange={setHtml} toolbar={["bold", "italic"]} />;
}
```

## Props

Same as `react-rich-editor`.

## Development

```bash
npm run build
npm test
```

## License

MIT © Javad Amiry
