chrome.runtime.onMessage.addListener(data => {
    if (data.type === "query") {
        console.log("searching query...")
        chrome.tabs.query({ active: true }, (tabs) => {
            let tab = tabs[0]
            if (!tab.url.includes("chrome://")) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["script.js"]
                }, result => {
                    chrome.runtime.sendMessage({
                        type: "result",
                        sentences: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4", "Sentence 5"]
                    })
                })
            }
        })
    } else if (data.type === "clear") {
        console.log("cleared query")
        chrome.runtime.sendMessage({
            type: "reset"
        })
    }
})