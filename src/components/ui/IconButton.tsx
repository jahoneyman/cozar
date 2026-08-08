import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

const IconButton = ({
  icon,
  onClick,
  ariaLabel,
  className,
}: IconButtonProps) => {
  return (
    <button onClick={onClick} aria-label={ariaLabel} className={className}>
      {icon}
    </button>
  );
};

export default IconButton;
