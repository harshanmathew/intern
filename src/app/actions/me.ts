import { fetchData } from './api';

export async function me() {
  try {
    const response = await fetchData('/me');

    console.log({ response });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
