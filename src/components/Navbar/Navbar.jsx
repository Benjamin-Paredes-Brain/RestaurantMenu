import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const currentPath = location.pathname;
        setActiveLink(currentPath.startsWith('/home') ? 'home' : currentPath.slice(1) || 'home');
    }, [location.pathname]);

    const handleText = (key) => {
        setActiveLink(key);
    };

    const IconWithText = ({ icon, text, to, keyName }) => {
        const isActive = keyName === activeLink;

        return (
            <Link
                to={to}
                className={`flex items-center ${isActive ? 'bg-customColor1 text-white gap-2 rounded-full py-2 px-3 flex items-center justify-center transition-transform ease-out 0.3s' : 'text-customColor1'}`}
                onClick={() => handleText(keyName)}
            >
                <span className="material-icons">{icon}</span>
                <span className={isActive ? 'visible text-center mt-2' : 'hidden'}>{text}</span>
            </Link>
        );
    };

    return (
        <div className='h-20'>
            <div className='fixed bottom-0 left-0 right-0 bg-customColor2 pb-6'>
                <nav className="flex items-center justify-between font-bold text-xl  bg-white mx-5 rounded-full p-1">
                    <IconWithText to="/home" icon={"home"} text="Inicio" keyName="home" />
                    <IconWithText to="/menu" icon={"menu_book"} text="Menú" keyName="menu" />
                    <IconWithText to="/bebidas" icon={"local_bar"} text="Bebidas" keyName="bebidas" />
                    <IconWithText to="/postres" icon={"icecream"} text="Postres" keyName="postres" />
                </nav>
            </div>
        </div>
    );
};

