# Browser Search

#### Team: Text Retrievers
#### Members: Nila Krishnan & Ajit Singh

## Setup Chrome Extension
1. Download this project and unzip the directory.
2. Navigate to the Extensions page by entering `chrome://extensions` in a new tab. Alternatively, click on the Extensions menu puzzle button and select *Manage Extensions* at the bottom of the menu.
3. Enable *Developer Mode* by clicking the toggle switch next to Developer mode.
4. Click the *Load unpacked* button and select the `search_extension` folder from the unzipped directory. You should see a new extension named **Browser Search**
5. Click the Extensions menu puzzle button again and pin the Chrome extension in the toolbar.

## Usage
1. To search the current webpage, open the Extension.
2. Type in a query into the search bar and click the magnifying glass to search! Alternatively, click the X to clear your query.
3. The top 10 most relevant text on the current webpage will be returned/highlighted.

---------

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
