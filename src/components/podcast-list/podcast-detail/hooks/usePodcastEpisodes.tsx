import { useEffect, useState } from 'react';
import GetObjectListEpisodes from '../utils/GetObjectListEpisodes';

export function usePodcastEpisodes(
	podcastId: string
): [JSX.Element | undefined, boolean] {
	const [podcastEpisode, setPodcastEpisode] = useState<JSX.Element>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		void GetObjectListEpisodes(podcastId).then((result) => {
			setPodcastEpisode(result);
			setLoading(false);
		});
	}, [podcastId]);

	return [podcastEpisode, loading];
}
