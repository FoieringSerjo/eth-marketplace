import { useEffect } from 'react';
import useSWR from 'swr';

const adminAddresses = {
  '0x92861262cdf9718dfb3f108915fb073289bd649e25153329c6f9e44140cf4b7b': true,
};

export const handler = (web3, provider) => () => {
  //* Used before SWR library
  // const [account, setAccount] = useState(null);

  const { data, mutate, ...restSWRResponse } = useSWR(
    () => (web3 ? 'web3/accounts' : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  //* Used before SWR library
  // useEffect(() => {
  //   const getAccount = async () => {
  //     const accounts = await web3.eth.getAccounts();
  //     setAccount(accounts[0]);
  //   };

  //   web3 && getAccount();
  // }, [web3]);

  useEffect(() => {
    provider &&
      provider.on('accountsChanged', (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...restSWRResponse,
  };
};
