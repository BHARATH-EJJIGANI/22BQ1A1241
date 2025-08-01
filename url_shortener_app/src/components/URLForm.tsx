import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { log } from '../utils/logger';

export default function URLForm() {
  const [longUrl, setLongUrl] = useState('');

  const handleSubmit = () => {
    if (!longUrl || !longUrl.startsWith('http')) {
      log('Invalid URL');
      return;
    }
    const shortCode = uuidv4().slice(0, 6);
    const entry = {
      id: shortCode,
      longUrl,
      createdAt: new Date().toISOString(),
      clicks: [],
    };
    const data = JSON.parse(localStorage.getItem('shortUrls') || '[]');
    data.push(entry);
    localStorage.setItem('shortUrls', JSON.stringify(data));
    setLongUrl('');
    log(`Short URL created: ${shortCode}`);
  };

  return (
    <Box sx={{ my: 2 }}>
      <TextField label="Enter URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} fullWidth />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 1 }}>Shorten</Button>
    </Box>
  );
}