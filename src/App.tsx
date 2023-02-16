import './App.css'

import { Vim } from './Vim'
import workerURL from 'vim-wasm/vim.js?url'


function App() {
  return (
    <Vim
      style={{ height: '100%', width: '50%', fontSize: '30px' }}
      worker={workerURL}
      readClipboard={navigator.clipboard && navigator.clipboard.readText}
      onWriteClipboard={navigator.clipboard && navigator.clipboard.writeText}
    />
  )
}

export default App
