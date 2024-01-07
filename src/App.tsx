import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import markdownStyle from "./markdown-styles.module.css";

import "./App.css";

function App() {
  const markdown = `

  # Testing markdown into react application

  ## This is a subheading

  Right now I just wanna know how it works

  - This is a list item
  - This is another list item

  Right below this line is a code block

  ~~~js

  const randomFunction = () => {
    const randomVariable = "Hello World";

    return randomVariable;
  }

  console.log(randomFunction());
  
  ~~~

  Now what comes up next is an image:

  ![Image from when I won WorldSkills Americas](https://s2-g1.glbimg.com/YYxHxTw2ZxlZcbYg-aQItSGbh5A=/0x0:1024x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/1/V/kDPoAgTDiM6N7ANfNW1Q/worldskliss-3-1-.jpeg "Random Image sksksksksk").


  `;

  return (
    <Markdown
      children={markdown}
      className={markdownStyle.reactMarkdown}
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              //{...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={dracula}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}

export default App;
