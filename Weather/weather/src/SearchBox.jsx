import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox() {
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'f0fef0ba76955421e6bfd8077864e9a8'

    const [city, setCity] = useState('');  
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    let getWeatherInfo = async (city) => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            
            if (response.ok) {
                console.log("Setting weather data:", data); 
                setWeatherData(data);
                setError(null);
            } else {
                setError(data.message || 'Error fetching weather data');
                setWeatherData(null);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError('Failed to fetch weather data');
            setWeatherData(null);
        }
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        await getWeatherInfo(city);
        setCity('');
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <div className="search-box">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required
                    value={city}        
                    onChange={handleChange}  
                    name="city"
                />
                <br/>
                <Button 
                    variant="contained" 
                    type="submit" 
                    endIcon={<SendIcon />}
                >
                    Search
                </Button>
            </form>
            
            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
            
            {weatherData && (
                <div style={{ 
                    marginTop: '2rem', 
                    padding: '1rem',
                    backgroundColor: '#333', 
                    color: 'white',        
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                    <h4 style={{ 
                        marginBottom: '1rem',
                        color: '#fff',
                        fontSize: '1.5rem'
                    }}>{weatherData.name}, {weatherData.sys.country}</h4>
                    <p style={{ margin: '0.5rem 0', color: '#fff' }}>Temperature: {Math.round(weatherData.main.temp)}°C</p>
                    <p style={{ margin: '0.5rem 0', color: '#fff' }}>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
                    <p style={{ margin: '0.5rem 0', color: '#fff' }}>Weather: {weatherData.weather[0].main}</p>
                    <p style={{ margin: '0.5rem 0', color: '#fff' }}>Humidity: {weatherData.main.humidity}%</p>
                    <p style={{ margin: '0.5rem 0', color: '#fff' }}>Wind: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
}