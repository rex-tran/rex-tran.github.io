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
  'Hello, I am Rex. I am a current undergraduate student at Princeton University.',
  'I work with the Kreike Lab on researching machine learning models to better understand historical aerial data of Africa.',
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
  extra?: { label: string; href: string }; // Small blue link after the title
};

// Newest first. The home page shows all of these.
export const projects: Entry[] = [
  { date: '2026 Nov', title: 'Pairatech.', href: 'https://pairatech.vercel.app/pre-arrival' },
];

// Newest first. Leave out href for an entry that isn't published yet.
export const writing: Entry[] = [{ date: '2026 Nov', title: 'In progress.' }];
