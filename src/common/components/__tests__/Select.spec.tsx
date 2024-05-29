import '@testing-library/jest-dom';
import { renderWithTheme } from '@/testUtils/renderWithTheme';
import { fireEvent, screen } from '@testing-library/react';
import { Select } from '@/common/components/Select';
import { SelectOption } from '@/common/components/Select/types';
import { selectDropdownLabel } from '@/common/components/Select/SelectDropdown';

describe('Select', () => {
  const testOptionLabel = 'Test';
  const testOptionValue = 'test';
  const selectOptions: SelectOption[] = [
    { value: testOptionValue, label: testOptionLabel },
  ];

  it('should render trigger button', () => {
    // Arrange
    const handleOnSelect = jest.fn();

    // Act
    renderWithTheme(
      <Select options={selectOptions} value={null} onSelect={handleOnSelect} />,
    );

    const selectTrigger = screen.getByText('Filter by region');

    // Assert
    expect(selectTrigger).toBeInTheDocument();
  });

  it('should render options menu on trigger click', () => {
    // Arrange
    const handleOnSelect = jest.fn();

    // Act
    renderWithTheme(
      <Select options={selectOptions} value={null} onSelect={handleOnSelect} />,
    );

    const selectTrigger = screen.getByText('Filter by region');

    fireEvent.click(selectTrigger);

    const regionList = screen.getByRole('list', {
      name: selectDropdownLabel,
    });

    // Assert
    expect(regionList).toBeInTheDocument();
  });

  it('should close options menu on value select', () => {
    // Arrange
    const handleOnSelect = jest.fn();

    // Act
    renderWithTheme(
      <Select value={null} options={selectOptions} onSelect={handleOnSelect} />,
    );

    const selectTrigger = screen.getByText('Filter by region');

    fireEvent.click(selectTrigger);

    const regionList = screen.getByRole('list', {
      name: selectDropdownLabel,
    });
    const regionOptionButton = screen.getByRole('button', {
      name: testOptionLabel,
    });

    fireEvent.click(regionOptionButton);

    expect(regionList).not.toBeInTheDocument();
  });

  it('should show selected value as trigger text', () => {
    // Arrange
    const handleOnSelect = jest.fn();

    // Act
    renderWithTheme(
      <Select value={null} options={selectOptions} onSelect={handleOnSelect} />,
    );

    const selectTrigger = screen.getByText('Filter by region');

    fireEvent.click(selectTrigger);

    const regionOptionButton = screen.getByRole('button', {
      name: testOptionLabel,
    });

    fireEvent.click(regionOptionButton);

    expect(selectTrigger).toHaveTextContent(testOptionLabel);
  });
});
