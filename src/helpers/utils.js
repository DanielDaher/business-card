export const isValidRequest = (userInfo) => {
  let isValid = true;
  Object.values(userInfo).map((info) => {
    if (info === '') return isValid = false;
  });
  return isValid;
}