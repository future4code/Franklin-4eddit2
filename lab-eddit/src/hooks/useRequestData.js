import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTdmOWJlLTAxZTYtNDc5NC1hNjgxLWJlNjVlYTRhMWM0MyIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1OTAxNjc2MCwiZXhwIjoxNjU5MDU5OTYwfQ.G9R1H8cQwjQTGDO87CoF-jlgyaL21lY2CTqiRcy5nvU"
            }
        }).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
            alert('useRequestData: Ocorreu um erro, tente novamente')
        })
    }, [url])

    return(data)
}

export default useRequestData;