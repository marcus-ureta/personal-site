import { createContext, useContext, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react';
import { type PopupStates, InitialPopupStates } from './popupManager';

type PopupManagerContextType = {
    popupState: PopupStates[];
    setPopupState: Dispatch<SetStateAction<PopupStates[]>>;
}

const PopupManagerContext = createContext<PopupManagerContextType | null>(null);

export function PopupManagerProvider({children} : PropsWithChildren){
    const [popupState, setPopupState] = useState<PopupStates[]>(InitialPopupStates);

    return(
        <PopupManagerContext.Provider value={{popupState, setPopupState}}>
            {children}
        </PopupManagerContext.Provider>
    )
}

export function usePopupManager() {
    const context = useContext(PopupManagerContext);

    if (!context) {
        throw new Error(
            "usePopupManager must be used inside a parent of 'PopupManagerContext'"
        );
    }

    return context;
}