/**
 * Everything served from the Cloudinary account `fhwvxdg0`, shared by the
 * landing page and the portfolio page. `id` is always the asset's version
 * plus public id; the helpers below turn it into a delivery URL.
 */
const VIDEO = 'https://res.cloudinary.com/fhwvxdg0/video/upload';
const IMAGE = 'https://res.cloudinary.com/fhwvxdg0/image/upload';

export const videoUrl = (id: string) => `${VIDEO}/${id}.mp4`;
/** Still frame used until the video scrolls into view. */
export const posterUrl = (id: string, width: number, second = 0) => `${VIDEO}/so_${second},w_${width},c_limit,q_auto,f_jpg/${id}.jpg`;
export const imageUrl = (id: string, width = 1000) => `${IMAGE}/f_auto,q_auto,w_${width}/${id}.png`;

/** Folder "INSTAGRAM REELS", in the folder's own numbered order. Titles follow the file names. */
export const reels = [
  { id: 'v1790856177/1_Ayushi_Founder_Ayu_s_Clairveda_Cinematic_Ad', badge: 'Instagram Reel', title: "Ayushi | Founder Ayu's Clairveda", subtitle: 'Cinematic Ad' },
  { id: 'v1790856174/2_Dr_Sumit_Kapadia_Vascular_Surgeon_3.6M_Views_380K_Subscribers', badge: 'YouTube Short', title: 'Dr Sumit Kapadia | Vascular Surgeon', subtitle: '3.6M Views | 380K Subscribers' },
  { id: 'v1790856172/3_Rajvi_Co-Founder_Marca_Creatives_Cinematic_Ad', badge: 'Instagram Reel', title: 'Rajvi | Co-Founder Marca Creatives', subtitle: 'Cinematic Ad' },
  { id: 'v1790856170/4_Rajvi_Co-Founder_Marca_Creatives_Cinematic_Ad', badge: 'Instagram Reel', title: 'Rajvi | Co-Founder Marca Creatives', subtitle: 'Cinematic Ad' },
  { id: 'v1790856167/5_Dr_Sandip_Mavani_Neurosurgeon_5.7m_Views_49K_Followers', badge: 'Instagram Reel', title: 'Dr Sandip Mavani | Neurosurgeon', subtitle: '5.7M Views | 49K Followers' },
  { id: 'v1790856169/6_EOS_Couture_Ad_Campaign', badge: 'Instagram Reel', title: 'EOS Couture', subtitle: 'Ad Campaign' },
  { id: 'v1790856162/7_Frenzy_Couture_Fashion_Reels', badge: 'Instagram Reel', title: 'Frenzy Couture', subtitle: 'Fashion Reels' },
  { id: 'v1790856171/8_Vedang_Rathore_Creator_13M_Views', badge: 'Instagram Reel', title: 'Vedang Rathore | Creator', subtitle: '13M Views' },
  { id: 'v1790856158/9_TCB_Harsh_Boghani_624K_Views_57K_Followers', badge: 'Instagram Reel', title: 'TCB | Harsh Boghani', subtitle: '624K Views | 57K Followers' },
  { id: 'v1790856157/10_Nutty_Affair_Ad_Campaign', badge: 'Instagram Reel', title: 'Nutty Affair', subtitle: 'Ad Campaign' },
  { id: 'v1790856166/11_Nutty_Affair_Ad_Campaign', badge: 'Instagram Reel', title: 'Nutty Affair', subtitle: 'Ad Campaign' },
  { id: 'v1790856150/13_Dr._Aditya_Shah_Dermatologist_3M_Views_85K_Followers', badge: 'Instagram Reel', title: 'Dr. Aditya Shah | Dermatologist', subtitle: '3M Views | 85K Followers' },
  { id: 'v1790856149/14_Dr_Mithun_Panchal_Plastic_Surgeon_19M_Views_419K_Followers', badge: 'Instagram Reel', title: 'Dr Mithun Panchal | Plastic Surgeon', subtitle: '19M Views | 419K Followers' },
  { id: 'v1790856176/15_Aadicura_Hospital_43M_Views_1.2M_Likes', badge: 'Instagram Reel', title: 'Aadicura Hospital', subtitle: '43M Views | 1.2M Likes' },
  { id: 'v1790856159/16_Dr_Yuvraj_Jadeja_Gynecologist_7.6M_Views', badge: 'Instagram Reel', title: 'Dr Yuvraj Jadeja | Gynecologist', subtitle: '7.6M Views' },
  { id: 'v1790856157/17_Amrutansh_Finance_Creator_380K_Views', badge: 'Instagram Reel', title: 'Amrutansh | Finance Creator', subtitle: '380K Views' },
  { id: 'v1790856155/18_Payal_Shah_Makeup_Artist_5.6M_Views', badge: 'Instagram Reel', title: 'Payal Shah | Makeup Artist', subtitle: '5.6M Views' },
  { id: 'v1790856152/19_Dr_Dhruti_Psychologist_11.6M_Views', badge: 'Instagram Reel', title: 'Dr Dhruti | Psychologist', subtitle: '11.6M Views' },
  { id: 'v1790856152/20_Dr_Devendra_Oncologist_783K_Views', badge: 'Instagram Reel', title: 'Dr Devendra | Oncologist', subtitle: '783K Views' },
  { id: 'v1790856146/21_Dr_Preay_Mehta_Dentist_2.9M_Views_23K_Followers', badge: 'Instagram Reel', title: 'Dr Preay Mehta | Dentist', subtitle: '2.9M Views | 23K Followers' },
  { id: 'v1790856165/22_Dr._Nachiket_Kaneria_Interventional_Radiologist_490K_Views', badge: 'Instagram Reel', title: 'Dr. Nachiket Kaneria | Interventional Radiologist', subtitle: '490K Views' },
];

