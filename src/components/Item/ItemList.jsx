import { Link } from "react-router-dom"
import { withItemData } from "./withItemData.jsx"

export const ItemList = withItemData(({ loading, itemData }) => {

    if (loading) return <div className="loader">loading...</div>
    return (
            <div className="grid grid-cols-2 gap-2 justify-items-center mt-24">
                {
                    itemData.map((item) => (

                        <Link to={`/home/item/${item.id}`} key={item.id} className="flex flex-col items-center w-full gap-3 bg-customColor1 rounded-2xl p-3 m-3">
                            <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded-2xl" />
                            <p className="text-white text-center m-0">{item.title}</p>
                        </Link>

                    ))
                }
            </div>
    )
})