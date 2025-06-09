import Quill from "quill";
import { Delta } from "quill/core";
import {
  forwardRef,
  type RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import "quill/dist/quill.snow.css";
import type { RichInputProps } from "./types";

const RichInput = forwardRef<Quill | null, RichInputProps>(
  (
    { readOnly = false, value = "", onChange, className, style, options },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const valueRef = useRef<string | undefined>(value);
    const onChangeRef = useRef<typeof onChange>(onChange);

    useLayoutEffect(() => {
      onChangeRef.current = onChange;
    });

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const editorContainer = container.ownerDocument.createElement("div");
      container.appendChild(editorContainer);

      const quill = new Quill(editorContainer, {
        theme: "snow",
        readOnly,
        ...options,
      });

      if (ref) {
        if (typeof ref === "function") {
          ref(quill);
        } else if (typeof ref === "object" && ref !== null) {
          // @ts-expect-error: current might be readonly in some cases, but we want to assign
          (ref as RefObject<Quill | null>).current = quill;
        }
      }

      if (valueRef.current) {
        const isHTML = /<\/?[a-z][\s\S]*>/i.test(valueRef.current);
        const contentValue = isHTML
          ? quill.clipboard.convert({ html: valueRef.current })
          : new Delta().insert(valueRef.current);
        quill.setContents(contentValue);
      }

      quill.on(Quill.events.TEXT_CHANGE, () => {
        onChangeRef.current?.(quill.getSemanticHTML());
      });

      return () => {
        if (ref && typeof ref === "object" && ref !== null) {
          ref.current = null;
        }
        container.innerHTML = "";
      };
    }, [ref, readOnly]);

    return (
      <div
        ref={containerRef}
        className={`min-h-[300px] border rounded-md bg-white overflow-hidden ${className}`}
        style={style}
      />
    );
  }
);

RichInput.displayName = "RichInput";

export default RichInput;
