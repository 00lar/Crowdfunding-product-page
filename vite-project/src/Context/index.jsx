import { createContext, useState } from "react";


 // Define los valores que deseas compartir a través del contexto
  


const PageContext = createContext();

const PageContextProvider = ({children}) => {
    const [someValue, setSomeValue] = useState('');
    return (
        <PageContext.Provider
            value={{
                someValue,
                setSomeValue
            }}
        >
            {children}
        </PageContext.Provider>
    )
}

export {PageContext, PageContextProvider}