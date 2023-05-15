import Cookies from 'js-cookie'

export const cookieExist = (cookie) => {
  return Cookies.get(cookie);
};