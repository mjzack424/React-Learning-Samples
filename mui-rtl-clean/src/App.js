// src/App.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="منو">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            برنامه نمونه MUI با پشتیبانی کامل فارسی
          </Typography>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                فرم ورود اطلاعات
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="نام و نام خانوادگی"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="ایمیل"
                  type="email"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="پیام شما"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ mt: 2 }}
                >
                  ارسال
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                لیست موارد
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="مورد اول" secondary="توضیحات اضافی در اینجا" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="مورد دوم" secondary="توضیح مختصر" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="مورد سوم" secondary="اطلاعات دیگر" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            این برنامه با استفاده از React و Material UI ساخته شده و پشتیبانی کامل از جهت راست‌به‌چپ (RTL) و زبان فارسی دارد.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;