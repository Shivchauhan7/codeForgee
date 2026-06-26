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
];

    
    const defaultCodes = {
        ['cpp']: `
        #include <iostream>
int main()
{
    std::cout<<"Hello World";
    return 0;
}
        `,
        'javascript': `console.log("hello")`,
        'python': `print("hello python");`,
        'java': `
        public class Main{
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}

        `
    }
export const PlaygroundProvider = ({children}) => {
    const [folders, setFolders] = useState(()=>{
        const localData = localStorage.getItem('data');
        if(localData){
            return JSON.parse(localData);
        }
        return initialData;
            
    });


    const createNewPlayground = (newPlayground) => {
        const {fileName, folderName, language} = newPlayground;
        const newFolders = [...folders];
        newFolders.push({
            id:v4(),
            title: folderName,
            files: [
                {
                    id: v4(),
                    title: fileName,
                    code: defaultCodes[language],
                    language
                }
            ]
        })
        localStorage.setItem('data', JSON.stringify(newFolders));
        setFolders(newFolders);
    }
    
    const createNewFolder = (folderName)=> {
        const newFolder = {
            id: v4(),
            title: folderName,
            files: []
        }
       
    const allFolders = [...folders, newFolder]
    localStorage.setItem('data', JSON.stringify(allFolders));
    setFolders(allFolders);


    }
    
    const deleteFolder = (id) => {
        const updateFoldersList = folders.filter((folderName)=> {
            return folderName.id !== id;
        })

        localStorage.setItem('data', JSON.stringify(updateFoldersList));
        setFolders(updateFoldersList)
    }

    const editFolderTitle = (newFolderName, id) =>{

       const updatedFoldersList = folders.map((folderItem) => {
            if(folderItem.id === id){
                folderItem.title = newFolderName
            }

            return folderItem;
        })
        localStorage.setItem('data', JSON.stringify(updatedFoldersList));
        setFolders(updatedFoldersList);

    }

    useEffect(()=> {
        if(!localStorage.getItem('data')){
        localStorage.setItem('data' , JSON.stringify(folders))
        }
    },[])
    
    
    
    const playgroundFeatures = {
        folders,
        createNewPlayground,
        createNewFolder,
        deleteFolder,
        editFolderTitle,
        
    }

    return (
        <PlaygroundContext.Provider value={playgroundFeatures}>
            {children}
        </PlaygroundContext.Provider>
    );
}
