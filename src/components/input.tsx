interface CProps {
  placeholder: string;
  type: string;
  className?: string;
}
export default function Input({ placeholder, type, className }: CProps) {
  return (
    <input
      className={`input-all ${className}`}
      placeholder={placeholder}
      type={type}
    />
  );
}
