import { Link, useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActivePromociones = currentPath.includes("/home/promociones");
  const isActiveRecomendados = currentPath.includes("/home/recomendados");

  const activeClasses = (isActive) => `flex-grow text-center ${isActive ? 'bg-white text-customColor1 py-6 px-4 rounded-3xl transition-transform ease-out 0.3s' : 'text-white py-6 mx-4'}`;

  return (
    <div className="h-80vh">
      <div className="flex items-center max-w-full rounded-3xl bg-customColor1 font-black text-xl">
        <Link to="/home/promociones" className={activeClasses(isActivePromociones)}>
          Promociones
        </Link>
        <Link to="/home/recomendados" className={activeClasses(isActiveRecomendados)}>
          Recomendados
        </Link>
      </div>
    </div>
  );
};
