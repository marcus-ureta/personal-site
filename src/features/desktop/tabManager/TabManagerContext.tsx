import { createContext, useContext, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react';
import {InitialTabStates, type TabState} from './tabManager'

type TabManagerContextType = {
    tabState: TabState[],
    setTabStates: Dispatch<SetStateAction<TabState[]>>;
}

const TabManagerContext = createContext<TabManagerContextType | null>(null);

export function TabManagerProvider({children} : PropsWithChildren){
    const [tabState, setTabStates] = useState<TabState[]>(InitialTabStates);

    return(
        <TabManagerContext.Provider value={{tabState, setTabStates}}>
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