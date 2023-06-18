import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('renders App component', () => {
	render(<App />);

	const link = screen.getByText('Podcast List');
	expect(link).toBeInTheDocument();
});
