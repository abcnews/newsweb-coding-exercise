// @flow

import React from 'react';
import logo from '../logo.svg';

import Ticker from '../components/Ticker/Ticker';
import DetailHeader from '../components/DetailHeader/DetailHeader';
import Topics from '../components/Topics/Topics';
import DateTime from '../components/DateTime/DateTime';
import DetailLayout from '../components/DetailLayout/DetailLayout';

import mockArticleData from '../article-data';


function Web () {
  return (
    <div className="App" id="top">
      <header className="App-header">
        <div className="App-header-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav className="App-nav">
          <ul>
            <li><a href="https://www.abc.net.au/news/justin">Just In</a></li>
            <li><a href="https://www.abc.net.au/news/politics">Politics</a></li>
            <li><a href="https://www.abc.net.au/news/world">World</a></li>
            <li><a href="https://www.abc.net.au/news/business">Business</a></li>
            <li><a href="https://www.abc.net.au/news/analysis">Analysis</a></li>
            <li><a href="https://www.abc.net.au/news/sport">Sport</a></li>
            <li><a href="https://www.abc.net.au/news/science">Science</a></li>
            <li><a href="https://www.abc.net.au/news/health">Health</a></li>
            <li><a href="https://www.abc.net.au/news/arts-and-culture">Arts</a></li>
            <li><a href="https://www.abc.net.au/news/more">Other</a></li>
          </ul>
        </nav>
      </header>

      <DetailLayout
        ticker={<Ticker items={['Watch live coverage on News 24']} />}
        header={
          <DetailHeader
            heroImage={mockArticleData.heroImage} 
            title={mockArticleData.title}
          />
        }
        publishedDate={<DateTime prefix="Published " time={mockArticleData.publishedDate} />}
        relatedTopics={<Topics topics={mockArticleData.topics} />}
        sidebar={<div>Sidebar content here</div>}
        body={mockArticleData.body()}
      />
    </div>
  );
}

export default Web;
