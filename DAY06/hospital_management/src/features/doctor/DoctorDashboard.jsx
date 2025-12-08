import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { People, CalendarMonth, Assignment, TrendingUp } from '@mui/icons-material';

const StatCard = ({ title, value, icon, color }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography color="textSecondary" gutterBottom>{title}</Typography>
          <Typography variant="h4">{value}</Typography>
        </Box>
        <Box sx={{ color, fontSize: 48 }}>{icon}</Box>
      </Box>
    </CardContent>
  </Card>
);

const DoctorDashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Doctor Dashboard</Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Today's Appointments" value="12" icon={<CalendarMonth />} color="#1976d2" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Patients" value="248" icon={<People />} color="#388e3c" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Pending Reports" value="7" icon={<Assignment />} color="#f57c00" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Consultations" value="156" icon={<TrendingUp />} color="#7b1fa2" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorDashboard;
