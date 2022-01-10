import React from 'react';
import { DetailedHTMLProps } from ''

declare namespace JSX {
  interface IntrinsicElements {
    item: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, 
  }
}

function App() {
  return (
    <>
      <h1>Olá Dev!</h1>
    </>
  )
}

export default App