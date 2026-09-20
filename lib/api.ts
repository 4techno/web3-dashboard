const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';

export interface TokenPrice {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export async function fetchTokenPrices(ids: string[]): Promise<TokenPrice[]> {
  const url = `${COINGECKO_BASE}/coins/markets?vs_currency=usd&ids=${ids.join(',')}&order=market_cap_desc&sparkline=false`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`CoinGecko API error: ${res.status}`);
  return res.json();
}

export async function fetchWalletBalance(address: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY ?? '';
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 30 } });
  if (!res.ok) throw new Error(`Etherscan API error: ${res.status}`);
  const data = await res.json();
  const weiBalance = BigInt(data.result);
  return (Number(weiBalance) / 1e18).toFixed(6);
}
