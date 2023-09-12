import {createContext,  ReactNode,  } from 'react'
import {useQuery} from '@tanstack/react-query'
import {HomeProps} from '../types/type.js'
import { FetchData } from '../service/Api.js';

export const PropertyContext = createContext<HomeProps[]>([])
export const PropertyProvider:React.FC<{children: ReactNode}> = ({children}) => {
    const {data} = useQuery({
        queryKey: ["homes"],
        queryFn: () =>  FetchData("*[_type=='home']{..., 'categories':categories[0]->status}").then((res: HomeProps[]) => res)})
        const contextValue = data ?? []

    return (
        <PropertyContext.Provider value={contextValue}>
            {children}
        </PropertyContext.Provider>
    )
}
