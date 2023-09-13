import { MutableRefObject } from "react";

export { MetaMaskIcon } from './MetaMask.icon';
export { CoinbaseIcon } from './CoinbaseWallet.icon';
export { WalletConnectIcon } from './WalletConnect.icon';
export { CloseIcon } from './Close.icon';
export { DisConnectIcon } from './DisConnect.icon';
export { SelectedIcon } from './Selected.icon'

export interface IconProps {
    onClick?: any;
    className?: string;
    style?: React.CSSProperties;
    fRef?: MutableRefObject<SVGSVGElement | null>;
    active?: boolean;
    [key: string]: any
}