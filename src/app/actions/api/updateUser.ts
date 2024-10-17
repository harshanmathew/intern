import client from './api';
import { handleFileUpload } from './fileuploader';

type UpdateUserParams = {
  username: string;
  profileImage: File | null;
};

export async function updateUser(params: UpdateUserParams) {
  try {
    let profileImage = null;
    if (params.profileImage) {
      const uploadResponse = await handleFileUpload(params.profileImage);
      if (!uploadResponse) {
        throw new Error('Image upload failed');
      }
      profileImage = uploadResponse.uploadUrl;
    }

    const userData = {
      name: params.username,
      username: params.username,
      profileImage: profileImage as string,
    };
    const { data } = await client.PATCH('/me', {
      body: userData,
    });

    return data;
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
}
