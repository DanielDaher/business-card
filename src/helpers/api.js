import { isValidRequest } from "./utils";
// require('dotenv').config();
const API_BASE_URL = /* `${process.env.REACT_APP_API_URL}` ||  */'http://localhost:3000';

export const registerNewCard = async (userInfo) => {
  const validRequest = isValidRequest(userInfo);
  if (!validRequest) return 'All fields must be filled';
  try {
    const url = `${API_BASE_URL}/cards`;
    
      const registerCard = await fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userInfo
        }),
      });
      const registerInfo = await registerCard.json();
      return registerInfo;
  } catch (error) {
    console.error(error);
  }
}; 