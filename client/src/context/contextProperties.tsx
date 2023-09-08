import {createContext,useState, useEffect, ReactNode } from 'react'
import {HomeProps} from '../types/type.js'
import { client } from '../service/sanity.js';

export const PropertyContext = createContext<HomeProps[]>([])

export const PropertyProvider:React.FC<{children: ReactNode}> = ({children}) => {


    const [property, setProperty] = useState<HomeProps[]>([])

    useEffect(() => {
        FetchHome()
    },[])

    const FetchHome = async () => {
        await client.fetch<HomeProps[]>("*[_type=='home']{..., 'categories':categories[0]->status}").then((res: HomeProps[]) => {
            setProperty(res)
        })
    }
    return (
        <PropertyContext.Provider value={property}>
            {children}
        </PropertyContext.Provider>
    )
}
