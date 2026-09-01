import { createContext, useContext, useState, type PropsWithChildren } from "react";

type SoundContextType = {
    enabled: boolean;
    setEnabled: (enabled: boolean) => void;
};

const SoundContext = createContext<SoundContextType | null>(null);

export function SoundProvider({ children }: PropsWithChildren) {
    const saved = localStorage.getItem("soundEnabled");
    const initialEnabled = (saved !== null ? saved === "true" : true);
    const [enabled, setEnabled] = useState(initialEnabled);

    return (
        <SoundContext.Provider value={{ enabled, setEnabled }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSoundSettings() {
    const context = useContext(SoundContext);

    if (!context) {
        throw new Error(
            "useSoundSettings must be used inside SoundProvider"
        );
    }

    return context;
}