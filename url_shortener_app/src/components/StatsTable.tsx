import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function StatsTable() {
  const [urls, setUrls] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shortUrls') || '[]');
    setUrls(data);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Shortcode</TableCell>
            <TableCell>Original URL</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url) => (
            <TableRow key={url.id}>
              <TableCell>{url.id}</TableCell>
              <TableCell>{url.longUrl}</TableCell>
              <TableCell>{url.createdAt}</TableCell>
              <TableCell>{url.clicks.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}