# react-rich-input

A lightweight React rich‑text input component with toolbar customization.

## Installation

```bash
npm install react-rich-input
```

or using yarn

```bash
yarn add react-rich-input
```

## Usage

```tsx
import React, { useState } from "react";
import { RichInput } from "react-rich-input";

export default function App() {
  const [content, setContent] = useState("<p>Hello world</p>");
  return <RichInput value={content} onChange={setContent} toolbar={["bold", "italic", "underline", "link"]} />;
}
```

## Props

| Prop       | Type                     | Description                             |
| ---------- | ------------------------ | --------------------------------------- |
| `value`    | `string`                 | HTML content                            |
| `onChange` | `(html: string) => void` | Callback on content change              |
| `toolbar`  | `string[]`               | Buttons to show: `bold`, `italic`, etc. |

## Development

```bash
npm run build
npm test
```

## License

MIT © Javad Amiry
