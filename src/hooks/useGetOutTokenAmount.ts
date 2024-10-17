import { useState, useEffect } from 'react';
import { useReadContract } from 'wagmi';
import { sharbiFunAbi, contractAddress } from '../lib/constants/sharbi-fun.abi';

export function useGetOutTokenAmount(
  tokenAddress: `0x${string}`,
  ethAmount: bigint
) {
  const [outTokenAmount, setOutTokenAmount] = useState<bigint | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    data,
    isError,
    isLoading: isContractLoading,
  } = useReadContract({
    address: contractAddress,
    abi: sharbiFunAbi,
    functionName: 'getOutTokenAmount',
    args: [tokenAddress, ethAmount],
  });

  useEffect(() => {
    if (isError) {
      setError(new Error('Failed to fetch out token amount'));
    } else if (!isContractLoading && Array.isArray(data) && data.length === 2) {
      setIsSuccess(data[0] as boolean);
      setOutTokenAmount(data[1] as bigint);
    }
    setIsLoading(isContractLoading);
  }, [data, isError, isContractLoading]);

  return { outTokenAmount, isSuccess, isLoading, error };
}
