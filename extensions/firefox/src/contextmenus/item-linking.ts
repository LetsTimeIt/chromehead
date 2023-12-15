import { bindIdLink } from "./links/id";
import { bindSimcLink } from "./links/simc";
import { bindWowheadMarkupLink } from "./links/wowhead-markup";

const setUpItemMenus = () => {
    bindWowheadMarkupLink();
    bindSimcLink();
    bindIdLink();
}

export const setUp = () => {
    setUpItemMenus();
}