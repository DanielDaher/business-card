import { useState } from 'react';
import { saveAs } from "file-saver";
import '../Styles/Form.css';
import Loading from './Loading';


function QrCode({ cardId, setCardId }) {
  const [isLoading, setIsLoading] = useState(true);

  const downloadQRCodeImage = () => {
    const url = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${window.location.origin}/${cardId}&choe=UTF-8`
    try {
      saveAs(url, 'business-card.png')
    } catch (error) {
      alert('something went wrong');
    }
  };


  return (
    <div className='qr-card'>
      <button onClick={() => setCardId('')}>Back</button>
      { isLoading && <Loading />}
      { cardId.length && 
        <div>
          <img 
            src={`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${window.location.origin}/${cardId}&choe=UTF-8`}
            onLoad={() => setIsLoading(false)}
            alt="business card qr code"
          />
        </div>
      }
      <button onClick={() => downloadQRCodeImage()}>Download</button>
    </div>
  )
}

export default QrCode
