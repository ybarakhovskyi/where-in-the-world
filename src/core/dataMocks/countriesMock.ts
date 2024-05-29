import { Country } from '@/types/country';
import { getRandomNumberInRange } from '@/core/utils/getRandomNumberInRange';
import { countryMock } from './countryMock';
import { regionOptionsMock } from './regionsMock';

export const countriesMock: Country[] = Array(10)
  .fill(countryMock)
  .map((country) => {
    const randomPickedRegion =
      regionOptionsMock[
        getRandomNumberInRange(0, regionOptionsMock.length - 1)
      ];

    const patchedCountryMock: Country = {
      ...country,
      region: randomPickedRegion.label,
    };

    return patchedCountryMock;
  });
