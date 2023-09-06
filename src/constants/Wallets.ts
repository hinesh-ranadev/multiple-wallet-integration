import { CoinbaseIcon, WalletConnectIcon, MetaMaskIcon, IconProps } from "../assets/icons"

export interface WalletsType {
    isConnected: boolean,
    label: string,
    icon: (props: IconProps) => React.ReactElement
}


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