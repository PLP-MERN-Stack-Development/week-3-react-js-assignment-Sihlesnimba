const baseStyles = "px-4 py-2 rounded font-semibold transition-transform duration-200 hover:scale-105";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
