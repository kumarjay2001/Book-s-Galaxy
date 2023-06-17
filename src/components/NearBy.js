import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./NearBy.css"
const NearBy = () => {
    const [location, setLocation] = useState(null);
    const [bookstores, setBookstores] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error(error);
        }
      );
    }, []);
  
    useEffect(() => {
      if (location) {
        fetchBookstores();
      }
    }, [location]);
  
    const fetchBookstores = async () => {
      try {
        const response = await axios.get(
          `https://api.example.com/bookstores?lat=${location.latitude}&lng=${location.longitude}`
        );
        setBookstores(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="bookstore-locator">
        <h1 className="title">Near By Book Stores are :</h1>
        {!loading && bookstores.length > 0 ? (
          <ul className="bookstore-list">
            {bookstores.map((bookstore) => (
              <li key={bookstore.id} className="bookstore-item">
                {bookstore.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    );
}

export default NearBy