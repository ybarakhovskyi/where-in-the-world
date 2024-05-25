type CompanyPageParams = {
  params: {
    countryId: string;
  };
};

export default function CountryPage({ params }: CompanyPageParams) {
  return <h2>Here is a page for country {params.countryId}</h2>;
}
