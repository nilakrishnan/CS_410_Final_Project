Flow:

--> frontend:
1. go on webpage
2. click extension icon
3. type query
4. return sentence closest to your query || highlight text closest to your query

--> backend:
1. call webscraper.py on url and query that user enters
2. display that output in the extension box


Pipeline:

manifest.json
    calls popup.html when extension button is clicked
        calls popup.js as the script running w/ event listeners
        

Q: HOW TO INTEGRATE WEBSCRAPER.PY W/ BACKGROUND.JS
    - use pyjs (http://pyjs.org/)
    - https://stackoverflow.com/questions/13175510/call-python-function-from-javascript-code