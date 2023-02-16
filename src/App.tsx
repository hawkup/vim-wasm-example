import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Vim } from 'react-vim-wasm';
import workerURL from 'vim-wasm/vim.js?url'

function App() {
  return (
    <Vim
        worker={workerURL}
        readClipboard={navigator.clipboard && navigator.clipboard.readText}
        onWriteClipboard={navigator.clipboard && navigator.clipboard.writeText}
    />
  )
}

export default App
