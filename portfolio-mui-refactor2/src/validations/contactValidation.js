import * as Yup from "yup";

const msgMakerForReq = (title) => {
  return `وارد کردن ${title} الزامی میباشد.`;
};

export const contactValidationSchema = Yup.object().shape({
  fullname: Yup.string().required(msgMakerForReq("نام و نام خانوادگی")),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("آدرس ایمیل الزامی می باشد"),
  subject: Yup.string().required(msgMakerForReq("عنوان")),
  message: Yup.string().required(msgMakerForReq("پیام")),
  recaptcha: Yup.string().required(msgMakerForReq("کپچا")),
});
