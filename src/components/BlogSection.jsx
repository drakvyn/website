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
          
          <div className="flex items-center mt-4 md:mt-6">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-2 md:mr-3 bg-[#12131c] flex items-center justify-center">
              <span className="text-base md:text-lg">👤</span>
            </div>
            <span className="text-zinc-300 text-xs md:text-sm">
              Jean Roa
            </span>
            
            <div className="ml-auto">
              <span className="text-purple-700 font-semibold text-xs md:text-sm">Read more</span>
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
      title: 'Hardcoded blogpost',
      slug: { current: 'hardcoded' },
      publishedAt: new Date().toISOString(),
      excerpt: 'This is a hardcoded blog post',
      mainImage: { asset: { url: 'https://media.licdn.com/dms/image/v2/D4E22AQF8IIc_heTIcg/feedshare-shrink_800/B4EZaRyJwyGYAg-/0/1746202566470?e=1750291200&v=beta&t=GhuAYakLolKmZSd2T6X5uf3xpMtZShPww-pb4t6FEz8' } },
      categories: ['Web Development', 'React']
    },
  ];

  // Use placeholders if loading or there's an error
  const displayPosts = loading || error || posts.length === 0 ? placeholderPosts : posts;

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

        {error && (
          <div className="text-center text-red-500 mb-8">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {displayPosts.map(post => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        <motion.div 
          className="mt-10 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a 
            href="/blog" 
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-purple-700 text-white text-base md:text-xl font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 relative overflow-hidden button-hover-effect"
          >
            <span className="relative z-10">VIEW ALL ARTICLES</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 