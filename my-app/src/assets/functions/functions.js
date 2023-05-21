import {
  host,
  login,
  password,
  client_id,
  client_secret,
  hr,
  x_secret_key
} from '../constans/constans';
import Cookies from 'js-cookie';

export async function getToken() {
  const data = await fetch(
    host +
      `/2.0/oauth2/password/?login=${login}&password=${password}&client_id=${client_id}&client_secret=${client_secret}&hr=${hr}`,
    {
      method: 'GET',
      headers: {
        'x-secret-key': x_secret_key
      }
    }
  );

  Cookies.set('token', await data.json());
}
