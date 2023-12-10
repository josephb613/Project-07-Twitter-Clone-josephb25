import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/tweet-editor';
import Tweets from '../components/tweets';
import Sidebar from '../components/sidebar';
import Trends from '../components/trends';


function Home() {
  return (
    <>
      <main className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
        <Sidebar />
        <Trends />
      </main>
    </>
  );
}

export default Home;