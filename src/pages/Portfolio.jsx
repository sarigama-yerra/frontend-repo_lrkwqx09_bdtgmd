import { useEffect, useState } from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

export default function Portfolio(){
  const [items, setItems] = useState([]);
  const backend = import.meta.env.VITE_BACKEND_URL || '';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${backend}/api/projects`);
        if (!res.ok) throw new Error('Network');
        const data = await res.json();
        setItems(data.map(p => ({ title: p.title, tag: p.category, image: p.cover_image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' })));
      } catch (e) {
        // fallback to default items handled by component
      }
    };
    fetchProjects();
  }, [backend]);

  return (
    <div className="bg-black min-h-screen pt-28">
      <PortfolioGrid items={items} />
    </div>
  );
}
