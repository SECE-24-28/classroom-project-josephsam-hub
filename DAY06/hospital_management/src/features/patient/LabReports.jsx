import { Box, Typography, Card, CardContent } from '@mui/material';
import { Science } from '@mui/icons-material';

const LabReports = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#333', mb: 1 }}>
          🧪 Your Medical Test Results
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', fontWeight: 500 }}>
          View and download your laboratory test results
        </Typography>
      </Box>

      <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(211, 47, 47, 0.08)' }}>
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Science sx={{ fontSize: 80, color: '#d32f2f', mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Lab Reports Module
          </Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Coming soon - Access all your test results here
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LabReports;
