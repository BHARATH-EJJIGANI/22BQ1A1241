import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function URLList() {
  const [urls, setUrls] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shortUrls') || '[]');
    setUrls(data);
  }, []);

  return (
    <List>
      {urls.map((url) => (
        <ListItem key={url.id}>
          <ListItemText primary={`${url.id} → ${url.longUrl}`} secondary={`Created at: ${url.createdAt}`} />
        </ListItem>
      ))}
    </List>
  );
}