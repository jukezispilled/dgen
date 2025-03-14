import { GameGrid } from "@/components/game/GameGrid";
import { PLATFORM_REFERRAL_FEE } from "@/constants";
import RecentPlays from "@/components/game/RecentPlays/RecentPlays";
import { toast } from "sonner";
import { useReferral } from "gamba-react-ui-v2";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
  const walletModal = useWalletModal();
  const wallet = useWallet();
  const { copyLinkToClipboard } = useReferral();

  const handleCopyInvite = () => {
    if (!wallet.publicKey) {
      return walletModal.setVisible(true);
    }
    copyLinkToClipboard();
    toast.success(
      `Copied! Share your link to earn a ${PLATFORM_REFERRAL_FEE * 100}% fee when players use this platform`,
    );
  };

  return (
    <>
      <div className="relative mx-auto flex flex-col gap-5 mt-24 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
        {/* Hero Text Section */}
        <div className="w-full flex flex-col items-center justify-center mb-10 text-center">
          <h1 className="text-5xl md:text-8xl font-bold mb-4">Instant On-Chain Gambling</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Play instantly without deposits or withdrawals. Right from your wallet, 100% on-chain, 100% provably fair
          </p>
          <button 
            onClick={handleCopyInvite}
            className="bg-[#8F6AF7] text-white font-bold py-3 px-6 rounded-full md:hover:scale-[103%] transition ease-in-out duration-150"
          >
            Invite Friends & Earn
          </button>
        </div>

        <GameGrid />

      </div>
      <a href="https://x.com/gambledgen" className="text-white absolute bottom-4 right-4 underline bg-[#8F6AF7] px-3 py-1.5 rounded-full">
        follow us on X
      </a>
    </>
  );
}