import { bindLink, chromeheadCopy } from "./types";

export const bindWowheadMarkupLink = () => bindLink({
    id: "wowhead-markup",
    title: "Copy Wowhead Markup",
    contexts: ["link"],
    async onClick(info, tab) {
        if (!info.linkUrl) return;
        if (!info.linkUrl.includes("wowhead.com")) return;
        var match = info["linkUrl"].match(/com\/(?:|ptr\/|beta\/)([^\/]*=[^\/]*)/);
        if (match === null) return;
        var copy_str = match[1];
        var bonus = info["linkUrl"].match(/.*\?(bonus=[\d:]+).*/);
        if (bonus)
            copy_str += " " + bonus[1];
        chromeheadCopy("[" + copy_str + "]");
    } 
});