import { Box, Typography, Card, CardContent } from '@mui/material';
import { LocalHospital } from '@mui/icons-material';

const MedicalRecords = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#333', mb: 1 }}>
          💊 Your Treatment & History
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', fontWeight: 500 }}>
          Access your complete medical records and prescriptions
        </Typography>
      </Box>

      <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(211, 47, 47, 0.08)' }}>
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <LocalHospital sx={{ fontSize: 80, color: '#d32f2f', mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Medical Records Module
          </Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Coming soon - View your treatment history and prescriptions
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MedicalRecords;
