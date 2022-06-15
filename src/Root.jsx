import React, { useContext } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import { AppContext } from './context/AppContext';
import headerBg from './assets/grid-image.jpg';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// 🍀 Styled Components
const Header = styled.header`
	padding-top: calc(100px + (250 - 100) * ((100vw - 300px) / (1920 - 300)));
	padding-bottom: calc(100px + (250 -100) * ((100vw - 300px) / (1920 - 300)));
	position: relative;
	overflow: hidden;
`;
const Title = styled.h1`
	position: relative;
	color: #fff;
	line-height: 1.2;
	font-weight: 500;
	text-align: center;
	margin-bottom: 20px;
	font-size: calc(30px + (80 - 30) * ((100vw - 300px) / (1920 - 300)));
`;
const BackImage = styled.div`
	position: absolute;
	height: 100%;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: ${({ bg }) => (bg ? `url(${bg}) repeat-x center` : '#fefefe')};
	animation: scroll-grid 160s linear infinite;
	width: 7260px;

	&::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.25);
	}

	@keyframes scroll-grid {
		0% {
			transform: translate3d(0, 0, 0);
		}

		100% {
			transform: translate3d(-2420px, 0, 0);
		}
	}
`;
const Grid = styled.ul``;
const GridPreLoader = styled(Grid)``;

// 🍀 Root
const Root = () => {
	const { photos, isLoading } = useContext(AppContext);
	return (
		<div>
			{/* Header */}
			<Header>
				<BackImage bg={headerBg} />
				<Title>Unsplash Searcher</Title>
				{/* Form */}
				<Form />
			</Header>
			{/* Preloader */}
			{/* Items */}
		</div>
	);
};

export default Root;
