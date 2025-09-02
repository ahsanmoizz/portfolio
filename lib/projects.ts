import { link } from "fs";

const projects = [
  {
    title: "Daily Dexora",
    img: "/images/dexora.png",
    link: "https://github.com/ahsanmoizz/daily-dexora",
    description:
      "Gasless transaction infrastructure for EVM-based chains. Includes smart wallet abstraction (EIP-4337), bundler, paymaster, Stripe billing, Redis-backed API keys, developer dashboard, and full admin panel.",
  },
  {
    title: "chainflux",
    img: "/images/chainflux.png",
    link: "https://github.com/ahsanmoizz/chainflux",
    description:
      "Deterministic multi-chain wallet infrastructure supporting 30+ networks. Features HD wallets, unified API, Stripe-based quotas, webhook support, and a developer-friendly dashboard.",
  },
  {
    title: "VaultX",
    img: "/images/vaultx.png",
    link: "https://github.com/ahsanmoizz/vaultx",
    description:
      "Next-generation multisig wallet with AI-powered transaction auditing, analytics dashboard, role-based access, biometric verification, and collaborative signing workflows for EVM chains.",
  },
  {
    title: "ChatPay",
    img: "/images/chat-payment.png",
    link: "https://github.com/ahsanmoizz/chatpay",
    description:
      "Hybrid Web2 + Web3 platform combining secure real-time chat with crypto payments. Built with Web3Auth, smart contract wallets, biometric login, multi-chain support, and modular backend services.",
  },
  {
    title: "Winfinity",
    img: "/images/winfinity.png",
    link: "https://github.com/ahsanmoizz/Winfinity",
    description:
      "Decentralized lottery dApp using Chainlink VRF for secure randomness. Includes React + Tailwind frontend, Solidity contracts, prize pool management, participant tracking, and wallet integration.",
  },
  {
    title: "StakeForge",
    img: "/images/stakeforge.png",
    link: "https://github.com/ahsanmoizz/StakeForge",
    description:
      "Token staking platform with flexible lock durations, automated rewards, early withdrawal penalties, and admin controls. Built with Solidity, Truffle, React, and OpenZeppelin libraries.",
  },
  {
    title: "CryptoHammer",
    img: "/images/cryptohammer.png",
    link: "https://github.com/ahsanmoizz/CryptoHammer",
    description:
      "Decentralized auction platform for ETH-based bidding. Features safe refunds, reentrancy protection, event logging, and a React frontend with wallet connection and real-time bidding.",
  },
  {
    title: "Smart Contracts Collection",
    img: "/images/contracts.png",
    link: "https://github.com/ahsanmoizz/smart-contracts",
    description:
      "Comprehensive collection of Solidity and Rust contracts. Includes ERC20 tokens, staking, escrow, referral, DAO governance, cross-chain identity, NFT marketplace, and lending/borrowing systems.",
  },
  {
    title: "15+ Other Projects",
    img: "/images/more-projects.png",
    link: "#",
    description:
      "Additional projects covering areas such as social media platforms, crowdfunding dApps, DeFi protocols, NFT utilities, and blockchain infrastructure tooling — showcasing broad technical expertise.",
  },
];

export default projects;
