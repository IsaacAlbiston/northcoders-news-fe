import { useEffect, useState } from "react"

const UseLoadingHook = (dataFetchFunction, searchTerm, refreshTerm)=>{
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        dataFetchFunction(searchTerm)
        .then((responseData)=>{
            setData(responseData)
            setIsLoading(false)
            setError(null)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err)
        })
    },[searchTerm, refreshTerm])

    return { data, isLoading, error}
}

export default UseLoadingHook