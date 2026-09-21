# Web3 Dashboard

A real-time analytics dashboard for monitoring crypto wallets, DeFi protocol health, and on-chain token prices. Built with Next.js 14, Tailwind CSS, and the CoinGecko and Etherscan public APIs.

## Features

- **Live Token Prices**: Real-time price feeds for ETH, BTC, BNB, SOL, and custom ERC-20 tokens.
- **Wallet Portfolio Tracker**: Input any public Ethereum address to inspect token balances and transaction history.
- **DeFi Protocol Health**: Monitor TVL (Total Value Locked) trends across Uniswap, Aave, and Compound.
- **Historical Price Charts**: Interactive candlestick and line charts powered by lightweight-charts.

## Architecture

```
User Browser
     │
     ▼
[ Next.js 14 App Router ]
     ├── /dashboard          — Portfolio overview and market stats
     ├── /wallet/[address]   — On-chain wallet inspection
     └── /api/prices         — CoinGecko API proxy (server-side, rate-limited)
     │
     ├── CoinGecko Public API   (price feeds)
     └── Etherscan Public API   (wallet transactions)
```

## Quick Start

```bash
git clone https://github.com/4techno/web3-dashboard.git
cd web3-dashboard
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

```env
NEXT_PUBLIC_ETHERSCAN_API_KEY=your_etherscan_key
NEXT_PUBLIC_COINGECKO_API_KEY=your_coingecko_key
```

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, shadcn/ui
- **Charts**: lightweight-charts
- **APIs**: CoinGecko, Etherscan

## License

MIT License.
