'use client';

import { useState } from 'react';
import { Input } from './ui/input';

const frenchCities = [
  'Paris',
  'Lyon',
  'Marseille',
  'Toulouse',
  'Nice',
  'Bordeaux',
  'Lille',
  'Strasbourg',
  'Nantes',
  'Montpellier',
];

export default function DepartureCityInput({placeholder}: {placeholder?: string}) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if(value){
      setSuggestions(
        frenchCities.filter((city) =>
          city.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    }
  };

  const handleSelect = (city: string) => {
    setQuery(city);
    setSuggestions([]);
  };

  const handleOutOfFocus = () => {
    setSuggestions([]);
  }

  return (
    <div className="">
      <Input
        type="text"
        id="departure"
        value={query}
        onChange={handleChange}
        onBlur={handleOutOfFocus}
        className="border border-gray-300 rounded-lg p-2 w-full"
        placeholder={placeholder}
      />
      {suggestions.length > 0 && (
        <ul className="border border-gray-200 rounded-lg mt-1 bg-white shadow-md">
          {suggestions.map((city) => (
            <li
              key={city}
              onClick={() => handleSelect(city)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
