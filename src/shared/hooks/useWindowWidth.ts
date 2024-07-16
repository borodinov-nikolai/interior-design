import { useEffect, useState } from "react"




const useWindowWidth = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth)
        }


        window.addEventListener('resize', handleWidth)
        return () => window.removeEventListener('resize', handleWidth)
    }, [])

    return width
}


export default useWindowWidth