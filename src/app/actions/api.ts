import { ofetch } from 'ofetch';
import type { paths } from '@/types/schema';
import createClient, { type Middleware } from 'openapi-fetch';

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

const myMiddleware: Middleware = {
  async onRequest({ request }) {
    const token = localStorage.getItem('token');
    request.headers.set('Authorization', `Bearer ${token}`);
    request.headers.set('Content-Type', 'application/json');
    return request;
  },
};

const apiClient = createClient<paths>({
  // eslint-disable-next-line dot-notation
  baseUrl: `${process.env['NEXT_PUBLIC_API_URL']}/`,
});

// register middleware
apiClient.use(myMiddleware);

export default apiClient;
