import apiClient from './api';

export async function me() {
  try {
    const { data } = (await apiClient.GET('/me')) as {
      data: { address: string };
    };

    console.log({ data });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
