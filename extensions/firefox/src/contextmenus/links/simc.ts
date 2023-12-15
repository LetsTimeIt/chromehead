import { bindLink, chromeheadCopy } from "./types";

export const bindSimcLink = () => bindLink({
    id: "wowhead-simc",
    title: "Copy SimC Input String (w/o Slot)",
    contexts: ["link"],
    async onClick(info, tab) {
        if (!info.linkUrl) return;
        if (!info.linkUrl.includes("wowhead.com"))
            return;
        var match = info["linkUrl"].match(/com\/(?:|ptr\/|beta\/)item=(\d+)\/?([^?]*)(.*bonus=)?([\d:]+)?/);
        if (match === null)
            return;
        var copy_str;
        if (match[2] !== undefined && match[2] !== "")
            copy_str = match[2].replace(/-/gi, '_');
        else
            copy_str = "";
        copy_str += ",id=" + match[1];
        if (match[4] !== undefined && match[4] !== "")
            copy_str += ",bonus_id=" + match[4].replace(/:/gi, '/');
        chromeheadCopy(copy_str);
    } 
});