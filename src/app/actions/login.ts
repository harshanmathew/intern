import client from './api';

export async function login(
  address?: string,
  message?: string,
  signature?: string,
  referralCode: string = ''
) {
  try {
    const { data } = (await client.POST('/auth/login', {
      body: {
        address,
        message,
        signature,
        referralCode,
      },
    })) as { data: { accessToken: string } };
    return data;
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
}
