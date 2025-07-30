

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-menubox-cyan-light/20 via-background to-menubox-gray-light/30 p-4">
      {children}
    </div>
  );
}