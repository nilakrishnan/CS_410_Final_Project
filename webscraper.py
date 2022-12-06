from email import charset
import requests
from bs4 import BeautifulSoup
from rank_bm25 import BM25Okapi
from nltk.corpus import gutenberg
import nltk.data

# futher development:
# 1. remove special chars (\n, \a, !, ., ...) from text before bm25
# 2. remove stop words from text before bm25
# 3. remove common words from text before bm25

# find closest sentence to query on a given url webpage
def find(url, query):
    # get from url
    r = requests.get(url)
    html = r.text
    soup = BeautifulSoup(html, "html.parser")
    text = soup.get_text()

    # turn text into corpus --> array of sentences
    tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
    corpus = tokenizer.tokenize(text)
    tokenized_corpus = [doc.split(" ") for doc in corpus]
    bm25 = BM25Okapi(tokenized_corpus)

    # determine closes sentence to query and return
    tokenized_query = query.split(" ")
    doc_scores = bm25.get_scores(tokenized_query)
    # print(doc_scores[doc_scores != 0])  # see how many doc scores are > 0
    res = bm25.get_top_n(tokenized_query, corpus, n=1)
    return res

# testing suite
query = "windy London"
url = 'https://www.gutenberg.org/files/2701/2701-h/2701-h.htm'
print(find(url, query))