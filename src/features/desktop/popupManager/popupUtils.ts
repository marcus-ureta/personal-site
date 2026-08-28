import { usePopupManager } from "./popupManagerContext";
import { PopupTabs, State } from "./popupManager";
import { useUpdatePage } from "../tabUtils";
import { Tabs } from "../tabManager/tabManager";

export function useShowPopup() {
    const { setPopupState } = usePopupManager();
    const updatePage = useUpdatePage();

    const showPopUp = (selectedTab : PopupTabs): void => {
        setPopupState((prevPopups) => {
            return prevPopups.map((popup) => {
                if(popup.Tab === selectedTab) {
                    return{
                        ...popup,
                        State: State.Active
                    }
                }
                else
                {
                    return {
                        ...popup,
                        State: State.Inactive
                    }
                }
            })
        })

        updatePage(Tabs.Popup);
    }

    return showPopUp;
}

export function useUpdateErrorMessage(){
    const { setPopupState } = usePopupManager();

    const updateErrorMessage = (error : string) => {
        setPopupState((prevPopups) => {
            return prevPopups.map((popup) => {
                if(popup.Tab === PopupTabs.Failure)
                {
                    return{
                        ...popup,
                        detailMessage: error
                    }
                }

                return popup;
            })
        })
    }

    return updateErrorMessage;
}