/**
 * Folder "YOUTUBE LONG VIDEOS", in the folder's numbered order. The file
 * names only carry the client, so a film has a title line and a description
 * only where there is one video for that client to match.
 */
export interface Film {
  id: string;
  category: string;
  title: string;
  titleSerif?: string;
  desc?: string;
}

export const films: Film[] = [
  {
    id: 'v1790857297/1_Vedang_Rathore',
    category: 'Storytelling — Documentary',
    title: 'Vedang Rathore',
    titleSerif: 'The Dhurandhar Story',
    desc: "The true story of Major Mohit Sharma — the spy who infiltrated Kashmir's deadliest terror network.",
  },
  { id: 'v1790857306/2_MS_Design_Studio', category: 'Architecture — Documentary', title: 'MS Design Studio' },
  { id: 'v1790860111/3_MS_Design_Studio', category: 'Architecture — Documentary', title: 'MS Design Studio' },
  { id: 'v1790860112/4_MS_Design_Studio', category: 'Architecture — Documentary', title: 'MS Design Studio' },
  { id: 'v1790860102/5_Dr._Sumit_Kapadia', category: 'Healthcare — Long Form', title: 'Dr. Sumit Kapadia' },
  { id: 'v1790860218/6_Dr._Sumit_Kapadia', category: 'Healthcare — Long Form', title: 'Dr. Sumit Kapadia' },
  { id: 'v1790860117/7_Dr._Sumit_Kapadia', category: 'Healthcare — Long Form', title: 'Dr. Sumit Kapadia' },
  {
    id: 'v1790860100/8_Dr_Mithun_Panchal',
    category: 'Healthcare — Long Form',
    title: 'Dr Mithun Panchal',
    titleSerif: 'The Shah Rukh Khan Hair Secret',
    desc: "A hair transplant specialist breaks down the real, unglamorous reason Bollywood's biggest star still has thick hair at 60.",
  },
  {
    id: 'v1790860089/9_Dr._Surbhi_Kapadia',
    category: 'Healthcare — Long Form',
    title: 'Dr. Surbhi Kapadia',
    titleSerif: 'The Xanthelasma Truth',
    desc: 'Yellow patches around the eyes can be an early warning sign of high cholesterol — the truth about Xanthelasma.',
  },
];

