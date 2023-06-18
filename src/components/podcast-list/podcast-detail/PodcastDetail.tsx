import { useParams, useLocation } from 'react-router-dom';
import { type Episode } from '../models/Podcast';

export default function PodcastDetail(): JSX.Element {
	const { podcastId } = useParams<{ podcastId: string }>();
	const location = useLocation();
	const episodes: Episode[] = location.state?.episodes;

	return (
		<div>
			<h1>Hello, I am the detail page for Podcast {podcastId}</h1>
			<ul>
				{episodes.map((episode: any) => (
					<li key={episode.id}>
						<h2>{episode.title}</h2>
						<p>{episode.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
