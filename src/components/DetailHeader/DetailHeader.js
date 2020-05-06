// @flow
import React from 'react';

import './detail-header.css';

type DetailHeaderProps = {|
	title?: string,
	heroImage?: string,
	className?: string,
	isMediaFirst?: boolean
|};

const DetailHeader = (props: DetailHeaderProps) => {
	const renderTitle = props.title && <h1 className="Detail-Header-heading">{props.title}</h1>;
	const renderMedia = props.heroImage && <img className="Detail-Header-image" src={props.heroImage} />;
	return (
		<div className={`Detail-Header ${props.className || ''}`}>
			{props.isMediaFirst ? 
				<>{renderMedia}{renderTitle}</> : 
				<>{renderTitle}{renderMedia}</>}
		</div>	
	);
};

export default DetailHeader;