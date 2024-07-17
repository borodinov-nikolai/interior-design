import { useEffect, useState } from "react"




const useWindowWidth = () => {
    const [width, setWidth] = useState<number>(0)


    
    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth)
        }
        handleWidth()

        window.addEventListener('resize', handleWidth)
        return () => window.removeEventListener('resize', handleWidth)
    }, [])

    return width
}


export default useWindowWidth