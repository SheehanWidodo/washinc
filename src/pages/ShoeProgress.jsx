import React, { useEffect, useContext, useState, useCallback } from 'react';
import { AppContext } from '../AppContext';
import { fetchShoeData } from '../services/api';
import ShoeCard from '../components/ShoeCard';
import { Search } from 'lucide-react'; // Import a search icon from lucide-react (or use any icon you prefer)

function ShoeProgress() {
  const { shoeProgress, updateShoeProgress } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedShoe, setSearchedShoe] = useState(null); // Store the selected shoe based on search

  // Function to fetch data from API
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchShoeData();
      updateShoeProgress(data);
    } catch (err) {
      setError('Failed to load shoe progress.');
    } finally {
      setLoading(false);
    }
  }, [updateShoeProgress]);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle Search Click
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchedShoe(null); // Reset if search is empty
      return;
    }

    const foundShoe = shoeProgress.find((shoe) => {
      const kodeBooking = shoe['Kode Booking'] || '';
      return kodeBooking.toLowerCase() === searchTerm.toLowerCase();
    });

    setSearchedShoe(foundShoe || null); // Set the found shoe or null if not found
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shoe Progress Tracker</h2>

      {/* Search Bar */}
      <div className="mb-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter Kode Booking..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <Search size={20} />
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {/* Display Only One Shoe Card */}
      <div className="grid grid-cols-1 gap-4">
        {searchedShoe ? (
          <ShoeCard key={searchedShoe['Kode Booking']} shoe={searchedShoe} />
        ) : (
          searchTerm.trim() && <p className="text-gray-500">No matching shoe found.</p>
        )}
      </div>
    </div>
  );
}

export default ShoeProgress;
