export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-16 h-16">
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-r-blue-500 animate-spin"></div>

        {/* Inner gradient circle for extra effect */}
        <div className="absolute inset-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
}
