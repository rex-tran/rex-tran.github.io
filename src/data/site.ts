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
  'One sentence about who you are.',
  'What you are working on or studying now.',
  'Something you have done before, with <a href="#">a link to it</a>.',
];

export const links = [
  { label: 'GitHub', href: 'https://github.com/rex-tran' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Resume', href: '#' },
  { label: 'Email', href: '#' },
];

type Entry = {
  date: string; // Shown as written, for example "2026 Nov"
  title: string;
  href: string;
  extra?: { label: string; href: string }; // Small blue link after the title
};

// Newest first. The home page shows all of these.
export const projects: Entry[] = [
  {
    date: '2026 Nov',
    title: 'Your most recent project.',
    href: '#',
    extra: { label: 'code', href: '#' },
  },
  {
    date: '2026 Jan',
    title: 'An earlier project.',
    href: '#',
    extra: { label: 'demo', href: '#' },
  },
  { date: '2025 Jun', title: 'Another project.', href: '#' },
];

// Newest first.
export const writing: Entry[] = [
  { date: '2026 Nov', title: 'Title of something you wrote.', href: '#' },
  { date: '2026 Mar', title: 'Title of an earlier post.', href: '#' },
];
