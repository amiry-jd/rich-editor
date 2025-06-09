"use client";

import dynamic from "next/dynamic";
import { Children, isValidElement, useEffect, useState, type ReactElement, type ReactNode } from "react";
import type { RichInputProps as BaseProps } from "react-rich-input";

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
    (child) => isValidElement(child) && (child.type as any).displayName === "RichInput.LoadingTemplate"
  ) as ReactElement | undefined;
}

const Input = dynamic(() => import("react-rich-input").then((mod) => mod.RichInput), {
  ssr: false,
  loading: () => <div>Loading input...</div>,
});

export function RichInput({ children, ...props }: NextRichInputProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const loadingSlot = extractLoading(children) as ReactElement<{ children?: ReactNode }> | undefined;

  // const Input = dynamic(
  //   () => import("react-rich-input").then((m) => m.RichInput),
  //   {
  //     ssr: false,
  //     loading: () => {
  //       if (isValidElement(loadingSlot) && loadingSlot.props?.children) {
  //         // Always wrap children in a fragment to ensure a single element is returned
  //         return <>{loadingSlot.props.children}</>;
  //       }
  //       return (
  //         <>
  //           <div>Loading input...</div>
  //         </>
  //       );
  //     },
  //   }
  // );

  if (isMounted) {
    return <Input {...props} />;
  } else {
    return <>{loadingSlot?.props.children}</>;
  }
}

RichInput.LoadingTemplate = LoadingTemplate;
