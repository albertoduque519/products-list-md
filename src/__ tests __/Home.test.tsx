import { render } from '@testing-library/react';
import Home from '../pages/Home/Home';

describe('Home Component', () => {
  test('renders Home component with product cards', () => {
    const { getByText, getAllByAltText } = render(<Home />);

    // Check if the component renders with the correct title and subtitle
    expect(getByText('Ultimos productos')).toBeTruthy();
    expect(getByText('Novedades Televisores 2024')).toBeTruthy();

    // Check if the product cards are rendered
    const tvImages = getAllByAltText(/tv/i);
    expect(tvImages.length).toBe(8);
    expect(getAllByAltText('tv')).toBeTruthy();
  });

});
