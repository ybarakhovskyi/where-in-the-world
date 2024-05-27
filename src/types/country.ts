export type CountryCurrency = {
  name: string;
  symbol: string;
};

export type CountryCurrencies = Record<string, CountryCurrency>;

export type CountryNativeName = {
  official: string;
  common: string;
};

export type CountryNativeNames = Record<string, CountryNativeName>;

export type CountryName = {
  common: string;
  official: string;
  nativeName: CountryNativeNames;
};

export type CountryLanguage = Record<string, string>;

export type CountryFlags = {
  png: string;
  svg: string;
  alt: string;
};

export type Country = {
  borders: string[];
  capital: string[];
  cca3: string;
  ccn3: string;
  currencies: CountryCurrencies;
  flags: CountryFlags;
  languages: CountryLanguage;
  name: CountryName;
  population: number;
  region: string;
  subregion: string;
  tld: string[];
};

export type CountryField = keyof Country;
