document.getElementById('save-to-note')?.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        const activeTab = tabs[0];
        if (activeTab.id != null) {
            chrome.tabs.sendMessage(activeTab.id, {message: 'save_to_note', tabId: activeTab.id});
        }
    });
});
