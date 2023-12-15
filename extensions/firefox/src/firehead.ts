import * as itemLinking from './contextmenus/item-linking';

browser.runtime.onInstalled.addListener(() => {
    itemLinking.setUp();
});
