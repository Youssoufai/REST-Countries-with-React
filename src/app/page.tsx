'use client';
import { useEffect, useState } from 'react';
import Search from './components/search';
import { tree } from 'next/dist/build/templates/app-page';

// Define a type for the country data
interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    svg: string;
  };
}

export default function Home() {
  // Add state to store the countries data
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const urlData = await fetch('https://restcountries.com/v3.1/all');
        const res = await urlData.json();
        console.log(res)
        setCountries(res);
      } catch (err) {
        console.log(`Failed to fetch ${err}`)
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-dark-background text-white-text h-screen">
      <Search />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {countries.map((country) => (
          <div key={country.name.common} className="bg-dark-elements text-white-text w-[400px] h-[350px]">
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className="w-full h-48 object-cover"
            />
            <h1 className="font-bold text-lg p-4">{country.name.common}</h1>
            <p className="px-4">Population: <span className="text-input">{country.population.toLocaleString()}</span></p>
            <p className="px-4">Region: <span className="text-input">{country.region}</span></p>
            <p className="px-4">Capital: <span className="text-input">{country.capital?.[0] || 'N/A'}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}