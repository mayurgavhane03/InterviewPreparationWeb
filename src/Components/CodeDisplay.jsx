import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ code, language }) => {
  return (
    <SyntaxHighlighter  language={language} style={darcula}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
