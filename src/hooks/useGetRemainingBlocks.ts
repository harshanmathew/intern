import { useState, useEffect } from 'react';
import { useReadContract } from 'wagmi';
import { sharbiFunAbi, contractAddress } from '../lib/constants/sharbi-fun.abi';

export function useGetRemainingBlocks(tokenAddress: `0x${string}`) {
  const [remainingBlocks, setRemainingBlocks] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    data,
    isError,
    isLoading: isContractLoading,
  } = useReadContract({
    address: contractAddress,
    abi: sharbiFunAbi,
    functionName: 'getRemainingBlocks',
    args: [tokenAddress],
  });

  useEffect(() => {
    if (isError) {
      setError(new Error('Failed to fetch remaining blocks'));
    } else if (!isContractLoading) {
      setRemainingBlocks(Number(data));
    }
    setIsLoading(isContractLoading);
  }, [data, isError, isContractLoading]);

  return { remainingBlocks, isLoading, error };
}
