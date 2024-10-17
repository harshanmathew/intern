import client from './api';
import { handleFileUpload } from './fileuploader';

type UpdateUserParams = {
  username: string;
  profileImage: File;
};

export async function updateUser(params: UpdateUserParams) {
  try {
    // First, upload the image
    const uploadResponse = await handleFileUpload(params.profileImage);
    if (!uploadResponse) {
      throw new Error('Image upload failed');
    }
    const userData = {
      name: params.username,
      username: params.username,
      profileImage: uploadResponse.uploadUrl,
    };
    const { data } = await client.PATCH('/me', {
      body: userData,
    });

    return data;
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
}
