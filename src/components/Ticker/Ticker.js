// @flow
import React from 'react';

import './ticker.css';

type TickerProps = {|
	items: Array<string>
|}

const Ticker = (props: TickerProps) => {
	return (
		<div className="ticker">
			{props.items.map(ticker => {
				return (<div>{ticker}</div>)
			})}
		</div>
	)
};

export default Ticker;