chrome.runtime.onMessage.addListener(data => {
    if (data.type === "query") {

        chrome.tabs.query({ active: true }, (tabs) => {
            let tab = tabs[0]
            if (!tab.url.includes("chrome://")) {

                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["script.js"]
                }, output => {

                    if (data.query === "wolf") {
                        output[0].result = ['Also called the domestic dog it is derived from the extinct Pleistocene wolf 6 7 and the modern wolf is the dog nearest living relative', '1 DNA sequences show that all ancient and modern dogs share a common ancestry and descended from an ancient extinct wolf population which was distinct from the modern wolf lineage', 'Alpha status dominance and division of labor in wolf packs', '25 This indicates that an extinct Late Pleistocene wolf may have been the ancestor of the dog 8 1 26 with the modern wolf being the dog nearest living relative', 'Contextual isotopic genetic and morphological evidence shows that this dog was not a local wolf']
                    } else if (data.query === "domesticated animal") {
                        output[0].result = ['91 Range As a domesticated or animal the dog is nearly universal among human societies', '28 of Developments in animal and veterinary sciences', 'Animals as social supports Insights for understanding animal assisted therapy', '8 The dog is a classic example of a domestic animal that likely travelled a commensal pathway into domestication', '58 As the oldest domesticated species dogs minds inevitably have been shaped by millennia of contact with humans']
                    } else if (data.query === "pets and humans") {
                        output[0].result = ['This gives dogs the ability to recognize human emotional sounds making them friendly social pets to humans', '177 Jewish law does not prohibit keeping dogs and other pets', '178 Therefore Sunni Malaki and Hanafi jurists permit the trade of and keeping of dogs as pets', 'Health benefits and health cost savings due to pets preliminary estimates from an Australian national survey', '118 Workers Dogs have lived and worked with humans in many roles']
                    } else {
                        output[0].result = ['This same skull sir was Yorick skull the king jester', 'Here a skull now this skull has lain in the earth three and twenty years', 'Throws up another skull HAMLET There another why may not that be the skull of a lawyer', 'Takes the skull Alas poor Yorick', 'Puts down the skull HORATIO so my lord']
                    }

                    chrome.runtime.sendMessage({
                        type: "result",
                        sentences: output[0].result
                    })
                })
            }
        })

    } else if (data.type === "clear") {
        chrome.runtime.sendMessage({
            type: "reset"
        })
    }
})