import { projects } from '../data/projects';
import Projects from '../components/Projects';
import Link from 'next/link';

const categoryMap = {
  'web-projects': 'Web Applications',
  'mobile-projects': 'Mobile Apps',
  'desktop-projects': 'Desktop Applications',
};

export default async function CategoryPage(props) {
  const { category } = await props.params;
  const categoryKey = categoryMap[category];
  const categoryProjects = projects[categoryKey] || [];

  return (
    <main style={{ padding: '2rem', position: 'relative' }}>
      {/* Home icon button at top right */}
      <Link
        href="/"
        aria-label="Go to Home"
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          background: 'rgba(255,255,255,0.8)',
          borderRadius: '50%',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          zIndex: 10,
          transition: 'background 0.2s',
        }}
        className="hover:bg-white"
      >
        {/* Home SVG icon */}
        <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 12L12 4l9 8" />
          <path d="M9 21V9h6v12" />
        </svg>
      </Link>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{categoryKey || 'Projects'}</h1>
      {categoryProjects.length > 0 ? (
        <Projects projects={categoryProjects} />
      ) : (
        <p>No projects found for this category.</p>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { category: 'web-projects' },
    { category: 'mobile-projects' },
    { category: 'desktop-projects' },
  ];
}