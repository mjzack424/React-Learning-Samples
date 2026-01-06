import {
  Typography,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  CardActions,
  Button,
} from "@mui/material";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

import { contactValidationSchema } from "../../validations/contactValidation";

const ContactForm = ({ theme }) => {
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY; //process is global object on node
  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };
  const formike = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
    validationSchema: contactValidationSchema,
  });
  return (
    <form autoComplete="off" onSubmit={formike.handleSubmit}>
      <CardContent>
        <Grid container>
          <Grid width={1} size={12}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="نام و نام خانوادیگی"
                  name="fullname"
                  variant="outlined"
                  helperText={
                    formike.touched.fullname ? formike.errors.fullname : null
                  }
                  error={Boolean(
                    formike.touched.fullname && formike.errors.fullname
                  )}
                  value={formike.values?.fullname}
                  onChange={formike.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face6Rounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="پست الکترونیک"
                  name="email"
                  variant="outlined"
                  helperText={
                    formike.touched.email ? formike.errors.email : null
                  }
                  error={Boolean(formike.touched.email && formike.errors.email)}
                  value={formike.values?.email}
                  onChange={formike.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="عنوان"
                  name="subject"
                  variant="outlined"
                  helperText={
                    formike.touched.subject ? formike.errors.subject : null
                  }
                  error={Boolean(
                    formike.touched.subject && formike.errors.subject
                  )}
                  value={formike.values?.subject}
                  onChange={formike.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SubjectRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="پیام"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={6}
                  helperText={
                    formike.touched.message ? formike.errors.message : null
                  }
                  error={Boolean(
                    formike.touched.message && formike.errors.message
                  )}
                  value={formike.values?.message}
                  onChange={formike.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ alignItems: "start", flexDirection: "column" }}>
        <ReCAPTCHA
          sitekey={siteKey}
          theme={theme.palette.mode}
          hl="fa"
          onChange={(value) => {
            formike.setFieldValue("recaptcha", value);
          }}
        />
        {formike.errors.recaptcha && formike.touched.recaptcha && (
          <Typography variant="caption" color="error">
            {formike.errors.recaptcha}
          </Typography>
        )}
        <Button
          type="submit"
          color="success"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          ارسال پیام
        </Button>
      </CardActions>
    </form>
  );
};
export default ContactForm;