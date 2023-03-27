import { useState } from 'react';
import { saveAs } from "file-saver";
import '../Styles/Form.css';


function QrCode({ cardId, setCardId }) {

  const downloadQRCodeImage = () => {
    const url = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${window.location.origin}/${cardId}&choe=UTF-8`
    try {
      saveAs(url, 'business-card.png')
    } catch (error) {
      alert('something went wrong');
    }
  };


  return (
    <div className='card'>
      <button onClick={() => setCardId('')}>Back</button>
      { cardId.length && 
        <div>
          <img 
            src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${window.location.origin}/${cardId}&choe=UTF-8`}
            alt=""
          />
          <button onClick={() => downloadQRCodeImage()}>Download</button>
        </div>
      }
    </div>
  )
}

export default QrCode
