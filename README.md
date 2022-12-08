# Page Search

#### Team: Text Retrievers
#### Members: Nila Krishnan & Ajit Singh

## Project Description
*Page Search* is a Chrome Extension that allows the user to search any webpage with text and displays relevant sentences that correspond to the user's inputted query. The query can be a single word or phrase, allowing the user to search for topics within an article, wiki page, etc.

The default find/replace functionality in browsers only allows users to search specific terms or phrases that are found exactly word-for-word in the text on the current webpage. Other search extensions do allow the user to search using Regex and other advanced methods, but only allow literal seraching similar to using *Ctrl+F*. The focus of this project was to allow the user to search full queries or topics such that they are able to read a brief summary of the requested topic on the current webpage they are browsing.

This project falls under Theme 1: Intelligent Browsing.

## Project Structure
The backend of our extension is a ranking function that parses text from a inputted URL and finds sentences that are the most similar to the inputted query. This function was written in Python, using the libraries `BeautifulSoup` to parse the HTML for text data and `nltk` to tokenize the text into sentences. 

The frontend is a Chrome extension, written in Javascript. Chrome extensions are defined by their `manifest.json` file, where various permissions are defined such that the browser can access certain URLs. Additionally, there are three main files that are defined here: `index.html`,`background.js`, and the `script.js`. The main HTML file defines the HTML structure of the extension. The background file allows the extension to listen for messages passing data from the extension, such as the query. Lastly, the content script file allows access to the HTML of the current webpage, such as the text.

Chrome Extensions require very specific file structure and permissions. As a result, we were unable to connect our Python backend to our frontend. The `manifest.json` file does not allow access to `.py` files. From this point, we attempted to re-create our backend in Javascript as we found the `wink-nlp` module was browser compatible and had a BM25 ranking function; however, the extension's limited permissions did not allow us to use the required libraries and functions in the browser. For this reason, both the backend and frontend are not connected and some data in the frontend has been mocked to show functionality.

## Team Contributions
Both members worked together to research and implement the Chrome extension in the frontend and the ranking function in the backend. Together, we worked to test the functionality of the extension on various pages and to document the installation process. Lastly, we planned and recorded the demo video together.

## Installation & Usage
### Backend Usage
1. Download this project and unzip the directory.
2. In your terminal, navigate to the `search_extension` folder and run `python3 bm25.py [url] [query]` with the appropriate URL and query you wish to test out.

Here's an example:

```
python3 bm25.py "https://en.wikipedia.org/wiki/Dog" "wolf"
```

This prints out the following sentences from the Wikipedia article:
```
Also called the domestic dog it is derived from the extinct Pleistocene wolf 6 7 and the modern wolf is the dog nearest living relative

1 DNA sequences show that all ancient and modern dogs share a common ancestry and descended from an ancient extinct wolf population which was distinct from the modern wolf lineage

Alpha status dominance and division of labor in wolf packs

25 This indicates that an extinct Late Pleistocene wolf may have been the ancestor of the dog 8 1 26 with the modern wolf being the dog nearest living relative

Contextual isotopic genetic and morphological evidence shows that this dog was not a local wolf
```

### Extension Setup
1. Download this project and unzip the directory.
2. Navigate to the Extensions page by entering `chrome://extensions` in a new tab. Alternatively, click on the Extensions menu puzzle button and select "Manage Extensions" at the bottom of the menu.
3. Enable Developer Mode by clicking the toggle switch next to Developer mode.
4. Click the "Load unpacked" button and select the `search_extension` folder from the unzipped directory. You should see a new extension named **Page Search**!
5. Click the Extensions menu puzzle button again and pin the Chrome extension in the toolbar.

### Extension Usage
1. To search the current webpage, open the Extension.
2. Type in a query into the search bar and click the magnifying glass to search. Alternatively, click the X to clear your query.
3. The top 5 most relevant sentences on the current webpage will be displayed.

<font size=2> *Note*: Please see our demo video for queries and webpages to test on since extension usage is limited. </font>
