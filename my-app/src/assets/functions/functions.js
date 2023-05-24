import {
  host,
  login,
  password,
  client_id,
  client_secret,
  hr,
  x_secret_key,
  x_api_app_id,
  num_vacancies
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
  const res = await data.json();
  Cookies.set('token', res.access_token);
}

export async function getBranches() {
  const data = await fetch(host + `/2.0/catalogues/`, {
    method: 'GET',
    headers: {
      'x-secret-key': x_secret_key
    }
  });

  return await data.json();
}

export async function getVacancies(filter, search, numPage) {
  const { branch, salaryFrom, salaryTo } = filter;
  const data = await fetch(
    host +
      `/2.0/vacancies/?page=${numPage}&count=${num_vacancies}&no_agreement=1&published=1&keyword=${search}&payment_from=${salaryFrom}&payment_to=${salaryTo}&catalogues=${branch}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': x_secret_key,
        Authorization: 'Bearer ' + Cookies.get('token'),
        'X-Api-App-Id': x_api_app_id
      }
    }
  );
  const res = await data.json();
  return res.objects;
}

export function parsePayments(from, to, currency) {
  if (from > 0 && to > 0) {
    return `${from} - ${to} ${currency}`;
  } else if (from > 0 && to === 0) {
    return `от ${from} ${currency}`;
  }

  return `${to} ${currency}`;
}

export async function getVacancy(id) {
  const vacancy = await fetch(host + `/2.0/vacancies/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-secret-key': x_secret_key,
      Authorization: 'Bearer ' + Cookies.get('token'),
      'X-Api-App-Id': x_api_app_id
    }
  });

  return await vacancy.json();
}
