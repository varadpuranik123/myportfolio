import Link from 'next/link';
import { getComponentsData } from '../data';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params for Next.js 15
  const componentsData = await getComponentsData();
  const index = componentsData.findIndex(p => p.slug === slug);
  const item = componentsData[index];

  if (!item) return <div>Component Not Found</div>;

  const prev = componentsData[index - 1];
  const next = componentsData[index + 1];
  const ComponentToRender = item.component;

  return (
    <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
      <Link href="/blog">&larr; Back to List</Link>

      <h1>{item.name}</h1>
      <p>{item.description}</p>

      {/* Live Preview */}
      <div style={{ padding: '2rem', border: '1px solid #ddd', margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
        <ComponentToRender />
      </div>

      {/* Code Display */}
      <h3>Usage Code:</h3>
      <pre style={{ background: '#1e1e1e', color: '#f8f8f2', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
        <code>{item.usageCode}</code>
      </pre>

      <h3>Features:</h3>
      <ul>
        {item.features.map((feature, i) => <li key={i}>{feature}</li>)}
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
        {prev ? <Link href={`/blog/${prev.slug}`}>&larr; {prev.name}</Link> : <div />}
        {next ? <Link href={`/blog/${next.slug}`}>{next.name} &rarr;</Link> : <div />}
      </div>
    </main>
  );
}