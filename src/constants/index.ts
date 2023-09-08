import { CoinbaseIcon, WalletConnectIcon, MetaMaskIcon } from "../assets/icons"

export const defaultWallets = [
    {
        isConnected: false,
        label: "MetaMask",
        icon: MetaMaskIcon
    },
    {
        isConnected: false,
        label: "Coinbase Wallet",
        icon: CoinbaseIcon
    },
    {
        isConnected: false,
        label: "WalletConnect",
        icon: WalletConnectIcon
    },
]