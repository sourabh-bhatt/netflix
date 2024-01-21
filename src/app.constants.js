export const LOGO =
  'https://www.whatphone.net/wp-content/uploads/2019/05/Netflix-Logo.png'

export const USER_AVATAR =
  'https://avatars.githubusercontent.com/u/89153172?v=4'

export const LOGIN_BG =
  'https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'

export const ALT_TEXT = 'background image home page'

export const TMDB_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
}

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500'

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hi', name: 'Hindi' },
  { identifier: 'gu', name: 'Gujarati' },
  { identifier: 'te', name: 'Telugu' },
  { identifier: 'mr', name: 'Marathi' },
  { identifier: 'ta', name: 'Tamil' },
  { identifier: 'kn', name: 'Kannada' },
  { identifier: 'bn', name: 'Bengali' },
  { identifier: 'ml', name: 'Malayalam' },
  { identifier: 'pa', name: 'Punjabi' },
  { identifier: 'sa', name: 'Sanskrit' },
  { identifier: 'bh', name: 'Maithili' },
]
