import re
import requests
import sys

from bs4 import BeautifulSoup
from nltk.tokenize import sent_tokenize, word_tokenize
from rank_bm25 import BM25Okapi

def find_relevant_sentences(url, query):
    soup = BeautifulSoup(requests.get(url).text, "html.parser")
    text = soup.get_text()

    sentences = sent_tokenize(text)
    sentence_list = [word_tokenize(s) for s in sent_tokenize(text)]
    cleaned_sentences = [" ".join([w for w in s if w.isalnum()]) for s in sentence_list]

    bm25 = BM25Okapi(sentence_list)
    q = query.split(" ")
    scores = bm25.get_scores(q)
    res = bm25.get_top_n(q, cleaned_sentences, n = 5)
    return res

if __name__ == "__main__":
    sentences = find_relevant_sentences(sys.argv[1], sys.argv[2])
    for s in sentences:
        print(s + "\n")