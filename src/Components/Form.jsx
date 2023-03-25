import { useState } from 'react'

function Form() {
  const [count, setCount] = useState(0);

  const genereateQRCodeImage = (e) => {
    e.preventDefault();
    alert('função disparada')
  };

  return (
    <form className='form' onSubmit={(e) => genereateQRCodeImage(e)}>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Linkedin URL'/>
      <input type="text" placeholder='Github URL'/>
      <button>Generate Image</button>
    </form>
  )
}

export default Form
