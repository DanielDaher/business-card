import Swal from "sweetalert2";

export const isValidRequest = (userInfo) => {
  let isValid = true;
  Object.values(userInfo).map((info) => {
    if (info === '') return isValid = false;
  });
  return isValid;
}

export const alertEmptyFields = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'All fields must be filled!',
    confirmButtonColor: '#000',
    background: '#e3e3e3'
  })
}