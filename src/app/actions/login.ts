import client from './api';

export async function login(
  address?: string,
  message?: string,
  signature?: string,
  referralCode: string = ''
) {
  const { data, error } = await client.POST('/auth/login', {
    body: {
      address,
      message,
      signature,
      referralCode,
    },
  });
  console.log({ data });
  if (error) {
    throw new Error(error);
  }
  return data;
}
