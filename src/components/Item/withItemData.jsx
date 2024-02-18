import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config.js";

export const withItemData = (Component) => {

    const WithItemData = (props) => {
        const [loading, setLoading] = useState(true)
        const [itemData, setItemData] = useState([])

        useEffect(() => {
            const data = collection(db, "ALIMENTOS")

            getDocs(data)
                .then((res) => {
                    const docs = res.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    setItemData(docs)
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }, [])

        return <Component {...props} loading={loading} itemData={itemData} />
    }
    return WithItemData
};
