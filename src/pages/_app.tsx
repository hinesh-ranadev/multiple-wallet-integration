import "@/styles/globals.css";
import coinbaseModule from "@web3-onboard/coinbase";
import injectedModule from "@web3-onboard/injected-wallets";
import { Web3OnboardProvider, init } from "@web3-onboard/react";
import walletConnectModule from "@web3-onboard/walletconnect";
import type { AppProps } from "next/app";
import "../styles/sass/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY || "";
  const WALLET_CONNECT_PROJECT_KEY =
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_KEY || "";

  const chains = [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    },
    {
      id: "0x5",
      token: "ETH",
      label: "Goerli",
      rpcUrl: `https://goerli.infura.io/v3/${INFURA_KEY}`,
    },
  ];

  // wallet connect init
  const wcV2InitOptions = {
    projectId: WALLET_CONNECT_PROJECT_KEY,
    requiredChains: [1, 5],
  };

  const walletConnect = walletConnectModule(wcV2InitOptions);
  const coinbase = coinbaseModule();
  const injected = injectedModule();

  const wallets = [injected, coinbase, walletConnect];

  const appMetadata = {
    name: "Connect Wallet",
    icon: "<svg>My App Icon</svg>",
    description: "Example showcasing how to connect a wallet.",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
  };

  const theme = "light";

  const web3Onboard = init({
    wallets,
    chains,
    appMetadata,
    theme,
  });

  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Component {...pageProps} />
    </Web3OnboardProvider>
  );
}
