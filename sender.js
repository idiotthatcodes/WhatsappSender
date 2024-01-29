// Define a function to handle click events on the context menu items
function ExtensionOnClick(info, tab) {
    if (info.menuItemId === "whatsappChat") {
        const phoneNumber = info.selectionText;
        const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
        chrome.tabs.create({ url: whatsappURL });
    } else if (info.menuItemId.startsWith("preFilledText")) {
        const phoneNumber = "ReplaceWithPhoneNumber"; // Replace with the actual phone number
        const preFilledText = preFilledTexts[info.menuItemId];
        const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(preFilledText)}`;
        chrome.tabs.create({ url: whatsappURL });
    }
}

// Pre-filled texts for the dropdown menu
const preFilledTexts = {
    preFilledText1: "This is the pre-filled text for Text 1.",
    preFilledText2: "This is the pre-filled text for Text 2.",
    preFilledText3: "This is the pre-filled text for Text 3.",
};

// Add a listener for click events on the context menu
chrome.contextMenus.onClicked.addListener(ExtensionOnClick);

// Add a listener for when the extension is installed
chrome.runtime.onInstalled.addListener(function () {
    // Create a context menu item for opening WhatsApp chat
    chrome.contextMenus.create({
        title: "Open WhatsApp Chat",
        contexts: ["selection"],
        id: "whatsappChat"
    });

    // Create a parent context menu item for pre-filled texts
    const parent = chrome.contextMenus.create({
        title: "Pre-filled Texts",
        contexts: ["selection"]
    });

    // Create child context menu items for pre-filled texts
    for (const [key, value] of Object.entries(preFilledTexts)) {
        chrome.contextMenus.create({
            title: "Text " + key.replace("preFilledText", ""),
            parentId: parent,
            contexts: ["selection"],
            id: key
        });
    }
});
