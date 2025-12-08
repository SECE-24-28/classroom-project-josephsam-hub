import { Box, Typography, Card, CardContent } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';

const Appointments = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#333', mb: 1 }}>
          📅 Your Appointments
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', fontWeight: 500 }}>
          Manage and schedule your medical appointments
        </Typography>
      </Box>

      <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(211, 47, 47, 0.08)' }}>
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <CalendarMonth sx={{ fontSize: 80, color: '#d32f2f', mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Appointments Module
          </Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Coming soon - Book and manage your appointments here
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Appointments;