export interface PortfolioShot {
  /** Numbered sub-folder the image sits in. */
  set: number;
  id: string;
  width: number;
  height: number;
}

/** Folder "PORTFOLIO/1. FASHION SHOOT", sub-folders 1–6. */
export const fashionShoots: PortfolioShot[] = [
  { set: 1, id: 'v1790857280/ChatGPT_Image_Jul_17_2026_02_47_38_PM', width: 1122, height: 1402 },
  { set: 1, id: 'v1790857278/ChatGPT_Image_Jul_17_2026_02_49_00_PM', width: 1122, height: 1402 },
  { set: 1, id: 'v1790857276/ChatGPT_Image_Jul_17_2026_02_52_14_PM', width: 1122, height: 1402 },
  { set: 1, id: 'v1790857276/ChatGPT_Image_Jul_17_2026_02_49_08_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790857363/ChatGPT_Image_Jul_17_2026_02_25_58_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790857362/ChatGPT_Image_Jul_17_2026_02_34_50_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790857361/ChatGPT_Image_Jul_17_2026_02_36_26_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790857360/ChatGPT_Image_Jul_17_2026_02_42_23_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790857359/ChatGPT_Image_Jul_17_2026_02_44_57_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790857558/ChatGPT_Image_Jul_16_2026_06_10_05_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790857556/ChatGPT_Image_Jul_16_2026_06_14_56_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790857554/ChatGPT_Image_Jul_16_2026_06_16_33_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790857553/ChatGPT_Image_Jul_16_2026_06_16_44_PM', width: 1122, height: 1402 },
  { set: 4, id: 'v1790857651/ChatGPT_Image_Jul_16_2026_06_26_24_PM', width: 1122, height: 1402 },
  { set: 4, id: 'v1790857649/ChatGPT_Image_Jul_17_2026_09_26_34_AM', width: 1122, height: 1402 },
  { set: 4, id: 'v1790857646/ChatGPT_Image_Jul_17_2026_09_31_55_AM', width: 1122, height: 1402 },
  { set: 4, id: 'v1790857644/ChatGPT_Image_Jul_17_2026_09_33_39_AM', width: 1122, height: 1402 },
  { set: 4, id: 'v1790857642/ChatGPT_Image_Jul_17_2026_09_34_58_AM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790857833/ChatGPT_Image_Jul_16_2026_05_41_45_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790857829/ChatGPT_Image_Jul_16_2026_05_44_31_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790857827/ChatGPT_Image_Jul_16_2026_05_45_48_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790857824/ChatGPT_Image_Jul_16_2026_05_49_43_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790857823/ChatGPT_Image_Jul_16_2026_05_51_43_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790857822/ChatGPT_Image_Jul_16_2026_05_51_47_PM', width: 1122, height: 1402 },
  { set: 6, id: 'v1790858055/ChatGPT_Image_Aug_12_2026_01_54_28_PM', width: 1122, height: 1402 },
  { set: 6, id: 'v1790858053/ChatGPT_Image_Aug_12_2026_01_55_37_PM', width: 1122, height: 1402 },
  { set: 6, id: 'v1790858050/ChatGPT_Image_Aug_12_2026_02_04_15_PM', width: 1122, height: 1402 },
  { set: 6, id: 'v1790858049/ChatGPT_Image_Aug_12_2026_02_24_35_PM', width: 1122, height: 1402 },
  { set: 6, id: 'v1790858048/ChatGPT_Image_Aug_12_2026_02_05_25_PM', width: 1122, height: 1402 },
];

