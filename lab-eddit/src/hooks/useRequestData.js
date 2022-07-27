import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3ZmE3YjhkLTBmZjItNDIzNy04YzYzLTg2ZDlmMDljZmYzMyIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1ODk0NTI4NywiZXhwIjoxNjU4OTg4NDg3fQ.sNJ5WwTMVR_K5uZMJf7ztlPAtJ_gtLihZ1nX1tQl24Y"
            }
        }).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
            alert('Ocorreu um erro, tente novamente')
        })
    }, [url])

    return(data)
}

export default useRequestData;