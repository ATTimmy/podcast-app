import { useEffect, useState } from 'react';
import mockPodcasts from '../../mock/podcasts.json';
import { Link } from 'react-router-dom';

import { type Podcast } from './models/Podcast';

export default function PodcastList(): JSX.Element {
	const [podcasts, setPodcasts] = useState<Podcast[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		// Simulating an asynchronous request to get the podcasts with a loading time of 2 seconds to simulate loading
		setTimeout(() => {
			setPodcasts(mockPodcasts);
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<div>
			<h1>Podcast List</h1>
			{isLoading ? (
				<div className='d-flex justify-content-center align-items-center'>
					<div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			) : (
				<ul>
					{podcasts.map((podcast) => (
						<li key={podcast.id}>
							<h2>{podcast.title}</h2>
							<p>{podcast.description}</p>
							<Link
								to={`/podcast/${podcast.id}`}
								state={{ episodes: podcast.episodes }}
								className='btn btn-primary'
							>
								View Episodes
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
