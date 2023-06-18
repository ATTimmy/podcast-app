import { configureStore } from '@reduxjs/toolkit';
import podcastsReducer, { fetchPodcasts } from './slice/podcastSlice';

const store = configureStore({
	reducer: {
		podcasts: podcastsReducer,
	},
});

// Defines an asynchronous function to make the API call at application startup
const fetchData = async (): Promise<void> => {
	try {
		await store.dispatch(fetchPodcasts());
	} catch (error) {
		console.error(error);
	}
};

// Call the asynchronous function to initiate data loading.
void fetchData();

export default store;
