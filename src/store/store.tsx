import { configureStore } from '@reduxjs/toolkit';
import podcastsReducer from './slice/podcastSlice';
import { fetchPodcasts } from './actions/podcastsActions';

export const store = configureStore({
	reducer: {
		podcasts: podcastsReducer,
	},
});

// Define a function to load the initial data
export const loadInitialData = async (): Promise<void> => {
	try {
		await store.dispatch(fetchPodcasts());
	} catch (error) {
		console.error(error);
	}
};

// Subscribe a function to the store status to store the data in the localStorage
store.subscribe(() => {
	const state = store.getState();
	const serializedState = JSON.stringify(state);
	localStorage.setItem('reduxState', serializedState);
});
