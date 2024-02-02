import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const currentPath = location.pathname.slice(1);

        setActiveLink(currentPath || 'home');
    }, [location.pathname]);

    const handleText = (key) => {
        setActiveLink(key);
    };

    const IconWithText = ({ icon, text, to, keyName }) => {
        const isActive = keyName === activeLink;

        return (
            <Link
                to={to}
                className={`flex items-center ${
                    isActive ? 'active gap-1 text-center rounded-full py-2 px-3 flex items-center justify-center transition-transform ease-out 0.3s' : ''}`}
                style={{
                    backgroundColor: isActive ? '#594F46' : 'transparent',
                    color: isActive ? 'white' : '#594F46'
                }}
                onClick={() => handleText(keyName)}
            >
                <span className="material-icons">{icon}</span>
                <span className={isActive ? 'visible text-center' : 'hidden text-center'}>{text}</span>
            </Link>
        );
    };

    return (
        <div className="flex items-center justify-center mx-6">
            <nav className="flex justify-between items-center text-2xl font-bold bg-white rounded-full fixed bottom-10 py-1 px-2 w-11/12">
                <IconWithText to="/" icon={"home"} text="Inicio" keyName="home" />
                <IconWithText to="/menu" icon={"menu_book"} text="Menú" keyName="menu" />
                <IconWithText to="/bebidas" icon={"local_bar"} text="Bebidas" keyName="bebidas" />
                <IconWithText to="/postres" icon={"icecream"} text="Postres" keyName="postres" />
            </nav>
        </div>
    );
};
