import { Outlet } from "react-router-dom";
import { Rocket } from 'lucide-react';

const links = [
  { text: "A propos", href: "#" },
  { text: "Accessibilité", href: "#" },
  { text: "Accord d'utilisation", href: "#" },
  { text: "Politique de confidentialité", href: "#" },
  { text: "Politique en matière de cookies", href: "#" },
  { text: "Politique en matière de droits d'auteur", href: "#" },
  { text: "Politique de marque", href: "#" },
  { text: "Contrôle des visiteurs", href: "#" },
  { text: "Directives communautaires", href: "#" },
];

export const AuthLayout = () => {
  return (
    <>
      <header className="py-2.5 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold">StartUpHub</span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="py-2.5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 text-xs text-[#00000099] flex-wrap justify-center">
            <span className="flex items-center gap-1">
              <span className="font-bold">StartUpHub</span>
              <span>© {new Date().getFullYear()}</span>
            </span>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-indigo-500 hover:underline"
              >
                {link.text}
              </a>
            ))}
            <button className="hover:text-indigo-500 hover:underline">
              Language
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};