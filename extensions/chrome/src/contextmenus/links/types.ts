type OnClickData = chrome.contextMenus.OnClickData;
type Tab = chrome.tabs.Tab;

type ContextType = chrome.contextMenus.ContextType;

export interface LinkParameters {
    id: string;
    title: string;
    contexts: Array<ContextType>;
    onClick(info: OnClickData, tab:Tab): Promise<void>;
}

export const bindLink = (parameters:LinkParameters) => {
    chrome.contextMenus.create({
        id: parameters.id,
        title: parameters.title,
        contexts: parameters.contexts
    });
    chrome.contextMenus.onClicked.addListener((info, tab) => {
        console.log(info, tab);
        if (!info || !info.menuItemId || info.menuItemId !== parameters.id) return;
        if (!tab) return;
        return parameters.onClick(info, tab).then((e) => {
            console.log("Done", e);
        })
    })
}

const contentCopy = (text:string) => navigator.clipboard.writeText(text)

export async function chromeheadCopy(tabId:number, copy_str:string) {
    return await chrome.scripting.executeScript({
        target: { tabId },
        func: contentCopy,
        args: [copy_str]
    })
}