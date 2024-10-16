import { useState, useEffect } from 'react';
import { useReadContracts } from 'wagmi';
import { sharbiFunAbi, contractAddress } from '../lib/constants/sharbi-fun.abi';

export function useGetSharbiFunData() {
  const [sharbiFunData, setSharbiFunData] = useState<{
    graduateFeeRate: bigint;
    feeTo: `0x${string}`;
    donationRate: bigint;
    thresholdPercentage: bigint;
    maxTotalSupply: bigint;
    bondingCurveDuration: bigint;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    data,
    isError,
    isLoading: isContractLoading,
  } = useReadContracts({
    contracts: [
      {
        address: contractAddress,
        abi: sharbiFunAbi,
        functionName: 'graduateFeeRate',
      },
      {
        address: contractAddress,
        abi: sharbiFunAbi,
        functionName: 'feeTo',
      },
      {
        address: contractAddress,
        abi: sharbiFunAbi,
        functionName: 'donationRate',
      },
      {
        address: contractAddress,
        abi: sharbiFunAbi,
        functionName: 'THRESHOLD_PERCENTAGE',
      },
      {
        address: contractAddress,
        abi: sharbiFunAbi,
        functionName: 'MAX_TOTAL_SUPPLY',
      },
      {
        address: contractAddress,
        abi: sharbiFunAbi,
        functionName: 'BONDING_CURVE_DURATION',
      },
    ],
  });

  useEffect(() => {
    if (isError) {
      setError(new Error('Failed to fetch SharbiFun data'));
    } else if (!isContractLoading && data) {
      setSharbiFunData({
        graduateFeeRate: data[0].result as bigint,
        feeTo: data[1].result as `0x${string}`,
        donationRate: data[2].result as bigint,
        thresholdPercentage: data[3].result as bigint,
        maxTotalSupply: data[4].result as bigint,
        bondingCurveDuration: data[5].result as bigint,
      });
    }
    setIsLoading(isContractLoading);
  }, [data, isError, isContractLoading]);

  return { sharbiFunData, isLoading, error };
}
