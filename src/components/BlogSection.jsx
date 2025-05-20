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
      className="bg-[#181924] rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <a href={`/blog/${post.slug.current}`} className="block">
        <div className="relative h-40 md:h-48 bg-[#12131c] overflow-hidden">
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
        
        <div className="p-4 md:p-6">
          <div className="flex flex-wrap items-center mb-3 md:mb-4 gap-2">
            <span className="text-xs md:text-sm text-zinc-400">{formatDate(post.publishedAt)}</span>
            {post.categories && post.categories.length > 0 && (
              <div className="flex gap-1 md:gap-2 flex-wrap">
                {post.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="px-2 py-0.5 md:py-1 text-xs bg-[#12131c] text-zinc-400 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <h3 className="text-xl md:text-2xl font-squada text-white tracking-wide mb-2 md:mb-3">
            {post.title}
          </h3>
          
          {post.excerpt && (
            <p className="text-sm md:text-base text-zinc-400 mb-3 md:mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          )}
          
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

  // Use placeholders if loading or there's an error
  const displayContent = loading ? (
    <div className="text-center py-12">
      <div className="inline-block animate-spin h-8 w-8 border-t-2 border-purple-500 rounded-full mb-4"></div>
      <p className="text-zinc-400">Loading...</p>
    </div>
  ) : error ? (
    <div className="text-center text-red-500 mb-8">
      {error}
    </div>
  ) : posts.length === 0 ? (
    <div className="text-center text-zinc-400 mb-8">
      No articles available at this time.
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
      {posts.map(post => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );

  return (
    <section className="py-12 md:py-24 w-full bg-[#0e0e16]">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-10 md:mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-squada text-white relative text-5xl sm:text-6xl md:text-8xl tracking-wide">
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
            className="text-base md:text-lg text-zinc-400 mt-3 md:mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Articles, tutorials, and resources about web development, design, and technology.
          </motion.p>
        </motion.div>

        {displayContent}

        <motion.div 
          className="mt-10 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a 
            href="/blog" 
            className="inline-block px-6 py-3 md:px-10 md:py-5 bg-white text-black text-xl md:text-2xl font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 text-overlay">VIEW ALL ARTICLES</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 