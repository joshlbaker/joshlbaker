import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import Card from './Card';

const profileImage = require('./../assets/img/profileImage.png');
import './../assets/scss/App.scss';

class App extends React.Component<{}, undefined> {
	public render() {
		return (
			<div className="content">
				<Card avatar={profileImage} />
				<div className="timelineWrapper">
					<Timeline lineColor={'#ddd'}>
						<TimelineItem key="001" dateText="Summer 2019 - Now" style={{ color: '#e86971' }}>
							<h3>Shopify Chat</h3>
							<p>"Chat live with store visitors. Turn visitors into customers."</p>
							<p>
								Shopify Chat is a way for customers to speak with a store owner via online store. It is
								built as a javascript widget using tools that were carefully picked with web performance
								in mind. It uses a slimmer version of React called Preact and other light-weight
								packages to bring everything together.
							</p>
							<p>
								This feature was built and released in just a few short months. With that being said, we
								decided to launch with a very minimal feature set and continue to enhance and deliver
								the best chat experience between merchant and buyer.
							</p>
						</TimelineItem>
						<TimelineItem key="002" dateText="Winter 2019 - Now" dateInnerStyle={{ background: '#F49342' }}>
							<h3>Apple Business Chat</h3>
							<p>"Let customers contact you directly in Apple’s Messages app"</p>
							<p>
								Apple business chat is a gatewaty from a merchant's online store straight to their
								iMessages app on their phone. From the click of a button, the customer is taken to the
								native apple messaging app where the conversation begins. From this conversation,
								merchants can send product links, discount codes, "buy now" links via Apple pay. The
								customer never needs to leave the conversation to buy something.
							</p>

							<p>
								Business chat was launched in July of 2019. New features are still in the works with
								updates coming before the end of the year.
							</p>
						</TimelineItem>
						<TimelineItem
							key="003"
							dateText="Fall 2018 - Winter 2019"
							dateInnerStyle={{ background: '#47C1BF' }}
						>
							<h3>Kit Skills</h3>
							<p>
								Kit Skills are Shopify Apps that work specifically for Kit, a marketing assistant
								offered free by Shopify.
							</p>
							<p>
								In order to develop a Kit Skill, certain requirements must be met. At the end of 2019 I
								helped build a form for developers to submit their apps for approval. The form had to be
								dynamic and automated to some degree.
							</p>
						</TimelineItem>
						<TimelineItem
							key="004"
							dateText="April 2018 - Fall 2018"
							dateInnerStyle={{ background: '#EEC200' }}
						>
							<h3>Facebook Marketing</h3>
							<p>"Promote products to the right audience on Facebook."</p>
							<p>
								Facebook marketing is a way for a merchant to manage all of their Facebook advertising
								preferences through Shopify. Here they can import their Facebook settings, run ads, and
								monitor their marking campaigns all in one place.
							</p>
						</TimelineItem>
						<TimelineItem
							key="005"
							dateText="April 2016 - April 2018"
							dateInnerStyle={{ background: '#9C6ADE' }}
						>
							<h3>Kit CRM (post-aquisition)</h3>
							<p>
								Once aquired, our goals as a company became shared with Shopify. Although the vision was
								the same, work needed to be done in order to scale with our new, much larger, audience.
							</p>
							<p>
								My focus was to create a new styleguide that aligned more with Shopify's style scheme.
								In addition, with minimal engineering resources at the time, I also focused on backend
								work. This was a great learning experience and something that has still proven useful to
								my everyday work.
							</p>
						</TimelineItem>
						<TimelineItem
							key="005"
							dateText="January 2016 - April 2016"
							dateInnerStyle={{ background: '#006FBB' }}
						>
							<h3>Kit CRM (pre-aquisition)</h3>
							<p>
								I joined Kit as a contractor hoping to sharpen my technical skills and grow my network
								with other engineers. I started by overhauling the existing frontend code and creating
								static marketing pages as well as a revamped onboarding experience.
							</p>
						</TimelineItem>
					</Timeline>
				</div>
			</div>
		);
	}
}

declare let module: object;

export default hot(module)(App);
