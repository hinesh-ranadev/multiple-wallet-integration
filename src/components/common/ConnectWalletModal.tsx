import React from "react";
import { DisConnectIcon, CloseIcon } from "@/assets/icons";
import { WalletType } from "@/constants/index.types";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  wallets: WalletType[];
  onConnectWallet: (label: string) => void;
  onDisconnectWallet: (label: string) => void;
}

const ConnectWalletModal: React.FC<IProps> = ({
  isOpen,
  wallets,
  closeModal,
  onConnectWallet,
  onDisconnectWallet,
}) => {
  const handleConnectWallet = (wallet: WalletType) => {
    if (!wallet?.isConnected) {
      onConnectWallet(wallet?.label);
      closeModal();
    }
  };

  const handleDisconnectWallet = (wallet: WalletType) => {
    if (wallet?.isConnected) {
      onDisconnectWallet(wallet?.label);
      closeModal();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="header">
          <h2 className="title">Connect Wallet</h2>

          <div onClick={closeModal} className="close-button">
            <CloseIcon width={16} height={16} />
          </div>
        </div>

        <div className="wallets">
          {wallets?.map((wallet, index) => (
            <div
              key={wallet?.label + index}
              className="wallet"
              onClick={() => handleConnectWallet(wallet)}
            >
              <wallet.icon className="wallet-icon" width={32} height={32} />
              <span className="wallet-label">{wallet?.label}</span>
              {wallet?.isConnected ? (
                <button
                  className="disconnect-button"
                  onClick={() => handleDisconnectWallet(wallet)}
                >
                  <DisConnectIcon width={20} height={20} />
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
