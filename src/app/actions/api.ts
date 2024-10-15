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

export const uploadFile = async (file: File) => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('files', file);

  try {
    return (await ofetch('/uploads/file', {
      method: 'POST',
      // biome-ignore lint/style/useNamingConvention: <explanation>
      // eslint-disable-next-line dot-notation
      baseURL: `${process.env['NEXT_PUBLIC_API_URL']}/`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: formData,
    })) as {
      fileKey: string;
      uploadUrl: string;
    };
  } catch (error: any) {
    console.error(error);
    throw new Error(error.data?.message || 'File upload failed');
  }
};
