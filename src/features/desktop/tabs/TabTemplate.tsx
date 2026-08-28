import { useState, useRef, useEffect, type PropsWithChildren,} from 'react';

import {getTabStyle} from '../tabUtils'
import { useMediaQuery } from '@/utils/webUtils';
import {useTabManager} from '@/features/desktop/tabManager/TabManagerContext'
import { Tabs, TabStatus} from '../tabManager/tabManager'
import TabHeader from "@/features/desktop/tabs/TabHeader"

import "@/features/desktop/Desktop.css"

import Draggable from 'react-draggable'

export interface HeaderDetails{
    icon: string;
    name: string;
}

export interface TabDetails{
    width: number;
    height: number;
    leftPos?: number;
    topPos?: number;
}

interface TabTemplateProps{
    thisTab: Tabs;
    headerDetails: HeaderDetails;
    tabDetails: TabDetails;
    cssStyling?: string;
    headerStyling?: string;
}

export function TabTemplate({thisTab, headerDetails, tabDetails, cssStyling= '', headerStyling = '', children} : TabTemplateProps & PropsWithChildren){
    const { setTabStates, tabState } = useTabManager();
    const [playClosingAnim, setClosingAnim] = useState<boolean | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    
    const currentTabState = tabState.find(tab => tab.Tab == thisTab);
    const checkTabState : boolean = currentTabState?.Status == (TabStatus.Closed);

    const nodeRef = useRef(null);

    // Check for screen size difference
    const [remountKey, setRemountKey] = useState(0);
    const [screenReset, setScreenReset] = useState<boolean>(false);
    const screenCheck = useMediaQuery('(max-width: 639px)');

    useEffect(() => {
        if (currentTabState?.Status === TabStatus.Closing) {
            setClosingAnim(true);

            setTimeout(() => {
                setClosingAnim(false);

                setTabStates((previousTabs) => {
                    const newTabs = previousTabs.map((tab) => {
                        if (tab.Tab === thisTab) {
                            return {
                                ...tab,
                                Status: TabStatus.Closed,
                            };
                        }

                        return tab;
                    });

                    return newTabs
                })
            }, 200)
        }

        if(screenCheck && !screenReset) {
            setScreenReset(true);
            setRemountKey(prevKey => prevKey + 1);
        }

        if(screenReset && !screenCheck) setScreenReset(false);
    }, [currentTabState?.Status])

    return(
        <>
            {/* GRAY BACKGROUND FOR MOBILE */}
            <div className={`${checkTabState ? 'hidden' : 'block'} sm:hidden fixed w-screen h-screen bg-[#525252]/40 top-0`}/>

            <Draggable key={remountKey} handle=".handle-bar" nodeRef={nodeRef} allowAnyClick={false} bounds="body" onStart={() => setIsDragging(true)} onStop={() => setIsDragging(false)}>
                <div
                    className={`${playClosingAnim && !checkTabState ? 'animate-tab-close' : 'animate-tab-popup'} ${checkTabState && !playClosingAnim ? 'hidden' : ''}
                    flex flex-col w-screen h-[100dvh] sm:w-[var(--tab-width)] sm:h-[var(--tab-height)]
                    ${getTabStyle()} ${isDragging ? 'drag-style' : ''} 
                    overflow-hidden z-[var(--tabIndex-value)] left-0 pb-8 sm:pb-[3px] sm:left-[var(--tabPos-left)] ${cssStyling}`} 
                    ref={nodeRef}
                    style={{
                        '--tab-width': `${tabDetails.width}vw`,
                        '--tab-height': `${tabDetails.height}vh`,
                        '--tabPos-left': `${tabDetails.leftPos}%`,
                        '--tabIndex-value': `${currentTabState?.zIndex}`,
                    } as React.CSSProperties}
                >
                    <TabHeader icon={headerDetails.icon} name={headerDetails.name} isDraggable={true} tab={thisTab} cssStyling={headerStyling}/>
                    {children}
                </div>
            </Draggable>
        </>
    )
}