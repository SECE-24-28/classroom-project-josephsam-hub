import { Box, CssBaseline } from '@mui/material';
import TopBar from './TopBar';
import HorizontalNav from './HorizontalNav';
import ProfessionalFooter from './ProfessionalFooter';

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <CssBaseline />
      <TopBar />
      <HorizontalNav />
      <Box
        component="main"
        sx={{
          flex: 1,
          p: { xs: 2, sm: 3, md: 4 },
          background: 'linear-gradient(135deg, #fafafa 0%, #fff5f5 100%)',
          maxWidth: '1400px',
          width: '100%',
          mx: 'auto',
        }}
      >
        {children}
      </Box>
      <ProfessionalFooter />
    </Box>
  );
};

export default DashboardLayout;
