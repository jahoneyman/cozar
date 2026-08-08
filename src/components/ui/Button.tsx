import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  variant?: "filled" | "outlined";
  color?: "primary" | "offwhite" | "white"; //TODO: Add more colors, preferably make this global maybe
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  label = "Label",
  variant = "filled",
  color = "primary",
  disabled = false,
  icon,
  onClick,
  className,
}: ButtonProps) => {
  const btnColor = {
    primary: "bg-primary-400 text-neutral-white hover:bg-primary-500",
    offwhite: "bg-neutral-offwhite text-primary-400 hover:bg-neutral-white",
    white: "bg-neutral-white text-primary-400 hover:bg-neutral-light",
  };
  const outlineColor = {
    primary: "border-primary-400 text-neutral-white hover:border-primary-500",
    offwhite:
      "border-neutral-offwhite text-neutral-offwhite hover:border-neutral-white",
    white: "border-neutral-white text-neutral-white hover:border-neutral-light",
  };

  return (
    <button
      className={clsx(
        "flex items-center gap-2 px-6 py-4 font-display font-semibold text-[18px] leading-6 transition-colors",
        variant === "filled" && btnColor[color],
        variant === "outlined" && "border " + outlineColor[color],
        disabled &&
          "bg-neutral-light text-neutral-gray cursor-not-allowed pointer-events-none",
        className,
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
