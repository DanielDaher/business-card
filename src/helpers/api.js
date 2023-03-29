import { isValidRequest } from "./utils";
const API_BASE_URL = `${import.meta.env.VITE_API_URL}` /* || 'http://localhost:3000' */;

export const registerNewCard = async (userInfo) => {
  try {
    console.log(API_BASE_URL)
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

export const getCard = async (id) => {
  console.log(id)
  try {
    const url = `${API_BASE_URL}/cards/${id}`;
    console.log(API_BASE_URL)
    
    const card = await fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    const currentCard = await card.json();
    return currentCard;
  } catch (error) {
    console.error(error);
  }
};

export const getGithubUserInfo = async (username) => {
  try {  
    const data = await fetch(`https://api.github.com/users/${username}`);
    const userInfo = await data.json();
    return userInfo;
  } catch (error) {
    console.error('error: ', error);
    return null
  }
};