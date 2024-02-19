import { useParams } from "react-router-dom";
import { withItemData } from "./withItemData.jsx";

export const ItemDetail = withItemData(({ loading, itemData }) => {
    const { id } = useParams()
    const item = itemData.find((item) => item.id === id)

    if (loading) return <div className="loader">loading...</div>

    const includesText = item.guarniciones && item.guarniciones.length > 0 ? "Incluye guarnición" : (item.salsas && item.salsas.length > 0 ? "Incluye salsa" : "");

    const SectionWithItems = ({ title, items, imageProperty, titleProperty }) => (
        <div>
            <h2 className="text-center text-4xl my-5">{title}</h2>
            <div className="flex overflow-x-scroll scroll scroll-smooth">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-none w-5/12 bg-customColor1 p-3 m-4 gap-2">
                        <img src={item[imageProperty]} alt={item[titleProperty]} className="w-full h-24 object-cover" />
                        <p className="text-center m-0">{item[titleProperty]}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (

        <div key={item.id} className="text-white mt-2">

            <div className="flex flex-col items-center justify-between w-full gap-2 bg-customColor1 p-3">
                <img src={item.image} alt={item.tile} className="w-full h-52 object-cover" />
                <p className="text-2xl">{item.title}</p>
                <p className="text-sm">{item.description}</p>
                <p className="ml-auto text-lg">${item.price}</p>
                {includesText && <p className="ml-auto text-sm">{includesText}</p>}
            </div>

            {item.guarniciones && item.guarniciones.length > 0 && (
                <SectionWithItems title="Guarniciones" items={item.guarniciones} imageProperty="image_guarnicion" titleProperty="title_guarnicion" />
            )}

            {item.salsas && item.salsas.length > 0 && (
                <SectionWithItems title="Salsas" items={item.salsas} imageProperty="image_salsas" titleProperty="title_salsas" />
            )}



        </div>
    )
})