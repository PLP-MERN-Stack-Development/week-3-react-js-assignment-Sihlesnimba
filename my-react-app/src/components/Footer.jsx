export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-8 text-sm text-gray-600 dark:text-gray-300 animate-fade-in">
      © {new Date().getFullYear()} TaskApp. All rights reserved.
    </footer>
  );
}
