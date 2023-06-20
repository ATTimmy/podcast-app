import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './PodcastList.scss';
import PodcastCard from './components/PodcastCard';
import {
	Container,
	Form,
	FormControl,
	InputGroup,
	Navbar,
} from 'react-bootstrap';

export default function PodcastList(): JSX.Element {
	const [podcasts, setPodcasts] = useState<JSX.Element[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [podcastLength, setPodcastLength] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const podcastState: any = useSelector((state) => state);

	// Fetch and set the podcast data based on the podcast state and search term
	// Also update the podcast length using the setPodcastLength function
	useEffect(() => {
		const podcastCardData = PodcastCard(
			podcastState.podcasts?.podcasts,
			searchTerm,
			setPodcastLength
		);
		setPodcasts(podcastCardData);
		setIsLoading(false);
	}, [podcastState, searchTerm]);

	return (
		<div id='podcast-list'>
			{isLoading ? (
				<div className='d-flex justify-content-center align-items-center'>
					<div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			) : (
				<Container>
					<Navbar bg='transparent' expand='lg'>
						<Container>
							<Navbar.Brand>Podcast App</Navbar.Brand>
							<Navbar.Collapse id='basic-navbar-nav'>
								<Form className='ms-auto'>
									<InputGroup>
										<InputGroup.Text>{podcastLength}</InputGroup.Text>
										<FormControl
											type='text'
											placeholder='Search'
											value={searchTerm}
											onChange={(e) => {
												setSearchTerm(e.target.value);
											}}
										/>
									</InputGroup>
								</Form>
							</Navbar.Collapse>
						</Container>
					</Navbar>
					<div className='podcast-body'>{podcasts}</div>
				</Container>
			)}
		</div>
	);
}
