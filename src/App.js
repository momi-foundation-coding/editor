import React, { useEffect } from 'react';
import Editor from './Editor';
import Questions from './Questions';

const App = () => {
  const [html, setHtml] = React.useState('')
  const [css, setCss] = React.useState('')
  const [js, setJs] = React.useState('')
  const [srcDoc, setSrcDoc] = React.useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className='container-fluid'>
      <div className='heading'>
        <h1>A Practice Area for web development (HTML, CSS, Javascript)</h1>
      </div>
     
      <div className='main'>
        <div className='questions'>
          <Questions />
        </div>
        <div className='code'>
          <div className='pane top-pane'>
            <Editor 
              displayName="HTML"
              language='html'
              value={html}
              onChange={setHtml}
            />
            <Editor 
              displayName="CSS"
              language='css'
              value={css}
              onChange={setCss}
            />
            <Editor 
              displayName="Javascript"
              language='js'
              value={js}
              onChange={setJs}
            />
          </div>
          <div className='pane'>
            <iframe
              srcDoc={srcDoc}
              title="output"
              height="100%"
              width="100%"
              sandbox='allow-scripts'
              className='output-area'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
