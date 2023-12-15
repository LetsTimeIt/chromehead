import * as itemLinking from './contextmenus/item-linking';

chrome.runtime.onInstalled.addListener(() => {
    itemLinking.setUp();
});
