import json
import requests
from bs4 import BeautifulSoup

def get_html(url):
    response = requests.get(url)
    return response.text

def main():
    url = 'https://kelasinovatif.com/blog-list/'
    html = get_html(url)
    soup = BeautifulSoup(html, 'html.parser')
    articles = soup.find_all('article')

    articles = [{
            'image': article.find('img')['src'],
            'slug': article.find('a')['href']
        } for article in articles]
    
    with open('articles.json', 'w') as f:
        json.dump(articles, f)


if __name__ == "__main__":
    main()