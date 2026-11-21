// All of the site's content lives here. Replace the placeholders with your own.

export const name = 'Rex Tran';

export const description = 'Personal website of Rex Tran.';

// Put your photo in public/ (a square image works best) and update this path.
export const photo = {
  src: 'pump-polaroid-v2.jpg',
  alt: 'Portrait of Rex Tran',
};

// Each string is one paragraph, and may contain simple HTML such as <a> links.
export const bio = [
  'Hi, my name is Rex and I am a student at Princeton.',
  'I work with the Kreike Lab on researching machine learning models to better understand historical aerial data of north-central Namibia.',
  'I am also a part of the TigerTales Blog Team.',
];

export const links = [
  { label: 'GitHub', href: 'https://github.com/rex-tran' },
  { label: 'Email', href: 'mailto:rt0391@princeton.edu' },
];

type Entry = {
  date: string; // Shown as written, for example "2026 Nov"
  title: string;
  href?: string; // Leave out to show the title as plain text
  extras?: { label: string; href: string }[]; // Small blue links after the title
};

// Newest first. The home page shows all of these.
export const projects: Entry[] = [
  {
    date: '2026 Nov',
    title: 'Pairatech.',
    href: 'https://pairatech.vercel.app/pre-arrival',
    extras: [{ label: 'devpost', href: 'https://devpost.com/software/pairatech' }],
  },
  {
    date: '2026 May',
    title: 'AI Exploration Lab Entry: How do LLMs handle poetic nuance?',
    href: 'https://ai-exploration-lab.vercel.app/posters/rex-tran.pdf',
  },
  {
    date: '2026 Apr',
    title: 'Vietnam Trail.',
    href: 'https://www.we-are-saigone.us/',
    extras: [
      { label: 'devpost', href: 'https://devpost.com/software/vietnam-trail' },
      {
        label: 'article',
        href: 'https://converge.ai/enter/blog/heritage-in-pixels-the-story-that-needed-to-be-built',
      },
    ],
  },
];

// Newest first. Leave out href for an entry that isn't published yet.
export const writing: Entry[] = [{ date: '2026 Nov', title: 'In progress.' }];
