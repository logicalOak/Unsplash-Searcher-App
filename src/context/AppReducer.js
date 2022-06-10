const FETCH_PHOTOS = 'FETCH_PHOTOS';
const FETCH_MORE = 'FETCH_MORE';
const FETCH_RANDOM_PHOTOS = 'FETCH_RANDOM_PHOTOS';
const LOADING = 'LOADING';
//
export const AppReducer = (state, { type, payload }) => {
	switch (type) {
		case FETCH_PHOTOS:
			return {
				...state,
				photos: payload.results,
				totalPhotos: payload.total,
				totalPages: payload.total_pages,
				query: payload.term,
				type: 'search',
			};
		case FETCH_MORE:
			return {
				...state,
				photos: payload.results,
				totalPhotos: payload.total,
				totalPages: payload.total_pages,
				currentPage: payload.selected,
				query: payload.query,
				type: payload.type,
			};
		case FETCH_RANDOM_PHOTOS:
			return {
				...state,
				photos: [...payload.data],
			};
		case LOADING:
			return {
				...state,
				isLoading: payload,
			};

		default:
			return {
				...state,
			};
	}
};
