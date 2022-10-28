import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} --Honest News Hub` 
    } ,[title])
}

export default useTitle 