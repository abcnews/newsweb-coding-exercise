// @flow

import React from 'react';

import './topics.css';

type TopicsProps = {|
	topics: Array<any>
|};

const Topics = (props: TopicsProps) => {
	return (
		<div className="topics-container">
			{props.topics.map(topic => <strong>{topic}</strong>)}
		</div>
	)
};

export default Topics;