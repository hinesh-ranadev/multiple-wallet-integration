import { IconProps } from "@/assets/icons";

export interface WalletType {
    isConnected: boolean,
    label: string,
    icon: (props: IconProps) => React.ReactElement
}