import Link from 'next/link';
import { getComponentsData } from './data';

export default async function BlogIndex() {
    const componentsData = await getComponentsData();

    return (
        <main style={{ padding: '2rem' }}>
            <h1>My Components</h1>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>

                {componentsData.map((item) => (
                    <div key={item.slug} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                        <div style={{ padding: '2rem', border: '1px solid #ddd', margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
                            {/* Render component preview without wrapping Link to avoid nested anchors */}
                            <item.component />
                        </div>
                        <Link href={`/blog/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </Link>
                    </div>
                ))}

            </div>
        </main>
    );
}