/** Folder "PORTFOLIO/2. PRODUCT SHOOT", sub-folders 1–5 (6 is empty). Byte-identical re-uploads in 1 are left out. */
export const productShoots: PortfolioShot[] = [
  { set: 1, id: 'v1790858688/ChatGPT_Image_Jul_27_2026_09_44_11_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858684/ChatGPT_Image_Jul_27_2026_09_45_24_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858682/ChatGPT_Image_Jul_27_2026_09_48_12_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858679/ChatGPT_Image_Jul_27_2026_09_49_57_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858651/ChatGPT_Image_Jul_27_2026_09_50_52_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858649/ChatGPT_Image_Jul_27_2026_09_52_17_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858646/ChatGPT_Image_Jul_27_2026_09_55_24_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858644/ChatGPT_Image_Jul_27_2026_09_55_29_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858641/ChatGPT_Image_Jul_27_2026_10_15_24_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858638/ChatGPT_Image_Jul_27_2026_10_16_27_AM_1', width: 1122, height: 1402 },
  { set: 1, id: 'v1790858635/ChatGPT_Image_Jul_27_2026_10_20_36_AM_1', width: 1122, height: 1402 },
  { set: 2, id: 'v1790858713/ChatGPT_Image_Jul_16_2026_06_02_05_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790858711/ChatGPT_Image_Jul_16_2026_06_04_49_PM', width: 1134, height: 1387 },
  { set: 2, id: 'v1790858708/ChatGPT_Image_Jul_16_2026_06_04_55_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790858765/ChatGPT_Image_Jul_16_2026_06_20_31_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790858762/ChatGPT_Image_Jul_16_2026_06_23_01_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790858760/ChatGPT_Image_Jul_16_2026_06_24_24_PM', width: 1122, height: 1402 },
  { set: 4, id: 'v1790858845/Gemini_Generated_Image_28uhp528uhp528uh', width: 1856, height: 2304 },
  { set: 4, id: 'v1790858837/Gemini_Generated_Image_4030ec4030ec4030', width: 1856, height: 2304 },
  { set: 4, id: 'v1790858835/Gemini_Generated_Image_fynbjufynbjufynb', width: 1856, height: 2304 },
  { set: 5, id: 'v1790858894/ChatGPT_Image_Jul_17_2026_02_54_45_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790858890/ChatGPT_Image_Jul_17_2026_02_53_32_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790858887/ChatGPT_Image_Jul_17_2026_02_53_37_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790858881/ChatGPT_Image_Jul_17_2026_02_57_52_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790858881/ChatGPT_Image_Jul_17_2026_02_54_49_PM', width: 1122, height: 1402 },
  { set: 5, id: 'v1790858879/ChatGPT_Image_Jul_17_2026_02_56_19_PM', width: 1122, height: 1402 },
];

/** Folder "PORTFOLIO/3. PACKAGING DESIGN", sub-folders 1–4. */
export const packagingDesigns: PortfolioShot[] = [
  { set: 1, id: 'v1790859073/ChatGPT_Image_Aug_20_2026_06_16_38_PM', width: 1086, height: 1448 },
  { set: 1, id: 'v1790859071/ChatGPT_Image_Aug_20_2026_06_16_44_PM', width: 1086, height: 1448 },
  { set: 1, id: 'v1790859069/ChatGPT_Image_Aug_20_2026_06_16_49_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790859103/ChatGPT_Image_Aug_20_2026_06_20_56_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790859100/ChatGPT_Image_Aug_20_2026_06_23_01_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790859096/ChatGPT_Image_Aug_20_2026_06_36_45_PM', width: 1122, height: 1402 },
  { set: 2, id: 'v1790859092/ChatGPT_Image_Aug_20_2026_06_40_49_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790859136/ChatGPT_Image_Aug_20_2026_06_44_34_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790859132/ChatGPT_Image_Aug_20_2026_06_46_37_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790859128/ChatGPT_Image_Aug_20_2026_06_50_27_PM', width: 1122, height: 1402 },
  { set: 3, id: 'v1790859124/ChatGPT_Image_Aug_20_2026_06_51_45_PM', width: 1065, height: 1477 },
  { set: 4, id: 'v1790859164/ChatGPT_Image_Aug_20_2026_07_13_39_PM', width: 1122, height: 1402 },
  { set: 4, id: 'v1790859161/ChatGPT_Image_Aug_20_2026_07_15_33_PM', width: 1122, height: 1402 },
  { set: 4, id: 'v1790859155/ChatGPT_Image_Aug_20_2026_07_30_40_PM', width: 1082, height: 1454 },
];
