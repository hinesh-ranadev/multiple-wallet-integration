import React from "react";
import type { WalletState } from "@web3-onboard/core/dist/types";
import { SelectedIcon } from "@/assets/icons";

interface IProps {
  wallet: WalletState;
  currentWallet: WalletState | null;
  onSelectWallet: (wallet: WalletState) => void;
}

const WalletCard: React.FC<IProps> = ({
  wallet,
  currentWallet,
  onSelectWallet,
}) => {
  const handleSelectWallet = () => {
    if (currentWallet?.label !== wallet?.label) {
      onSelectWallet(wallet);
    }
  };

  return (
    <div onClick={handleSelectWallet} className="wallet-card">
      <div
        className="icon"
        dangerouslySetInnerHTML={{ __html: wallet?.icon }}
      />
      <h2 className="label">{wallet?.label}</h2>

      {currentWallet?.label === wallet?.label && (
        <div className="selected-wallet">
          <SelectedIcon width={12} height={12} />
        </div>
      )}
    </div>
  );
};

export default WalletCard;
