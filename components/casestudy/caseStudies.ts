export interface StatLine {
  /** Highlighted metric, e.g. "40K+". Omit for a plain outcome line. */
  value?: string;
  label: string;
}

export interface CaseStudy {
  /** Filter-chip label used by the landing-page section. */
  chip: string;
  category: string;
  year: string;
  title: string;
  /** Only set when a dedicated detail page (or relevant destination) exists. */
  href?: string;
  logo?: string;
  /** Omitted when there is no meaningful "before" state to show. */
  beforeImage?: string;
  afterImage: string;
  stats: StatLine[];
  descriptions: string[];
  /** Shown in the landing-page case studies section. */
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    chip: 'Healthcare',
    category: 'Documentary + Short form',
    year: '2026',
    title: 'Aadicura Hospital',
    href: '/case-studies/aadicura-hospital',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933519/Aadicura_1.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931648/Aadicura_hospital__1.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931931/Aadicura_hospital_1.png',
    stats: [
      { value: '40K+', label: 'Instagram followers organically built' },
      { value: '54K+', label: 'YouTube subscribers' },
      { value: '33M+', label: 'YouTube views' },
    ],
    descriptions: [
      'Built a stronger digital presence through educational healthcare, service-based and patient case-study content. Increased audience trust, digital visibility, engagement, and awareness for the hospital and its services.',
      'Built a strong YouTube presence for Aadicura through educational and informational healthcare content. Used service-based videos to create awareness around hospital offerings and patient case-study content to build trust.',
    ],
    featured: true,
  },
  {
    chip: 'Cosmetic Surgery',
    category: 'Personal Branding + Content',
    year: '2026',
    title: 'Dr. Mithun Panchal',
    href: '/portfolio',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933512/Dr._Mithun_Panchal_1.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931638/Dr._MithunPanchal__1.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931924/Dr._Mithun_Panchal.png',
    stats: [
      { value: '165K+', label: 'Instagram followers' },
      { value: '419K+', label: 'YouTube subscribers' },
      { value: '350M+', label: 'YouTube views' },
    ],
    descriptions: [
      'Built a highly recognizable plastic and cosmetic surgery presence through culturally disruptive short-form content. Used celebrity surgery breakdowns, curiosity-led storytelling, and educational content to expand reach while building Dr. Mithun’s authority and personal brand on Instagram.',
      'Built Dr. Mithun into a leading digital voice in plastic and cosmetic surgery through curiosity-driven, culturally relevant content — earning a Silver Play Button within 6 months. Introduced celebrity plastic surgery breakdowns in India and developed a content format that combined education, entertainment, and high audience retention.',
    ],
    featured: true,
  },
  {
    chip: 'Architecture',
    category: 'Architecture + Interiors',
    year: '2026',
    title: 'MS Design Studio',
    href: '/portfolio',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933159/MS_Design_Studio_1.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931917/MS_Design_Studio.png',
    stats: [
      { value: '43K+', label: 'Instagram followers organically built' },
      { value: '60M+', label: 'views in 6 months' },
      { value: '1.5M+', label: 'total YouTube views' },
    ],
    descriptions: [
      'Built stronger authority and visibility for the architecture brand, positioning it for stronger engagement with premium clients.',
      'Built a dedicated long-form content ecosystem around architecture and interiors — starting with 80K+ views on the first long-form video — using cinematic, documentary-style storytelling and high-search-intent topics to attract audiences actively looking for design services.',
    ],
    featured: true,
  },
  {
    chip: 'Architecture',
    category: 'Architecture + Short form',
    year: '2026',
    title: 'The Crossed Boundaries',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933155/The_Cross_Boundaries_2.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931632/ChatGPT_Image_Aug_14_2026_12_50_08_PM.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931915/The_Cross_Boundaries_1.png',
    stats: [
      { value: '57K+', label: 'Instagram followers' },
      { value: '232K+', label: 'views in the first 9 days' },
    ],
    descriptions: [
      'Built stronger authority for the architecture brand beyond purely aesthetic content. Combined educational storytelling with project insights and design decisions to increase reach, engagement, trust, and positioning within the architecture space.',
    ],
  },
  {
    chip: 'Healthcare',
    category: 'Personal Branding + Long form',
    year: '2026',
    title: 'Dr. Sumit Kapadia',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933159/Dr._Sumit_Kapadia_2.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931633/Dr._Sumit_Kapadia_.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931917/Dr._Sumit_Kapadia.png',
    stats: [
      { value: '375K+', label: 'YouTube subscribers' },
      { value: '52M+', label: 'YouTube views' },
      { value: '95K+', label: 'Instagram followers' },
    ],
    descriptions: [
      'Built a highly visible digital presence in the niche field of vascular surgery. Started with simple awareness topics and gradually expanded into complex vascular subjects, establishing Dr. Sumit as a go-to digital destination for vascular health information.',
      'Created high-volume educational content, starting with simple awareness topics and gradually moving into more complex vascular subjects — positioning Dr. Sumit as a trusted and recognizable voice for vascular health information on Instagram.',
    ],
  },
  {
    chip: 'Healthcare',
    category: 'Personal Branding + Short form',
    year: '2026',
    title: 'Dr. Drashti Shah',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933512/Dr._Drashti_Shah.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931639/Dr._Drashti_Shah__1.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931925/Dr._Drashti_Shah_2.png',
    stats: [
      { value: '4.5K → 40.3K+', label: 'Instagram followers in less than 4 months' },
      { value: '15M+', label: 'views' },
    ],
    descriptions: [
      'Positioned Dr. Drashti as a stronger digital voice in fascia and physiotherapy. Simplified fascia-related topics through educational short-form content while consistently building authority, trust, and organic audience growth.',
    ],
  },
  {
    chip: 'Healthcare',
    category: 'Personal Branding + Short form',
    year: '2026',
    title: 'Dr. Nachiket Kaneria',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933201/Dr._Nachiket_Kaneria_1.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931637/Dr._Nachiket_Kaneria_.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931922/Dr._Nachiket_Kaneria.png',
    stats: [
      { value: '1M+', label: 'views within 2 months' },
      { label: 'Went viral by the 5th video' },
    ],
    descriptions: [
      'Built early traction across Instagram and YouTube through educational healthcare content. Simplified complex interventional radiology topics for wider audiences while combining authority-driven storytelling with platform-native content formats.',
    ],
  },
  {
    chip: 'Healthcare',
    category: 'Cosmetic Dentistry + Content',
    year: '2026',
    title: 'Dr. Preay Mehta',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933162/Dr._Preay_Mehta_1.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931636/Dr._Preay_Mehta__1.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931920/Dr._Preay_Mehta.png',
    stats: [
      { value: '23.3K+', label: 'Instagram followers in 8 months' },
      { value: '15M+', label: 'views' },
      { label: 'Multiple viral celebrity breakdown videos' },
    ],
    descriptions: [
      'Built Dr. Preay’s digital presence around cosmetic dentistry through celebrity smile transformations, educational content, and strong before-and-after storytelling. The strategy balanced virality with patient trust and credibility while attracting views and patient inquiries.',
    ],
  },
  {
    chip: 'Healthcare',
    category: 'Neuroscience + Short form',
    year: '2026',
    title: 'Dr. Sandip Mavani',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933160/Dr._Sandip_Mavani_1.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931634/Dr._Sandip_Mavani_.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931919/Dr._Sandip_Mavani.png',
    stats: [
      { value: '70M+', label: 'Instagram views' },
      { value: '49K+', label: 'Instagram followers' },
    ],
    descriptions: [
      'Built a fast-growing neuroscience-focused digital presence by combining trending topics, psychology-driven storytelling, and simplified medical education. Used hook-driven content and Gen-Z relatability to increase reach and retention.',
    ],
  },
  {
    chip: 'Fashion',
    category: 'Fashion + Campaign Films',
    year: '2026',
    title: 'EOS Couture',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_crop,x_67,y_195,w_440,h_440/w_240,f_auto,q_auto/v1790933697/EOS_Couture_1.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790933697/EOS_Couture_1.png',
    stats: [
      { value: '93K+', label: 'Instagram followers' },
      { label: 'Built a stronger premium fashion identity through visually elevated campaigns' },
    ],
    descriptions: [
      'Produced premium fashion shoots and branded campaigns focused on styling, mood, and visual storytelling. Created content specifically for modern fashion audiences to strengthen brand recall, engagement, and overall digital appeal.',
    ],
  },
  {
    chip: 'Healthcare',
    category: 'Psychology + Short form',
    year: '2026',
    title: 'Dr. Dhruti Anklesaria',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933518/Dr_Dhruti_Anklesaria_1.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931643/Dr_Dhruti_Anklesaria__2.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931929/Dr_Dhruti_Anklesaria.png',
    stats: [
      { value: '40K+', label: 'followers in 4 months' },
      { label: 'Built a highly relatable psychology-focused digital presence' },
    ],
    descriptions: [
      'Used movie scenes, pop-culture references, and educational storytelling to simplify complex emotional and psychological topics. The strategy focused on making educational content feel relatable while improving audience connection and retention.',
    ],
  },
  {
    chip: 'Healthcare',
    category: 'Personal Branding + Skincare',
    year: '2026',
    title: 'Dr. Aditya Shah',
    logo: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_auto,w_240,h_240,f_auto,q_auto/v1790933515/Dr._Aditya_Shah_1.png',
    beforeImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931641/Dr._Aditya_Shah_.png',
    afterImage: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_900/v1790931927/Dr._Aditya_Shah.png',
    stats: [
      { value: '84K+', label: 'Instagram followers' },
      { value: '28K+', label: 'YouTube subscribers' },
      { value: '2.1M+', label: 'YouTube views' },
    ],
    descriptions: [
      'Built Dr. Aditya’s personal brand alongside the digital presence of Aura Laser Clinic. Combined educational, reaction, and rating-based content with personality-driven storytelling to make skincare and treatment topics more engaging and accessible.',
    ],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
