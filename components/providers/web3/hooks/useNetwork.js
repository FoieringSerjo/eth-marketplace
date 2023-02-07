import { useEffect } from 'react';
import useSWR from 'swr';

const NETWORKS = {
  1: 'Ethereum Main Network',
  5: 'Ethereum Goerli Network',
  56: 'Binance Smart Chain',
  11155111: 'Ethereum Sepolia Network',
};

export const handler = (web3, provider) => () => {
  const { mutate, ...restSWRResponse } = useSWR(
    () => (web3 ? 'web3/network' : null),
    async () => {
      const chainId = await web3.eth.getChainId();
      return NETWORKS[chainId];
    }
  );

  useEffect(() => {
    provider &&
      provider.on('chainChanged', (chainId) => {
        mutate(NETWORKS[parseInt(chainId, 16)]);
      });
  }, [web3]);

  return {
    network: {
      mutate,
      ...restSWRResponse,
    },
  };
};