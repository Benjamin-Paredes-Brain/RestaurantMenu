import { useParams } from "react-router-dom";
import { withItemData } from "./withItemData.jsx";

export const ItemDetail = withItemData(({ loading, itemData }) => {
    const { id } = useParams()
    const item = itemData.find((item) => item.id === id)

    if (loading) return <div className="loader">loading...</div>

    return (

        <div key={item.id} className="text-white mt-2">

            <div className="flex flex-col items-center justify-between w-full gap-2 bg-customColor1 p-3">
                <img src={item.image} alt={item.tile} className="w-full h-52 object-cover" />
                <p className="text-2xl">{item.title}</p>
                <p className="text-sm">{item.description}</p>
                <p className="ml-auto text-lg">${item.price}</p>
                <p className="ml-auto text-sm">Incluye guarnición</p>
            </div>

            {item.guarniciones && item.guarniciones.length > 0 && (
                <div>
                    <h2 className="text-center text-4xl my-5">Guarniciones</h2>
                    <div className="flex overflow-x-scroll scroll scroll-smooth">
                        {item.guarniciones.map((guarnicion, index) => (
                            <div key={index} className="flex flex-col items-center flex-none w-5/12 bg-customColor1 p-3 m-4 gap-2">
                                <img src={guarnicion.image_guarnicion} alt={guarnicion.title_guarnicion} className="w-full h-24 object-cover" />
                                <p className="text-center m-0">{guarnicion.title_guarnicion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {item.salsas && item.salsas.length > 0 && (
                <div>
                    <h2 className="text-center text-4xl my-5">Salsas</h2>
                    <div className="flex overflow-x-scroll scroll scroll-smooth">
                        {item.salsas.map((salsa, index) => (
                            <div key={index} className="flex flex-col items-center flex-none w-5/12 bg-customColor1 p-3 m-4 gap-2">
                                <img src={salsa.image_salsas} alt={salsa.title_salsas} className="w-full h-24 object-cover" />
                                <p className="text-center m-0">{salsa.title_salsas}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}



        </div>
    )
})