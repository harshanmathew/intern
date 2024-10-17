import { useState, useEffect } from "react";
import { useReadContracts } from "wagmi";

const ERC20_ABI = [
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [{ name: "", type: "string" }],
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "symbol",
		outputs: [{ name: "", type: "string" }],
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "decimals",
		outputs: [{ name: "", type: "uint8" }],
		type: "function",
	},
];

export function useTokenInfo(contractAddress: `0x${string}`) {
	const [tokenInfo, setTokenInfo] = useState<{
		name: string;
		symbol: string;
		decimals: number;
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
				abi: ERC20_ABI,
				functionName: "name",
			},
			{
				address: contractAddress,
				abi: ERC20_ABI,
				functionName: "symbol",
			},
			{
				address: contractAddress,
				abi: ERC20_ABI,
				functionName: "decimals",
			},
		],
	});

	useEffect(() => {
		if (isError) {
			setError(new Error("Failed to fetch token info"));
		} else if (!isContractLoading && data) {
			setTokenInfo({
				name: data[0].result as string,
				symbol: data[1].result as string,
				decimals: data[2].result as number,
			});
		}
		setIsLoading(isContractLoading);
	}, [data, isError, isContractLoading]);

	return { tokenInfo, isLoading, error };
}
