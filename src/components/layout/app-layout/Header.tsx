import {Link, NavLink} from 'react-router-dom';
import {LogOut, Search, User} from 'lucide-react';
import {useAuth} from '@/lib/auth/AuthContext';
import {Button} from '@/components/common/Button';
import StartUpHubLogo from '@/assets/logos/startupHub_logo_final.png';

export function Header() {
    const {user, signOut} = useAuth();

    const navigations = [
        {name: 'Accueil', href: '/'},
        {name: 'Découvrir les startups', href: '/startups'},
        {name: 'Investisseurs', href: '/investors'},
        {name: 'Devenir une startup', href: '/register-startup'},
        {name: 'A propos', href: '/about'},
    ]

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
    };

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <Link to="/" className="flex items-center">
                        <img src={StartUpHubLogo} alt="StartUpHub Logo" className='h-12 flex-none'/>
                    </Link>

                    <nav className="hidden md:flex md:space-x-2.5 lg:space-x-8">
                        {navigations.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({isActive}) =>
                                    `inline-flex items-center text-sm font-medium ${
                                        isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
                                    }`
                                }>
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <button type="button" className="relative p-1 text-gray-400 hover:text-gray-500">
                                <Search className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="ml-4">
                            {user ? (
                                <div className="flex items-center space-x-4">
                                    <Link to="/dashboard" className="flex items-center text-gray-700">
                                        <User className="h-5 w-5 mr-2"/>
                                        Mon compte
                                    </Link>
                                    <Button
                                        variant="outline"
                                        onClick={handleSignOut}
                                        className="flex items-center"
                                    >
                                        <LogOut className="h-4 w-4 mr-2"/>
                                        Déconnexion
                                    </Button>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    <User className="h-4 w-4 mr-2"/>
                                    Connexion
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}