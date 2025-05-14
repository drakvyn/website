import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getBlogPosts } from '../lib/sanity/client';
import './directlinks-overlay.css';

// Component for blog cards
function BlogCard({ post }) {
  // Format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <motion.article 
      className="bg-[#181924] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <a href={`/blog/${post.slug.current}`} className="block">
        <div className="relative h-48 bg-[#12131c] overflow-hidden">
          {post.mainImage?.asset?.url ? (
            <img 
              src={post.mainImage.asset.url} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-3xl">📝</span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#181924] to-transparent h-1/4" />
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-sm text-zinc-400">{formatDate(post.publishedAt)}</span>
            {post.categories && post.categories.length > 0 && (
              <div className="ml-auto flex gap-2">
                {post.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs bg-[#12131c] text-zinc-400 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <h3 className="text-2xl font-squada text-white tracking-wide mb-3">
            {post.title}
          </h3>
          
          {post.excerpt && (
            <p className="text-zinc-400 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          )}
          
          <div className="flex items-center mt-6">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-[#12131c] flex items-center justify-center">
              <span className="text-lg">👤</span>
            </div>
            <span className="text-zinc-300 text-sm">
              Jean Roa
            </span>
            
            <div className="ml-auto">
              <span className="text-[#6e7bff] font-semibold text-sm">Read more</span>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await getBlogPosts(3);
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Placeholder posts for when we're loading or there's an error
  const placeholderPosts = [
    {
      _id: '1',
      title: 'How to Create Fluid Animations with Framer Motion',
      slug: { current: 'animations-framer-motion' },
      publishedAt: new Date().toISOString(),
      excerpt: 'Learn how to create impressive and fluid animations for your websites using the Framer Motion library.',
      mainImage: { asset: { url: '/placeholder-blog-1.jpg' } },
      categories: ['Web Development', 'React']
    },
    {
      _id: '2',
      title: 'Performance Optimization in Modern Websites',
      slug: { current: 'web-performance-optimization' },
      publishedAt: new Date().toISOString(),
      excerpt: 'Techniques and strategies to improve the speed and performance of your website.',
      mainImage: { asset: { url: '/placeholder-blog-2.jpg' } },
      categories: ['Performance', 'Web']
    },
    {
      _id: '3',
      title: 'UI/UX Design for Developers',
      slug: { current: 'ui-ux-design-for-developers' },
      publishedAt: new Date().toISOString(),
      excerpt: 'Practical guide for developers to improve their UI/UX design skills.',
      mainImage: { asset: { url: '/placeholder-blog-3.jpg' } },
      categories: ['Design', 'UI/UX']
    }
  ];

  // Use placeholders if loading or there's an error
  const displayPosts = loading || error || posts.length === 0 ? placeholderPosts : posts;

  return (
    <section className="py-24 w-full bg-[#0e0e16]">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-squada text-white relative text-6xl md:text-8xl tracking-wide">
            <motion.span 
              className="text-overlay inline-block"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              BLOG
            </motion.span>
          </h2>
          <motion.p
            className="text-lg text-zinc-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Articles, tutorials, and resources about web development, design, and technology.
          </motion.p>
        </motion.div>

        {error && (
          <div className="text-center text-red-500 mb-8">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map(post => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a 
            href="/blog" 
            className="inline-block px-8 py-4 bg-[#181924] text-white text-xl font-semibold rounded-lg hover:bg-[#6e7bff] transition-colors duration-300"
          >
            VIEW ALL ARTICLES
          </a>
        </motion.div>
      </div>
    </section>
  );
} 