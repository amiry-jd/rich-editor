"use client";

import dynamic from "next/dynamic";
import {
  Children,
  isValidElement,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import type { RichInputProps as BaseProps } from "react-rich-editor";

export interface NextRichInputProps extends BaseProps {
  children?: ReactNode;
}

export function LoadingTemplate({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

LoadingTemplate.displayName = "RichInput.LoadingTemplate";

// Helper to extract loading template
function extractLoading(children: ReactNode): ReactNode | undefined {
  return Children.toArray(children).find(
    (child) =>
      isValidElement(child) &&
      (child.type as any).displayName === "RichInput.LoadingTemplate"
  ) as ReactElement | undefined;
}

const Editor = dynamic(
  () => import("react-rich-editor").then((mod) => mod.RichInput),
  { ssr: false, loading: () => <div>Loading editor...</div> }
);

export function RichInput({ children, ...props }: NextRichInputProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const loadingSlot = extractLoading(children) as
    | ReactElement<{ children?: ReactNode }>
    | undefined;

  // const Editor = dynamic(
  //   () => import("react-rich-editor").then((m) => m.RichInput),
  //   {
  //     ssr: false,
  //     loading: () => {
  //       if (isValidElement(loadingSlot) && loadingSlot.props?.children) {
  //         // Always wrap children in a fragment to ensure a single element is returned
  //         return <>{loadingSlot.props.children}</>;
  //       }
  //       return (
  //         <>
  //           <div>Loading editor...</div>
  //         </>
  //       );
  //     },
  //   }
  // );

  if (isMounted) {
    return <Editor {...props} />;
  } else {
    return <>{loadingSlot?.props.children}</>;
  }
}

RichInput.LoadingTemplate = LoadingTemplate;
