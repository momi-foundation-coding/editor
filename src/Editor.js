import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

const mapLanguageExtensions = {
  'html': [html()],
  'css': [css()],
  'js': [javascript({ jsx: true })]
}

const Editor = (props) => {
  const { language, displayName, value, onChange} = props;
  const [extensions, setExtensions] = useState([])

  React.useEffect(() => {
    setExtensions(mapLanguageExtensions[language])
  }, [language])

  const handleChange = (value) => {
    onChange(value)
  }

  return (
    <div 
      className='editor-container'
    >
      <div className='editor-title'>
        {displayName}
      </div>
      <CodeMirror
        value={value}
        theme={okaidia}
        height="100%"
        extensions={extensions}
        onChange={handleChange}
        className='code-mirror-wrapper'
      />
    </div>
  );
}

export default Editor;
