import ElementEpisodesList from '../components/ElementEpisodesList';
import { type Episode } from '../models/ModelPodcastDetail';
import FilterDataEpisodes from './FilterDataEpisodes';
import GetPodcastEpisodesData from './GetPodcastEpisodesData';

export default async function GetObjectListEpisodes(
	podcastId: string
): Promise<JSX.Element> {
	const respDataEpisodes = await GetPodcastEpisodesData(podcastId);
	const filterDataEpisodes: Episode[] = FilterDataEpisodes(respDataEpisodes);
	const objectEpisodesList = ElementEpisodesList(filterDataEpisodes);
	return objectEpisodesList;
}
