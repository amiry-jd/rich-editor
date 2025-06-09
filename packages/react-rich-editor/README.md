# react-rich-editor

A lightweight React rich‑text editor component with toolbar customization.

## Installation

```bash
npm install react-rich-editor
```

or using yarn

```bash
yarn add react-rich-editor
```

## Usage

```tsx
import React, { useState } from "react";
import { RichEditor } from "react-rich-editor";

export default function App() {
  const [content, setContent] = useState("<p>Hello world</p>");
  return <RichEditor value={content} onChange={setContent} toolbar={["bold", "italic", "underline", "link"]} />;
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
