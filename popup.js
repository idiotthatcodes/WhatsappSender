document.addEventListener('DOMContentLoaded', function() {
    const settingsDropdown = document.getElementById('settingsDropdown');

    // Event listener for dropdown change
    settingsDropdown.addEventListener('change', function() {
        // Get the selected value
        const selectedOption = settingsDropdown.value;

        // Send message to background script to update the value of belOptie
        chrome.runtime.sendMessage({
            msg: "optie_update", 
            data: {
                subject: "BelOptio",
                content: selectedOption
            }
        }, function(response) {
            if (chrome.runtime.lastError) {
                console.error("Error sending message:", chrome.runtime.lastError.message);
            } else {
                console.log("Message sent successfully");
            }
        });
    });
});