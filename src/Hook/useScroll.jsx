import { createContext, useState } from 'react';
export const scrollContext = createContext(null)

const useScroll = ({children}) => {
    const {scroll, setScroll} = useState('')

    const value = {scroll, setScroll}
    return (
        <scrollContext.Provider value={value}>{children}</scrollContext.Provider>
    );
};

export default useScroll;