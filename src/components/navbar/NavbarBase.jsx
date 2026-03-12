export const NavbarBase = ({ children }) => {
  return (
    <header className="sticky top-0 left-0 right-0 w-full bg-white z-40 border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 bg-white">
        <nav className="flex items-center justify-between h-16 w-full">
          {children}
          <h1 className="text-xl font-bold tracking-tight">BUFONIO</h1>
        </nav>
      </div>
    </header>
  );
};
