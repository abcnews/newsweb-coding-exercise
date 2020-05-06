// @flow
import React from 'react';

import './detail-layout.css';

type DetailLayoutProps = {
	ticker?: React$Element<*>,
	header?: React$Element<*>,
	publishedDate?: ?React$Element<*>,
	sidebar?: React$Element<*>,
	relatedTopics?: React$Element<*>,
	body: React$Element<*>,
	hideBackToTop?: boolean,
	containerClassName?: string
};

const DetailLayout = (props: DetailLayoutProps) => {
	return (
		<article>
			{props.ticker && <div className="ticker-container">{props.ticker}</div>}
			<div className={`Article-container ${props.containerClassName || ''}`}>
				<div className="Article-container-left">
					{props.header &&
						React.cloneElement(props.header, {
							className: "Article-header-override"
						})}

					<div className="Article-body">
						{props.body}
					</div>
					<div className="Article-published-date">
						{props.publishedDate}
					</div>
					<div className="Article-related-topics">
						{props.relatedTopics}
					</div>
				</div>
				{props.sidebar && 
					<div className="Article-container-right">
						<div className="sidebar">{props.sidebar}</div>
					</div>
				}
			</div>
			{!props.hideBackToTop &&
				<div>
					<a href="#top">Back to top</a>
				</div>
			}
		</article>
	);
};

export default DetailLayout;