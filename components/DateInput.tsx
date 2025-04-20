'use client';

import { useState } from 'react';
import { Input } from './ui/input';

export default function DateInput() {
  const [date, setDate] = useState('');

  return (
    <div className="p-4">
      <Input
        type="date"
        id="departure-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-300 rounded-lg p-2"
      />
    </div>
  );
}
