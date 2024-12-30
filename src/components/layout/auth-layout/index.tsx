import {Outlet} from "react-router-dom";
import Logo from "@/assets/logos/startupHub_logo_prototype.png";

const links = [
    { text : "A propos" , href : "#" },
    { text : "Accessibilité" , href : "#" },
    { text : "Accord d'utilisation" , href : "#" },
    { text : "Politique de confidentialité" , href : "#" },
    { text : "Politique en matière de cookies" , href : "#" },
    { text : "Politique en matière de droits d'auteur" , href : "#" },
    { text : "Politique de marque", href : "#" },
    { text : "Contrôle des visiteurs" , href : "#" },
    { text : "Directives communautaires" , href : "#" },
] ;

export const AuthLayout = () => {
    return (
        <>
            <header className="py-2.5 px-2">
                <div className="max-w-7xl mx-auto">

                <img src={Logo} alt="StartUpHub Logo" className="h-12" />
                </div>
            </header>

            <main className="flex-grow">
                <Outlet/>
            </main>

            <footer className="py-2.5 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 text-xs text-[#00000099] flex-wrap justify-center">
                    <span className="flex items-center gap-1">
                        <span className="font-bold">MyStartUpHub</span>
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