export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 dark:bg-gray-800 transition-all duration-300 animate-fade-in ${className}`}>
      {children}
    </div>
  );
}
