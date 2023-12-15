type OnClickData = browser.contextMenus.OnClickData;
type Tab = browser.tabs.Tab;

type ContextType = browser.contextMenus.ContextType;

export interface LinkParameters {
    id: string;
    title: string;
    contexts: Array<ContextType>;
    onClick(info: OnClickData, tab:Tab): Promise<void>;
}

export const bindLink = (parameters:LinkParameters) => {
    browser.contextMenus.create({
        id: parameters.id,
        title: parameters.title,
        contexts: parameters.contexts
    });
    browser.contextMenus.onClicked.addListener((info, tab) => {
        console.log(info, tab);
        if (!info || !info.menuItemId || info.menuItemId !== parameters.id) return;
        if (!tab) return;
        parameters.onClick(info, tab).then((e) => {
            console.log("Done", e);
        })
    })
}

const contentCopy = (text:string) => () => {
    navigator.clipboard.writeText(text);
    return;
}

export async function chromeheadCopy(copy_str:string) {
    return await navigator.clipboard.writeText(copy_str);
}