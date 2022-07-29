import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((response) => {
            setData(response.data)
        }).catch((error) => {
            alert('useRequestData: Ocorreu um erro, tente novamente')
        })
    }, [url])

    return(data)
}

export default useRequestData;
