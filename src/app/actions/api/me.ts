import apiClient from './api';

export async function me() {
  try {
    const { data } = (await apiClient.GET('/me')) as {
      data: {
        name: 'string';
        username: 'string';
        address: 'string';
        profileImage: 'string';
      };
    };

    console.log({ data });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
