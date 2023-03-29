import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import QrCode from './Components/QrCode';
import VirtualCard from './Components/VirtualCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cardId, setCardId] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Form setCardId={ setCardId } /> } />
          <Route path="/qr-code" element={ <QrCode cardId={cardId} /> } />
          <Route path="/card/:id" element={ <VirtualCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
