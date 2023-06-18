import { useParams } from 'react-router-dom';

export default function PodcastEpisodeDetail(): JSX.Element {
	const { podcastId } = useParams<{ podcastId: string }>();

	return (
		<div>
			<h1>Hello, I am the detail page for Podcast {podcastId}</h1>
		</div>
	);
}
