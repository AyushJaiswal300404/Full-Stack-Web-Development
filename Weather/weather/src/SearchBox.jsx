import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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

    const getWeatherImage = (weatherMain) => {
        // Return relevant weather image based on condition
        const weather = weatherMain.toLowerCase();
        if (weather.includes('cloud')) {
            return 'https://images.unsplash.com/photo-1611928482473-7b27d24eab80?w=500&auto=format&fit=crop&q=60';
        } else if (weather.includes('rain')) {
            return 'https://images.unsplash.com/photo-1618557703025-7ec58c813e05?w=500&auto=format&fit=crop&q=60';
        } else if (weather.includes('clear')) {
            return 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=500&auto=format&fit=crop&q=60';
        } else {
            return 'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=500&auto=format&fit=crop&q=60';
        }
    };

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
            
            {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                    {error}
                </Typography>
            )}
            
            {weatherData && (
                <Card sx={{ 
                    maxWidth: 345,
                    mt: 4,
                    backgroundColor: '#f5f5f5',
                    margin: '20px auto'
                }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={getWeatherImage(weatherData.weather[0].main)}
                        alt={weatherData.weather[0].main}
                        sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            {weatherData.name}, {weatherData.sys.country}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Temperature: {Math.round(weatherData.main.temp)}°C
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Feels like: {Math.round(weatherData.main.feels_like)}°C
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Weather: {weatherData.weather[0].main}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Humidity: {weatherData.main.humidity}%
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Wind: {weatherData.wind.speed} m/s
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}