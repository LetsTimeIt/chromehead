import { bindLink, chromeheadCopy } from "./types";

export const bindIdLink = () => bindLink({
    id: "wowhead-id",
    title: "Copy ID only",
    contexts: ["link"],
    async onClick(info, tab) {
        if (!tab.id) return;
        if (!info.linkUrl) return;
        if (!info.linkUrl.includes("wowhead.com"))
            return;
        var match = info["linkUrl"].match(/com\/(?:|ptr\/|beta\/)[^\/]*=([^\/]*)/);
        if (match === null)
            return;
        chromeheadCopy(tab.id, match[1]);
    } 
});