import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { People, LocalHospital, CalendarMonth, AttachMoney } from '@mui/icons-material';

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

const AdminDashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Patients" value="1,234" icon={<People />} color="#1976d2" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Doctors" value="45" icon={<LocalHospital />} color="#388e3c" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Appointments Today" value="89" icon={<CalendarMonth />} color="#f57c00" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Revenue (Month)" value="$125K" icon={<AttachMoney />} color="#d32f2f" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
