import { useState } from 'react';
import { saveAs } from "file-saver";
import Loading from './Loading';
import { Navigate } from 'react-router-dom';
import '../Styles/Form.css';


function QrCode({ cardId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const downloadQRCodeImage = () => {
    const url = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${window.location.origin}/${cardId}&choe=UTF-8`
    try {
      saveAs(url, 'business-card.png')
    } catch (error) {
      alert('something went wrong');
    }
  };

  if (!cardId.length || redirect) return (<Navigate to="/" />);

  return (
    <div className='qr-card'>
      <button onClick={() => setRedirect(true)}> Go Back</button>
      { isLoading && <Loading /> }
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
