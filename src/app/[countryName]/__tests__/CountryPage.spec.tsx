// Vendors
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

// Modules
import { countryMock } from '@/core/dataMocks';
import { renderWithTheme } from '@/testUtils/renderWithTheme';

// Components
import CountryPage from '@/app/[countryName]/page';
import { getCountryDetails } from '@/components/pages/country/CountryInfo/utils/getCompanyDetails';
import { borderCountriesListLabel } from '@/components/pages/country/CountryInfo/BorderCountriesList';
import * as fetchBorderCountries from '@/app/actions/fetchBorderCountries';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

jest.mock('../../actions/fetchBorderCountries', () => ({
  __esModule: true,
  ...jest.requireActual('../../actions/fetchBorderCountries'),
}));

jest.mock('../../actions/fetchBorderCountries', () => ({
  __esModule: true,
  ...jest.requireActual('../../actions/fetchBorderCountries'),
}));

describe('CountryPage', () => {
  const countryName = countryMock.name.common;

  it('should render country name', async () => {
    // Act
    const ComponentResult = await CountryPage({ params: { countryName } });

    renderWithTheme(ComponentResult);

    const countryHeading = screen.getByRole('heading', {
      name: countryName,
    });

    // Assert
    expect(countryHeading).toBeInTheDocument();
  });

  it('should render country flag', async () => {
    // Act
    const ComponentResult = await CountryPage({ params: { countryName } });

    renderWithTheme(ComponentResult);

    const countryFlag = screen.getByRole('img', {
      name: countryMock.flags.alt,
    });

    // Assert
    expect(countryFlag).toBeInTheDocument();
  });

  it('should render border countries', async () => {
    const ComponentResult = await CountryPage({ params: { countryName } });

    renderWithTheme(ComponentResult);

    const borderCountries = screen.getByRole('list', {
      name: borderCountriesListLabel,
    });

    expect(borderCountries).toBeInTheDocument();
  });

  it('should render explanatory message if no border countries available', async () => {
    // Arrange
    const fetchCountriesMock = jest.spyOn(
      fetchBorderCountries,
      'fetchBorderCountries',
    );

    // Act
    fetchCountriesMock.mockImplementationOnce(() => Promise.resolve([]));

    const ComponentResult = await CountryPage({ params: { countryName } });

    renderWithTheme(ComponentResult);

    const noBordersMessage = screen.getByText('No border countries');

    expect(noBordersMessage).toBeInTheDocument();
  });

  it.each(getCountryDetails(countryMock))(
    'should render %s country detail',
    async (field, value) => {
      const ComponentResult = await CountryPage({ params: { countryName } });

      renderWithTheme(ComponentResult);

      const countryDetailName = screen.getByText(`${field}:`);
      const countryDetailValue = screen.getByText(value);

      // Assert
      expect(countryDetailName).toBeInTheDocument();
      expect(countryDetailValue).toBeInTheDocument();
    },
  );
});
