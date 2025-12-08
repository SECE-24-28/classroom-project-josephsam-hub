import { Box, Typography } from '@mui/material';

export default function Help() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#d32f2f' }}>
        🆘 Help & Support
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Need assistance? Our support team is here 24/7 to help you.
      </Typography>
    </Box>
  );
}
