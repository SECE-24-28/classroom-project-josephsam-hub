import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import { Instagram, Facebook, WhatsApp, Language, Favorite, LocalHospital } from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram />, label: 'Instagram', url: 'https://instagram.com' },
    { icon: <Facebook />, label: 'Facebook', url: 'https://facebook.com' },
    { icon: <WhatsApp />, label: 'WhatsApp', url: 'https://wa.me' },
    { icon: <Language />, label: 'Website', url: 'https://joehospital.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.95) 0%, rgba(255, 102, 89, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 -4px 20px rgba(211, 47, 47, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: 2,
          flexWrap: 'wrap',
        }}>
          {/* Left: Copyright with Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#fff' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocalHospital sx={{ fontSize: 20, animation: 'pulse 2s infinite' }} />
              <Favorite sx={{ fontSize: 16, color: '#ffcccc' }} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 500, letterSpacing: '0.3px' }}>
              © 2025 Joe Hospital — Caring for Life, Connected by Heart.
            </Typography>
          </Box>

          {/* Right: Social Links */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.15) translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
                  },
                }}
                aria-label={social.label}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Mobile: Stacked Layout */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', mt: 2 }}>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 2 }} />
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Available 24/7 for your healthcare needs
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
