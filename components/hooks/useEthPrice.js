import useSWR from 'swr';

const URL =
  'https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const useEthPrice = () => {
  //Note - Identifier (first param in the useSWR) "URL" can be retrieved in the params of the function
  const swrRes = useSWR(URL, fetcher);

  return { ...swrRes };
};
