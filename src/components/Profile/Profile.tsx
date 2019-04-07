import React from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';

export default class Profile extends React.Component {
	render() {
		return (
			<div>
				<Container text style={{ marginTop: '7em' }}>
					<Header as="h1" style={{ textAlign: 'center' }}>
						Site under maintenance 🛠️
					</Header>
					<p style={{ textAlign: 'center' }}>Please check back soon ...</p>
				</Container>
			</div>
		);
	}
}
