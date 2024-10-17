import { sharbiFunAbi, contractAddress } from '@/lib/constants/sharbi-fun.abi';
import { useState, useCallback, useEffect } from 'react';
import {
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';

type LaunchData = {
  name: string;
  symbol: string;
  totalSupply: bigint;
  curveSize: number;
  makeDonation: boolean;
  initialBuy: bigint;
};

export function useLaunchToken(launchData: LaunchData) {
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
    functionName: 'launch',
    args: [
      launchData.name,
      launchData.symbol,
      launchData.totalSupply,
      launchData.curveSize,
      launchData.makeDonation,
    ],
    value: launchData.initialBuy,
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
      confirmations: 2,
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
      launchData
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
    launchData,
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
      launchData
    ) {
      execute();
    }
  }, [
    isSimulateSuccess,
    isSimulateLoading,
    simulateData,
    isLoading,
    launchData,
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
