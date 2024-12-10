import { MDXProvider } from "@mdx-js/react";
import React, { ReactNode } from "react";

interface MdxProviderProps {
  children: ReactNode;
}

export function MdxProvider({ children }: MdxProviderProps) {
  const components = {
    h1: (props) => (
      <h1 className="text-3xl font-bold text-teal-600" {...props} />
    ),
    p: (props) => <p className="text-base text-gray-300" {...props} />,
    ul: (props) => <ul className="list-disc list-inside pl-4" {...props} />,
  };

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
