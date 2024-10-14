import { fetchData } from './api';

export async function login(
  address?: string,
  message?: string,
  signature?: string,
  referralCode: string = ''
) {
  try {
    const response = await fetchData('/auth/login', 'POST', {
      address,
      message,
      signature,
      referralCode,
    });

    console.log({ response });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
