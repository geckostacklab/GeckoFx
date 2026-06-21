
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type CodeTabProps = {
  source: string,
}

export default function CodeTab({
  source,
}: CodeTabProps) {
  return (
    <div>
      <SyntaxHighlighter
        language="tsx"
        style={atomOneDark}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers
        customStyle={{
          maxWidth: "60vw"
        }}
      >
        {source}
      </SyntaxHighlighter>
    </div>
  )
}