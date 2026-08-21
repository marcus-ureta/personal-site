import { createContext, useContext, useState, type PropsWithChildren } from 'react';
import {InitialTabStates, type TabState} from './tabManager'

const TabManagerContext = createContext<TabState[]>(InitialTabStates);

export function TabManagerProvider({children} : PropsWithChildren){
    const [state, setState] = useState(InitialTabStates);

    return(
        <TabManagerContext.Provider value={state}>
            {children}
        </TabManagerContext.Provider>
    )
}

export function useTabManager() {
    const context = useContext(TabManagerContext);

    if (!context) {
        throw new Error(
            "useTabManager must be used inside a parent of 'TabManagerContext'"
        );
    }

    return context;
}