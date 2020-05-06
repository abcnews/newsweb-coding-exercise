// @flow

import React from 'react';

import DetailHeader from '../components/DetailHeader/DetailHeader';
import Topics from '../components/Topics/Topics';
import DateTime from '../components/DateTime/DateTime';
import DetailLayout from '../components/DetailLayout/DetailLayout';

import mockArticleData from '../article-data';

import './App.css';

function App() {
  return (
    <div className="App" id="top">
      <DetailLayout
        containerClassName="App-container-override"
        header={
          <DetailHeader
            heroImage={mockArticleData.heroImage} 
            title={mockArticleData.title}
            isMediaFirst={true}
          />
        }
        publishedDate={<DateTime prefix="Published " time={mockArticleData.publishedDate} />}
        relatedTopics={<Topics topics={mockArticleData.topics} />}
        body={mockArticleData.body()}
        //$FlowFixMe
        hideBackToTop={1}
      />
    </div>
  );
}

export default App;
