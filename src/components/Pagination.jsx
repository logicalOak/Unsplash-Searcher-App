import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { fetchPhotos } from '../config';
import { AppContext } from '../context/AppContext';

// 🍀 Styled Components
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	max-width: 1200px;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-left: 10px;
	padding-right: 10px;
	padding-bottom: 50px;

	ul {
		display: flex;
		gap: 10px;
		align-items: center;
		flex-wrap: wrap;
	}

	li {
		border-radius: 5px;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 35px;
		padding: 5px;
		font-weight: 500;
		border-radius: 5px;
		word-break: break-word;
		transition: all 0.25s;

		&:hover {
			background-color: #ebeef6;
		}
	}

	.selected a {
		background-color: #7b68ee;
		color: #fff;
	}

	.previous.disabled {
		display: none;
	}
`;

const Pagination = () => {
	const { totalPages, query, perPage, type, dispatch } =
		useContext(AppContext);

	const handlePageClick = async ({ selected }) => {
		const nextPage = selected + 1;
		const { results, total, total_pages } = await fetchPhotos(
			query,
			nextPage,
			perPage
		);
		dispatch({
			type: 'FETCH_MORE',
			payload: { results, total, query, total_pages, nextPage, type },
		});
	};
	return (
		<Wrapper>
			{type === 'search' && (
				<ReactPaginate
					disableInitialCallback={true}
					initialPage={0}
					breakLabel='...'
					nextLabel=''
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={totalPages}
					previousLabel=''
					renderOnZeroPageCount={null}
				/>
			)}
		</Wrapper>
	);
};

export default Pagination;
