import React from 'react';
import styled from 'styled-components';

// 🍀 Styled Components
const Wrapper = styled.li``;
const CardHeader = styled.div``;
const CardBody = styled.a``;

const Card = ({ color, alt_description, urls, user }) => {
	return (
		<Wrapper bg={color}>
			<CardHeader>
				<img src={urls.regular} alt={alt_description} />
			</CardHeader>
			<CardBody href={user.links.html} target='_blank'>
				<img src={user.profile_image.small} alt={user.name} />
				<span>{user.name}</span>
			</CardBody>
		</Wrapper>
	);
};

export default Card;
