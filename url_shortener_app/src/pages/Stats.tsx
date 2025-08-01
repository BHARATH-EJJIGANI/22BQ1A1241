import StatsTable from '../components/StatsTable';
import Container from '@mui/material/Container';

export default function Stats() {
  return (
    <Container>
      <h1>Short URL Statistics</h1>
      <StatsTable />
    </Container>
  );
}