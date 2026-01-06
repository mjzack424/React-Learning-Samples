import { useState, useEffect } from "react";
import { Typography, Avatar } from "@mui/material";
import { RandomReveal } from "react-random-reveal";

import { persianAlphabet } from "../../constants/persianAlphabet";
import ThemeActionButton from "../ThemeActionButton";
import { SocialMediaInfo } from "../pages";

const SidebarHeader = ({ name, mysummary }) => {
  const [imageError, setImageError] = useState(false);
  const [profImage, setProfImage] = useState(null);
  const [show, setShow] = useState(false);
  // حروف اولیه نام برای fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  useEffect(() => {
    const loadImage = async () => {
      try {
        // dynamic import – اگر فایل نبود، ارور می‌ده اما catch می‌شه
        const image = await import("../../assets/images/prof1.jpg"); //TZT
        setProfImage(image.default);
      } catch (err) {
        // فایل پیدا نشد → fallback رو فعال کن
        console.warn("تصویر پروفایل پیدا نشد، از fallback استفاده می‌شود.");
        setImageError(true);
      }
    };

    const timer = setTimeout(() => {
      setShow(true);
    }, 350);

    loadImage();
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ThemeActionButton />
      <Avatar
        alt="تصویر پروفایل محمد جواد ذاکریان"
        title={"تصویر پروفایل"}
        src={imageError ? undefined : profImage}
        onError={() => setImageError(true)} // وقتی تصویر لود نشد، حالت رو تغییر بده
        variant="rounded"
        sx={{
          width: "80%", // حداکثر ۸۰٪ عرض sidebar
          height: "auto", // نسبت حفظ بشه
          maxWidth: 200, // بیشتر از ۲۰۰ نشه
          mx: "auto",
          my: 2,
        }}
      >
        {imageError ? initials : null}{" "}
        {/* اگر تصویر نبود، حروف اولیه رو نشون بده */}
      </Avatar>
      <Typography variant="h6">
        <RandomReveal
          isPlaying
          duration={1}
          characterSet={persianAlphabet}
          characters={name}
        />
      </Typography>
      <Typography variant="caption">{mysummary}</Typography>
      <SocialMediaInfo show={show} />
    </>
  );
};

export default SidebarHeader;
