import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PodcastList from './podcast-list/PodcastList';
import PodcastDetail from './podcast-list/podcast-detail/PodcastDetail';
import PodcastEpisodeDetail from './podcast-list/podcast-detail/podcast-episode-detail/PodcastEpisodeDetail';
import 'bootstrap/dist/css/bootstrap.css';

export default function App(): JSX.Element {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<PodcastList />} />
				<Route path='/podcast/:podcastId' element={<PodcastDetail />} />
				<Route
					path='/podcast/:podcastId/episode/:episodeId'
					element={<PodcastEpisodeDetail />}
				/>
			</Routes>
		</Router>
	);
}
