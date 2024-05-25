import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { MAIN_PAGE_TITLE } from '@/global/consts';

describe('Home', () => {
  it('should render a heading', () => {
    // Act
    render(<Home />);

    const heading = screen.getByRole('heading', { level: 1, name: MAIN_PAGE_TITLE });

    // Assert
    expect(heading).toBeInTheDocument();
  });
});
