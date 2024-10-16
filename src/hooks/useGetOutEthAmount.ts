import { useState, useEffect } from 'react';
import { useReadContract } from 'wagmi';
import { sharbiFunAbi, contractAddress } from '../lib/constants/sharbi-fun.abi';

export function useGetOutEthAmount(
  tokenAddress: `0x${string}`,
  tokenAmount: bigint
) {
  const [outEthAmount, setOutEthAmount] = useState<bigint | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    data,
    isError,
    isLoading: isContractLoading,
  } = useReadContract({
    address: contractAddress,
    abi: sharbiFunAbi,
    functionName: 'getOutEthAmount',
    args: [tokenAddress, tokenAmount],
  });

  useEffect(() => {
    if (isError) {
      setError(new Error('Failed to fetch out ETH amount'));
    } else if (!isContractLoading) {
      setOutEthAmount(data as bigint);
    }
    setIsLoading(isContractLoading);
  }, [data, isError, isContractLoading]);

  return { outEthAmount, isLoading, error };
}
