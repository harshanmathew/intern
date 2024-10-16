import { useState, useEffect, useCallback } from 'react';
import {
  useSimulateContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { sharbiFunAbi, contractAddress } from '@/lib/constants/sharbi-fun.abi';

type SwapAndBuyData = {
  funTokenAddress: `0x${string}`;
  paymentToken: `0x${string}`;
  amountIn: bigint;
  minBoneOut: bigint;
  minFunTokenOut: bigint;
};

export function useSwapAndBuy(swapData: SwapAndBuyData) {
  const [isSimulateLoading, setIsSimulateLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hash, setHash] = useState<`0x${string}` | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const {
    data: simulateData,
    error: simulateError,
    isSuccess: isSimulateSuccess,
    status: simulateStatus,
  } = useSimulateContract({
    address: contractAddress,
    abi: sharbiFunAbi,
    functionName: 'swapAndBuy',
    args: [
      swapData.funTokenAddress,
      swapData.paymentToken,
      swapData.amountIn,
      swapData.minBoneOut,
      swapData.minFunTokenOut,
    ],
    value: swapData.amountIn, // If the function requires ETH
  });

  const {
    data: dataHash,
    writeContractAsync,
    error: writeError,
    status: writeStatus,
    isIdle: isWriteIdle,
    reset,
  } = useWriteContract();

  const { status: waitForTransactionStatus, error: transactionError } =
    useWaitForTransactionReceipt({
      confirmations: 5,
      hash: dataHash,
    });

  useEffect(() => {
    if (dataHash && waitForTransactionStatus === 'pending') {
      setIsLoading(true);
      setHash(dataHash);
    } else if (waitForTransactionStatus === 'success') {
      setIsSuccess(true);
      setIsLoading(false);
      reset();
    } else if (
      waitForTransactionStatus === 'error' ||
      writeStatus === 'error'
    ) {
      setIsLoading(false);
      setError(writeError ?? transactionError);
      reset();
    } else if (writeStatus === 'idle' && !isLoading) {
      setIsLoading(false);
      reset();
    }

    setIsSimulateLoading(simulateStatus === 'pending');
  }, [
    waitForTransactionStatus,
    simulateStatus,
    transactionError,
    writeStatus,
    dataHash,
    isLoading,
    writeError,
    reset,
  ]);

  const execute = useCallback(async () => {
    setIsLoading(true);
    if (
      isSimulateSuccess &&
      !isSimulateLoading &&
      simulateData &&
      isLoading &&
      isWriteIdle &&
      swapData
    ) {
      try {
        await writeContractAsync(simulateData.request);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    }
  }, [
    isSimulateSuccess,
    swapData,
    isLoading,
    isWriteIdle,
    isSimulateLoading,
    simulateData,
    writeContractAsync,
  ]);

  useEffect(() => {
    if (
      isSimulateSuccess &&
      !isSimulateLoading &&
      simulateData &&
      isLoading &&
      isWriteIdle &&
      swapData
    ) {
      execute();
    }
  }, [
    isSimulateSuccess,
    isSimulateLoading,
    simulateData,
    isLoading,
    swapData,
    isWriteIdle,
    execute,
  ]);

  return {
    isLoading,
    isSuccess,
    isSimulateSuccess,
    simulateError,
    error,
    hash,
    reset,
    execute,
  };
}
