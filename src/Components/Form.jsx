import { useState } from 'react';
import { registerNewCard } from '../helpers/api';
import '../Styles/Form.css';


function Form() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    linkedinURL: '',
    githubURL: ''
  });

  const genereateQRCodeImage = async (e) => {
    e.preventDefault();
    try {
      const cardId = await registerNewCard(userInfo);
      console.log(typeof cardId);
      alert(cardId);
    } catch (error) {
      alert('something went wrong');
      
    }
  };

  const handleInputChange = (info, event) => setUserInfo({ ...userInfo, [info]: event.target.value });

  return (
    <div className='card'>
      <h3>QR CODE IMAGE GENERATOR</h3>
      <form onSubmit={(e) => genereateQRCodeImage(e)}>
        {Object.keys(userInfo).map((info) => {
          const placeholderValue = { name: 'Name', linkedinURL: 'Linkedin URL', githubURL: 'Github URL' };
          const title = 'Type your name';
          return (
            <input
              type="text"
              key={info}
              value={userInfo[info]}
              placeholder={placeholderValue[info]}
              title={info === 'name' ? title : null}
              onChange={(event) => handleInputChange(info, event)}
            />
        )
        })}
        <button title="Make a new QR CODE with your informations">Generate Image</button>
      </form>
    </div>
  )
}

export default Form
