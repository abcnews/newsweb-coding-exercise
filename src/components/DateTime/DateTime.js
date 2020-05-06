// @flow
import React from 'react';

type DateTimeProps = {|
	time: string,
	prefix: string
|}

const DateTime = (props: DateTimeProps) => {
	const d = new Date(props.time);

	return (
		<div>
		{props.prefix}
		<time>{d.toDateString()}</time>
		</div>
	)
}

export default DateTime;