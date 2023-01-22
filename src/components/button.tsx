import React from "react";

interface CProps {
  text: string;
  primary: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function Button({ text, primary, className, onClick }: CProps) {
  return (
    <button
      onClick={(e) => (onClick ? onClick(e) : () => {})}
      className={`button-all ${className} ${
        primary ? "button-all-primary" : "button-all-secondary"
      }`}
    >
      {text}
    </button>
  );
}
