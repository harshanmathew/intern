import { handleFileUpload } from './fileuploader';
import { fetchData } from './api';

interface CreateTokenParams {
  name: string;
  ticker: string;
  description: string;
  imageFile: File;
  tokenSupply: number;
  initialBuyAmount?: number;
  bondingCurve: 'beginner' | 'pro';
  twitterLink?: string;
  telegramLink?: string;
  websiteLink?: string;
  launched?: boolean;
}

export const createToken = async (params: CreateTokenParams) => {
  try {
    // First, upload the image
    const uploadResponse = await handleFileUpload(params.imageFile);
    if (!uploadResponse) {
      throw new Error('Image upload failed');
    }

    // Prepare the data for token creation
    const tokenData = {
      name: params.name,
      ticker: params.ticker,
      description: params.description,
      image: uploadResponse.uploadUrl, // Use the uploadUrl from the response
      tokenSupply: params.tokenSupply,
      initialBuyAmount: params.initialBuyAmount,
      bondingCurve: params.bondingCurve,
      twitterLink: params.twitterLink,
      telegramLink: params.telegramLink,
      websiteLink: params.websiteLink,
      launched: params.launched,
    };

    // Send the POST request to create the token using fetchData
    const response = await fetchData('tokens', 'POST', tokenData);
    return response;
  } catch (error) {
    console.error('Error creating token:', error);
    throw error;
  }
};
