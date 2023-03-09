import useSWR from 'swr';

const URL =
  'https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

export const COURSE_PRICE = 15;

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  console.log('Refetching Price');
  return json.market_data.current_price.usd ?? null;
};

export const useEthPrice = () => {
  //Note - Identifier (first param in the useSWR) "URL" can be retrieved in the params of the function
  const { data, ...rest } = useSWR(URL, fetcher, {
    refreshInterval: 10000,
  });

  //Note - wrapped into number because the data will be string.
  const perItem =
    (data && (COURSE_PRICE / Number(data)).toFixed(5)) ?? null;

  return { eth: { data, perItem, ...rest } };
};
