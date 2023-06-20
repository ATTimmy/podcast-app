import axios from 'axios';
import {
	ALL_ORIGINS_API_URL,
	ITUNES_LOOKUP_URL,
} from '../../../../constants/constants';
import { LIST_EPISODES_INITIAL_STATE } from './constants/ListEpisodesConstants';
import { type PodcastEpisodesCall } from '../models/ModelPodcastDetail';

export default async function GetPodcastEpisodesData(
	podcastId: string
): Promise<any> {
	try {
		if (podcastId != null) {
			const urlEncode = encodeURIComponent(
				`${ITUNES_LOOKUP_URL}?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
			);
			const response = await axios.get(
				`${ALL_ORIGINS_API_URL}?url=${urlEncode}`
			);
			const resp = await response.data.results;
			const data = await resp;
			return data;
		}
	} catch (error) {
		console.error(error);
		const dataError: PodcastEpisodesCall = LIST_EPISODES_INITIAL_STATE;
		return dataError;
	}
}
