export interface WalletButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const WalletButton: React.FC<WalletButtonProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="flex flex-col items-center outline-none">
      <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mb-2">
        {icon}
      </div>
      <span>{label}</span>
    </button>
  );
};
