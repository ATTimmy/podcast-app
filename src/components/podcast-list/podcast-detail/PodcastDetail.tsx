import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PodcastDetail(): JSX.Element {
	const { podcastId } = useParams<{ podcastId: string }>();

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				if (podcastId != null) {
					const response = await axios.get(
						`https://api.allorigins.win/raw?url=https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
					);

					const data = response.data;
					console.log(data);
				}
			} catch (error) {
				console.error(error);
			}
		};

		void fetchData();
	}, [podcastId]);

	return (
		<div>
			<h5>{podcastId}</h5>
		</div>
	);
}
