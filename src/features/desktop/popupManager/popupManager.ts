
import check from '@/assets/icons/tab/check.svg'
import failed from '@/assets/icons/tab/failed.svg'
import warning from '@/assets/icons/tab/warning.svg'

export const PopupTabs = {
    Success: "SUCCESS",
    Failure: "FAILURE",
    Warning: "WARNING"
}as const

export type PopupTabs = typeof PopupTabs[keyof typeof PopupTabs];

export const State = {
    Active: "ACTIVE",
    Inactive: "INACTIVE"
}as const

export type State = typeof State[keyof typeof State];

export interface PopupStates{
    Tab: PopupTabs;
    State: State;
    Icon: string;
}

export const InitialPopupStates : PopupStates[] = [
    {
        Tab: PopupTabs.Success,
        State: State.Active,
        Icon: check
    },

    {
        Tab: PopupTabs.Failure,
        State: State.Inactive,
        Icon: failed,
    },

    {
        Tab: PopupTabs.Warning,
        State: State.Inactive,
        Icon: warning,
    },
]