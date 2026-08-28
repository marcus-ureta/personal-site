import { usePopupManager } from "./popupManagerContext";
import { PopupTabs, State } from "./popupManager";
import { useUpdatePage } from "../tabUtils";
import { Tabs } from "../tabManager/tabManager";

export function useShowPopup(selectedTab : PopupTabs) {
    const { setPopupState } = usePopupManager();
    const updatePage = useUpdatePage();

    const showPopUp = (): void => {
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