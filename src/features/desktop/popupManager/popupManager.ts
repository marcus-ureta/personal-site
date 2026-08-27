
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
}

export const InitialPopupStates : PopupStates[] = [
    {
        Tab: PopupTabs.Success,
        State: State.Inactive,
    },

    {
        Tab: PopupTabs.Failure,
        State: State.Inactive,
    },

    {
        Tab: PopupTabs.Warning,
        State: State.Inactive,
    },
]