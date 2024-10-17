import { useState, useEffect, useCallback } from 'react';
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useSimulateContract,
} from 'wagmi';
import { sharbiFunAbi, contractAddress } from '../lib/constants/sharbi-fun.abi';

type SellData = {
  tokenAddress: `0x${string}`;
  amountIn: bigint;
  amountOutMin: bigint;
};

export function useSell(sellData: SellData) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hash, setHash] = useState<`0x${string}` | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const {
    data: simulateData,
    error: simulateError,
    isSuccess: isSimulateSuccess,
  } = useSimulateContract({
    address: contractAddress,
    abi: sharbiFunAbi,
    functionName: 'sell',
    args: [sellData.tokenAddress, sellData.amountIn, sellData.amountOutMin],
  });

  const {
    writeContract,
    data: writeData,
    error: writeError,
    isPending: isWritePending,
  } = useWriteContract();

  const {
    isLoading: isWaitLoading,
    isSuccess: isWaitSuccess,
    error: waitError,
  } = useWaitForTransactionReceipt({
    hash: writeData,
  });

  useEffect(() => {
    if (isWritePending || isWaitLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    if (isWaitSuccess) {
      setIsSuccess(true);
    }

    if (writeData) {
      setHash(writeData);
    }

    setError(simulateError || writeError || waitError || null);
  }, [
    isWritePending,
    isWaitLoading,
    isWaitSuccess,
    writeData,
    simulateError,
    writeError,
    waitError,
  ]);

  const execute = useCallback(async () => {
    if (isSimulateSuccess && simulateData) {
      try {
        await writeContract(simulateData.request);
      } catch (err) {
        setError(err as Error);
      }
    }
  }, [isSimulateSuccess, simulateData, writeContract]);

  return {
    isLoading,
    isSuccess,
    error,
    hash,
    execute,
  };
}
