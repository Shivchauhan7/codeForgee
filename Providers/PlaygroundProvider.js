import { getByTitle } from "@testing-library/dom";
import { createContext, useContext, useEffect, useState } from "react";
import {v4} from 'uuid'
export const PlaygroundContext = createContext();

const initialData = [
    {
        id: v4(),
        title: 'SpringBoot',
        files:[
            {
                id: v4(),
                title: 'index',
            code: 'count<<"hello world";',
        language:'cpp'          }
        ]

    },
     {
        id: v4(),
        title: 'Frontend',
        files:[
            {
                id: v4(),
                title: 'test',
            code: 'console.log("hello world");',
        language:'javascript'          }
        ]

    }
]
export const PlaygroundProvider = ({children}) => {
    const [folders, setFolders] = useState(initialData)
    
    useEffect(()=> {
        localStorage.setItem('data' , JSON.stringify(folders))
    },[])
    

    return (
        <PlaygroundContext.Provider value={folders}>
            {children}
        </PlaygroundContext.Provider>
    );
}