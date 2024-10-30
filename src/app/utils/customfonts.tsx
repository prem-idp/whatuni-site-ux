import customFonts from "next/font/local"

// Method 1
export const farroMedium = customFonts({
  src: [
      {path: '../../../public/assets/fonts/Farro-Medium.woff'},
      {path: '../../../public/assets/fonts/Farro-Medium.woff2'}],
    weight: '500',
    fallback: ['sans-serif'],
    variable: "--farro-medium",
    display: 'swap',
});
export const farroBold = customFonts({
  src: [
    {path: '../../../public/assets/fonts/Farro-Bold.woff'},
    {path: '../../../public/assets/fonts/Farro-Bold.woff2'}],
    weight: '700',
    fallback: ['sans-serif'],
    variable: "--farro-bold",
    display: 'swap',
});
export const interRegular = customFonts({
  src: [
    {path: '../../../public/assets/fonts/Inter-Regular.woff'},
    {path: '../../../public/assets/fonts/Inter-Regular.woff2'}],
    weight: '400',
    fallback: ['sans-serif'],
    variable: "--inter-regular",
    display: 'swap',
});
export const interSemibold = customFonts({
  src: [
    {path: '../../../public/assets/fonts/Inter-SemiBold.woff'},
    {path: '../../../public/assets/fonts/Inter-SemiBold.woff2'}],
    weight: '600',
    fallback: ['sans-serif'],
    variable: "--inter-semibold",
    display: 'swap',
});
export const interBold = customFonts({
  src: [
    {path: '../../../public/assets/fonts/Inter-Bold.woff'},
    {path: '../../../public/assets/fonts/Inter-Bold.woff2'}],
    weight: '700',
    fallback: ['sans-serif'],
    variable: "--inter-bold",
    display: 'swap',
});

// Method 3
// import { Inter } from 'next/font/google'
 
// const inter = Inter({
//   weight: ['400', '600', '700'],
//   variable: '--font-inter',
// })

