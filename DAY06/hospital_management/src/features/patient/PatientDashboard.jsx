import { Grid, Card, CardContent, Typography, Box, LinearProgress, Chip, Avatar, Button } from '@mui/material';
import { CalendarMonth, Receipt, Science, LocalHospital, TrendingUp, Favorite, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, icon, color, trend, subtitle, onClick, emoji }) => (
  <Card 
    onClick={onClick}
    className="hover-lift ripple-effect"
    sx={{
      borderRadius: 4,
      background: 'linear-gradient(135deg, #ffffff 0%, #fff9f9 100%)',
      border: '1px solid rgba(211, 47, 47, 0.08)',
      boxShadow: '0 4px 20px rgba(211, 47, 47, 0.08)',
      overflow: 'hidden',
      position: 'relative',
      cursor: 'pointer',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: `linear-gradient(90deg, ${color} 0%, ${color}99 100%)`,
      },
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            {emoji && <Typography sx={{ fontSize: 20 }}>{emoji}</Typography>}
            <Typography variant="caption" sx={{ color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#333', mt: 1, mb: 0.5 }}>
            {value}
          </Typography>
          {subtitle && (
            <Typography variant="caption" sx={{ color: '#999', fontWeight: 500 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
        <Avatar sx={{ 
          background: `linear-gradient(135deg, ${color}15 0%, ${color}25 100%)`,
          width: 56,
          height: 56,
        }}>
          <Box sx={{ color, fontSize: 28 }}>{icon}</Box>
        </Avatar>
      </Box>
      {trend && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <TrendingUp sx={{ fontSize: 16, color: '#4caf50' }} />
          <Typography variant="caption" sx={{ color: '#4caf50', fontWeight: 700 }}>
            {trend}
          </Typography>
        </Box>
      )}
    </CardContent>
  </Card>
);

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ animation: 'fadeIn 0.6s ease-out', width: '100%', maxWidth: '100%' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#333', mb: 1 }}>
          Welcome Back! 👋
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', fontWeight: 500 }}>
          Here's your health journey overview. Stay connected, stay healthy.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4, width: '100%' }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Upcoming Visits" 
            value="3" 
            icon={<CalendarMonth />} 
            color="#d32f2f"
            trend="+2 this week"
            subtitle="Next: Tomorrow 10:00 AM"
            emoji="📅"
            onClick={() => navigate('/patient/appointments')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Payment & Invoice Center" 
            value="$450" 
            icon={<Receipt />} 
            color="#ff6659"
            subtitle="2 invoices due"
            emoji="💼"
            onClick={() => navigate('/patient/billing')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Medical Test Results" 
            value="5" 
            icon={<Science />} 
            color="#ff9800"
            trend="2 new reports"
            subtitle="All results normal"
            emoji="🧪"
            onClick={() => navigate('/patient/lab-reports')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Active Prescriptions" 
            value="2" 
            icon={<LocalHospital />} 
            color="#4caf50"
            subtitle="Refill available"
            emoji="💊"
            onClick={() => navigate('/patient/medical-records')}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ width: '100%' }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ 
            borderRadius: 4,
            background: 'linear-gradient(135deg, #d32f2f 0%, #ff6659 100%)',
            color: '#fff',
            boxShadow: '0 8px 32px rgba(211, 47, 47, 0.3)',
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                    🏥 Your Care Network
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 500 }}>
                    Connected healthcare professionals working together for your wellness
                  </Typography>
                </Box>
                <Favorite sx={{ fontSize: 48, opacity: 0.3 }} />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', mt: 3 }}>
                {[
                  { label: 'You', icon: '👤' },
                  { label: 'Doctor', icon: '👨‍⚕️' },
                  { label: 'Lab', icon: '🔬' },
                  { label: 'Pharmacy', icon: '💊' },
                  { label: 'Billing', icon: '💳' },
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip 
                      label={`${item.icon} ${item.label}`}
                      sx={{ 
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        fontWeight: 700,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontSize: 14,
                        py: 2.5,
                      }}
                    />
                    {index < 4 && <ArrowForward sx={{ opacity: 0.6 }} />}
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="caption" sx={{ opacity: 0.8, display: 'block', mb: 1, fontWeight: 600 }}>
                  Network Health Score
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={85} 
                  sx={{ 
                    height: 8,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.2)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #fff 0%, #ffcccc 100%)',
                      borderRadius: 4,
                    }
                  }}
                />
                <Typography variant="caption" sx={{ opacity: 0.8, mt: 0.5, display: 'block', fontWeight: 600 }}>
                  85% - Excellent connectivity across all services
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ 
            borderRadius: 4,
            background: '#fff',
            boxShadow: '0 4px 20px rgba(211, 47, 47, 0.08)',
            border: '1px solid rgba(211, 47, 47, 0.08)',
          }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#333' }}>
                ⚡ Quick Actions
              </Typography>
              
              {[
                { label: 'Book Appointment', icon: <CalendarMonth />, color: '#d32f2f', path: '/patient/appointments' },
                { label: 'View Test Results', icon: <Science />, color: '#ff6659', path: '/patient/lab-reports' },
                { label: 'Refill Prescription', icon: <LocalHospital />, color: '#ff9800', path: '/patient/medical-records' },
                { label: 'Pay Bills', icon: <Receipt />, color: '#4caf50', path: '/patient/billing' },
              ].map((action, index) => (
                <Button
                  key={index}
                  fullWidth
                  variant="outlined"
                  startIcon={action.icon}
                  onClick={() => navigate(action.path)}
                  className="ripple-effect"
                  sx={{
                    mb: 1.5,
                    justifyContent: 'flex-start',
                    borderColor: `${action.color}30`,
                    color: action.color,
                    borderRadius: 3,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: action.color,
                      background: `${action.color}10`,
                      transform: 'translateX(4px) scale(1.02)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {action.label}
                </Button>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PatientDashboard;
