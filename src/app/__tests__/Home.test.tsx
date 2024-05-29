import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Home from '@/app/page';
import { MAIN_PAGE_TITLE } from '@/core/consts';
import { renderWithTheme } from '@/testUtils/renderWithTheme';

describe('Home', () => {
  it('should render a heading', async () => {
    // Act
    const ComponentResult = await Home();
    renderWithTheme(ComponentResult);

    const heading = screen.getByRole('button', {
      name: 'Filter by region',
    });

    // Assert
    expect(heading).toBeInTheDocument();
  });
});
