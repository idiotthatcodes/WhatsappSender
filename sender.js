// Define a function to handle click events on the context menu item
function ExtensionOnClick(info) {
    if (info.menuItemId === "whatsappChat") {
        // Extract the selected text (phone number)
        const phoneNumber = info.selectionText;
        
        // Construct the WhatsApp web URL with the phone number
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}`;
        
        // Open a new tab with the WhatsApp web URL
        chrome.tabs.create({ url: whatsappURL });
    }
}

// Add a listener for click events on the context menu
chrome.contextMenus.onClicked.addListener(ExtensionOnClick);

// Add a listener for when the extension is installed
chrome.runtime.onInstalled.addListener(function () {
    // Create a context menu item for opening WhatsApp chat
    chrome.contextMenus.create({
        title: "Open WhatsApp Chat",
        contexts: ["selection"], // Show only when text is selected
        id: "whatsappChat" // Identifier for this menu item
    });
});
