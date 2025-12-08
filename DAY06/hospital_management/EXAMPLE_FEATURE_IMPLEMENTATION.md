# 📝 Example: Complete Feature Implementation

## Building the "Appointment Booking" Feature

This guide shows you how to build a complete feature from scratch using the established architecture.

---

## Step 1: Create the Component

### File: `src/features/appointments/AppointmentBooking.jsx`

```jsx
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Typography,
  Alert,
  Grid,
} from '@mui/material';
import { appointmentSchema } from '../../utils/validation';
import { appointmentService } from '../../services/appointmentService';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const AppointmentBooking = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });

  useEffect(() => {
    // Fetch doctors list
    const fetchDoctors = async () => {
      try {
        // const data = await doctorService.getAll();
        // setDoctors(data);
        
        // Mock data for now
        setDoctors([
          { id: 1, name: 'Dr. Smith', specialization: 'Cardiology' },
          { id: 2, name: 'Dr. Johnson', specialization: 'Neurology' },
        ]);
      } catch (err) {
        setError('Failed to load doctors');
      }
    };
    fetchDoctors();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError('');
      await appointmentService.create(data);
      setSuccess('Appointment booked successfully!');
      reset();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to book appointment');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Book Appointment
      </Typography>

      <Card sx={{ mt: 3, maxWidth: 600 }}>
        <CardContent>
          {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Select Doctor"
                  {...register('doctorId')}
                  error={!!errors.doctorId}
                  helperText={errors.doctorId?.message}
                >
                  {doctors.map((doctor) => (
                    <MenuItem key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialization}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date"
                  InputLabelProps={{ shrink: true }}
                  {...register('date')}
                  error={!!errors.date}
                  helperText={errors.date?.message}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="time"
                  label="Time"
                  InputLabelProps={{ shrink: true }}
                  {...register('time')}
                  error={!!errors.time}
                  helperText={errors.time?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Reason for Visit"
                  {...register('reason')}
                  error={!!errors.reason}
                  helperText={errors.reason?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                >
                  Book Appointment
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AppointmentBooking;
```

---

## Step 2: Add Validation Schema

### File: `src/utils/validation.js` (Add to existing file)

```javascript
export const appointmentSchema = yup.object({
  doctorId: yup.string().required('Doctor is required'),
  date: yup
    .date()
    .min(new Date(), 'Date must be in the future')
    .required('Date is required'),
  time: yup.string().required('Time is required'),
  reason: yup
    .string()
    .min(10, 'Please provide more details')
    .required('Reason is required'),
});
```

---

## Step 3: Create Service Methods

### File: `src/services/appointmentService.js` (Already created)

```javascript
import api from './api';

export const appointmentService = {
  create: async (appointmentData) => {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  },

  getAll: async (params) => {
    const response = await api.get('/appointments', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/appointments/${id}`);
    return response.data;
  },

  cancel: async (id) => {
    const response = await api.patch(`/appointments/${id}/cancel`);
    return response.data;
  },
};
```

---

## Step 4: Add Route

### File: `src/routes/AppRouter.jsx` (Update existing)

```jsx
import AppointmentBooking from '../features/appointments/AppointmentBooking';

// Inside Patient routes
<Route path="/patient/*" element={
  <ProtectedRoute allowedRoles={[USER_ROLES.PATIENT]}>
    <DashboardLayout>
      <Routes>
        <Route path="dashboard" element={<PatientDashboard />} />
        <Route path="appointments" element={<AppointmentBooking />} />
        {/* ... other routes */}
      </Routes>
    </DashboardLayout>
  </ProtectedRoute>
} />
```

---

## Step 5: Update Sidebar (Already Done)

The sidebar already has the appointments link. When clicked, it will navigate to the new page.

---

## Step 6: Add Redux State (Optional)

If you need global state for appointments:

### File: `src/store/slices/appointmentSlice.js`

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAppointments: (state, action) => {
      state.appointments = action.payload;
    },
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setAppointments, addAppointment, setLoading, setError } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
```

### Update Store: `src/store/index.js`

```javascript
import appointmentReducer from './slices/appointmentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    appointments: appointmentReducer, // Add this
  },
});
```

---

## Step 7: Create Appointment List Component

### File: `src/features/appointments/AppointmentList.jsx`

```jsx
import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { appointmentService } from '../../services/appointmentService';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      // const data = await appointmentService.getAll();
      // setAppointments(data);
      
      // Mock data
      setAppointments([
        {
          id: 1,
          doctor: 'Dr. Smith',
          date: '2024-01-15',
          time: '10:00 AM',
          status: 'confirmed',
        },
        {
          id: 2,
          doctor: 'Dr. Johnson',
          date: '2024-01-20',
          time: '2:00 PM',
          status: 'pending',
        },
      ]);
    } catch (error) {
      console.error('Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      confirmed: 'success',
      pending: 'warning',
      cancelled: 'error',
    };
    return colors[status] || 'default';
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Appointments
      </Typography>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Doctor</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.doctor}</TableCell>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>
                      <Chip
                        label={appointment.status}
                        color={getStatusColor(appointment.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AppointmentList;
```

---

## Step 8: Create Reusable Table Component

### File: `src/components/tables/DataTable.jsx`

```jsx
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';
import { useState } from 'react';

const DataTable = ({ columns, data, onRowClick }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={index}
                  hover
                  onClick={() => onRowClick && onRowClick(row)}
                  sx={{ cursor: onRowClick ? 'pointer' : 'default' }}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      {column.render
                        ? column.render(row[column.id], row)
                        : row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
```

---

## 🎯 Pattern Summary

### Every Feature Should Have:

1. **Component** (`features/[module]/[Feature].jsx`)
   - UI logic
   - Form handling
   - Local state

2. **Service** (`services/[module]Service.js`)
   - API calls
   - Data transformation

3. **Validation** (`utils/validation.js`)
   - Yup schemas
   - Input sanitization

4. **Route** (`routes/AppRouter.jsx`)
   - Protected route
   - Role-based access

5. **Redux Slice** (Optional - `store/slices/[module]Slice.js`)
   - Global state
   - Actions & reducers

---

## 🚀 Quick Implementation Checklist

- [ ] Create component file
- [ ] Add validation schema
- [ ] Create/update service methods
- [ ] Add route to AppRouter
- [ ] Update sidebar menu (if needed)
- [ ] Add Redux slice (if needed)
- [ ] Test with mock data
- [ ] Connect to real API
- [ ] Add error handling
- [ ] Add loading states

---

## 💡 Best Practices Applied

✅ **Separation of Concerns**: UI, logic, and data are separated
✅ **Reusability**: Components can be reused across features
✅ **Validation**: Client-side validation before API calls
✅ **Error Handling**: User-friendly error messages
✅ **Loading States**: Better UX with loading indicators
✅ **Type Safety**: Consistent data structures
✅ **Security**: Input sanitization and validation

---

## 🎓 Next Features to Build

Use this same pattern for:
- Patient Registration
- Doctor Schedule Management
- Billing Invoice Generation
- Lab Report Upload
- Prescription Management
- Medical Records Viewer

**Happy Coding! 🚀**
