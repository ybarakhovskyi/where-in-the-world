// Vendors
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

// Modules
import { renderWithTheme } from '@/testUtils/renderWithTheme';

// Components
import Home from '@/app/page';
import { CountryListTestId } from '@/components/pages/home/CountryList';
import * as fetchCountriesAction from '@/app/actions/fetchCountries';

jest.mock('../actions/fetchCountries', () => ({
  __esModule: true,
  ...jest.requireActual('../actions/fetchCountries'),
}));

describe('Home', () => {
  describe('Search', () => {
    it('should render search field', async () => {
      // Act
      const ComponentResult = await Home();
      renderWithTheme(ComponentResult);

      const searchField = screen.getByRole('searchbox');

      // Assert
      expect(searchField).toBeInTheDocument();
    });
  });

  describe('RegionFilter', () => {
    it('should render region filter button', async () => {
      // Act
      const ComponentResult = await Home();
      renderWithTheme(ComponentResult);

      const searchField = screen.getByText('Filter by region');

      // Assert
      expect(searchField).toBeInTheDocument();
    });
  });

  describe('CountryList', () => {
    it('should render country list if any countries presented', async () => {
      // Act
      const ComponentResult = await Home();
      renderWithTheme(ComponentResult);

      const searchField = screen.getByTestId(CountryListTestId);

      // Assert
      expect(searchField).toBeInTheDocument();
    });

    it('should render explanatory message when there is no countries in list', async () => {
      // Arrange
      const fetchCountriesMock = jest.spyOn(
        fetchCountriesAction,
        'fetchCountries',
      );

      // Act
      fetchCountriesMock.mockImplementationOnce(() => Promise.resolve([]));

      const ComponentResult = await Home();
      renderWithTheme(ComponentResult);

      const searchField = screen.getByText('No countries found', {
        exact: false,
      });

      // Assert
      expect(searchField).toBeInTheDocument();
    });
  });
});
