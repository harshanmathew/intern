import { uploadFile } from './api';

export const handleFileUpload = async (file: File) => {
  try {
    const response = await uploadFile(file);
    return response;
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};
