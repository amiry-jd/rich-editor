import { RichInput } from "react-rich-input";
import "./index.css";

import { useRef, useState } from "react";

export function App() {
  const [htmlValue, setHtmlValue] = useState("<h1>Hello World!</h1>");
  const ref = useRef(null);
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <div style={{ flex: 1, borderRight: "1px solid #ccc" }}>
        <RichInput
          className=""
          ref={ref}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#EFFEEF",
            color: "black",
          }}
          value={htmlValue}
          onChange={(value) => setHtmlValue(value)}
        />
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#EFEFFA",
            color: "black",
          }}
          dangerouslySetInnerHTML={{ __html: htmlValue }}></div>
      </div>
    </div>
  );
}

export default App;
