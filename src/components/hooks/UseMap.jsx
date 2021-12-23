import { useEffect, useState } from "react"
import ServiceMap from "../service/service"

const UseMap = () =>{
    
    const [maps,setMap] = useState()
  
    const [loading,setLoading] =useState(false)
    useEffect(() =>{
        setLoading(true)
        ServiceMap().then(index =>{
            setMap(index)
            setLoading(false)
        })
    },[])
    return {maps,
            loading}

}

export default  UseMap