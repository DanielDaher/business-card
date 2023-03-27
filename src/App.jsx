import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import QrCode from './Components/QrCode'

function App() {
  const [cardId, setCardId] = useState('')

  return (
    <div className="App">
      { cardId.length
        ? <QrCode cardId={cardId} setCardId={setCardId} />
        : <Form setCardId={ setCardId } />
      }
    </div>
  )
}

export default App
