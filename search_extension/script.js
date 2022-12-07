text = document.body.innerText
text = text.replace(/[\s]+/g, " ")
text = text.replace(/[\\]+/g, "")
text = text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")