import type { QuillOptions } from "quill/core";
import type { CSSProperties } from "react";

export interface RichInputProps {
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  /** Optional: Additional Quill options */
  options?: Partial<QuillOptions>;
  style?: CSSProperties;
}
