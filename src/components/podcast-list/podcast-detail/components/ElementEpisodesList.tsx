import { Table } from 'react-bootstrap';
import { type Episode } from '../models/ModelPodcastDetail';

export default function ElementEpisodesList(
	filterDataEpisodes: Episode[]
): JSX.Element {
	const ObjectEpisodesList = (
		<>
			<div className='list-episodes-header'>
				<h2>Episodes: {filterDataEpisodes.length}</h2>
			</div>
			<div className='list-episodes-body'>
				<Table striped bordered hover size='sm'>
					<thead>
						<tr>
							<th>Title</th>
							<th>Date</th>
							<th>Duration</th>
						</tr>
					</thead>
					<tbody>
						{filterDataEpisodes.map((episode: any) => (
							<tr key={episode.episodeName}>
								<td>{episode.episodeName}</td>
								<td>{episode.date}</td>
								<td>{episode.episodeDuration}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</>
	);
	return ObjectEpisodesList;
}
