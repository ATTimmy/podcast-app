import { Card } from 'react-bootstrap';
import { type PodcastItem } from '../../../models/ModelStorePodcast';
import GetPodcastSearch from './utils/GetPodcastSearch';
import { Link } from 'react-router-dom';

export default function PodcastCard(
	data: PodcastItem[],
	searchTerm: string,
	setPodcastLength: React.Dispatch<React.SetStateAction<number>>
): JSX.Element[] {
	const rows: JSX.Element[] = [];
	let row: JSX.Element[] = [];
	let filteredData = data;

	if (searchTerm !== '') {
		filteredData = GetPodcastSearch(data, searchTerm);
	}

	setPodcastLength(filteredData.length);

	// Create a podcast card element for each filtered data item
	filteredData.forEach((val: PodcastItem, index: number) => {
		row.push(
			<div className='podcast-column' key={val.id}>
				<Link
					className='link-card'
					to={`/podcast/${val.id}`}
					state={{ podcastDetail: val }}
				>
					<Card border='0' className='podcast-card shadow-sm'>
						<Card.Img src={val.image} className='rounded-circle' />
						<Card.Body>
							<Card.Title>{val.titleName}</Card.Title>
							<Card.Text>{`Author: ${val.authorName}`}</Card.Text>
						</Card.Body>
					</Card>
				</Link>
			</div>
		);

		if ((index + 1) % 4 === 0 || index === filteredData.length - 1) {
			rows.push(
				<div className='podcast-row' key={index}>
					{row}
				</div>
			);
			row = [];
		}
	});

	return rows;
}
