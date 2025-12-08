import { Box, Typography, Card, CardContent } from '@mui/material';
import { Receipt } from '@mui/icons-material';

const Billing = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#333', mb: 1 }}>
          💼 Your Payment & Invoice Center
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', fontWeight: 500 }}>
          Manage payments, view invoices, and billing history
        </Typography>
      </Box>

      <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(211, 47, 47, 0.08)' }}>
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Receipt sx={{ fontSize: 80, color: '#d32f2f', mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Billing Module
          </Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Coming soon - Manage your payments and invoices
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Billing;
