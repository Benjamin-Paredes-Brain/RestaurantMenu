import { useLocation, Link } from "react-router-dom";

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

  const handleGoBack = () => {
    window.history.back();
  };

  const isInItem = currentPath.split("/")[2] === "item";

  return (
    <div className="h-20">
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between bg-customColor2 p-5 pb-0">
        {isInItem ?
            <span onClick={handleGoBack} className="material-icons cursor-pointer text-white">keyboard_backspace</span>
          : null}
        <div className="text-white text-3xl">{title}</div>
        <div className="w-20">
          <img src="/restaurantLogo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};
