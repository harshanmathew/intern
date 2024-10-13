import { ofetch } from 'ofetch';

export const fetchData = async (
  url: string,
  method = 'GET',
  body: any = null
) => {
  const token = localStorage.getItem('token');
  try {
    return await ofetch(url, {
      method,
      // biome-ignore lint/style/useNamingConvention: <explanation>
      // eslint-disable-next-line dot-notation
      baseURL: `${process.env['NEXT_PUBLIC_API_URL']}/`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body,
      parseResponse: JSON.parse,
    });
  } catch (error: any) {
    console.error(error);
    throw new Error(error.data.message);
  }
};
