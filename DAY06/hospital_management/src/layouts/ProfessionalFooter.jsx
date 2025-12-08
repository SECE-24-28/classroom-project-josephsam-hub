import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Instagram, Facebook, WhatsApp, Language, Phone, LocationOn } from '@mui/icons-material';

export default function ProfessionalFooter() {
  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Emergency', href: '/emergency' },
    { label: 'Careers', href: '/careers' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Patient Portal', href: '/login' },
  ];

  const socialLinks = [
    { icon: <Instagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Facebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <WhatsApp />, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
    { icon: <Language />, href: 'https://joehospital.com', label: 'Website' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.95) 0%, rgba(179, 0, 0, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        color: '#fff',
        py: 6,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 -10px 40px rgba(211, 47, 47, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand & Address */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              ❤️ Joe Hospital
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, fontStyle: 'italic' }}>
              Caring for Life, Connected by Heart.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.5 }}>
              <LocationOn sx={{ fontSize: 20, mt: 0.3 }} />
              <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                Joe Hospital, Green Valley Road,<br />Tamil Nadu, India
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone sx={{ fontSize: 20 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>+91 98765 43210</Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>24/7 Emergency Support</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: '#fff',
                    opacity: 0.9,
                    fontSize: 14,
                    transition: 'all 0.3s ease',
                    '&:hover': { opacity: 1, transform: 'translateX(5px)', textDecoration: 'underline' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Connect With Us</Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#fff',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.2)',
                      transform: 'scale(1.15) translateY(-3px)',
                      boxShadow: '0 8px 20px rgba(255, 255, 255, 0.3)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
              Follow us for health tips, updates, and community stories.
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            © 2025 Joe Hospital — Caring for Life, Connected by Heart. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
