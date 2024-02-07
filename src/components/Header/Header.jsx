import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  let title;

  if (currentPath.includes("/home/promociones")) {
    title = "Promociones";
  } else if (currentPath.includes("/home/recomendados")) {
    title = "Recomendados";
  } else if (currentPath.includes("/menu")) {
    title = "Menú";
  } else if (currentPath.includes("/postres")) {
    title = "Postres";
  } else if (currentPath.includes("/bebidas")) {
    title = "Bebidas";
  }

  return (
    <div className="flex items-center justify-between pb-5 h-20vh">
      <div className="text-white text-3xl">{title}</div>
     <div className="w-20"><img src="/public/restaurantLogo.png"/></div>
    </div>
  );
};
