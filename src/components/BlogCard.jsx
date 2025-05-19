import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function BlogCard({ post }) {
  // Format the date
  const formattedDate = post.publishedAt ? 
    format(new Date(post.publishedAt), "MMMM dd, yyyy") : 
    '';

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
        {post.mainImage && post.mainImage.asset && (
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img 
              src={post.mainImage.asset.url} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#181924] to-transparent h-1/4" />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-sm text-zinc-400">{formattedDate}</span>
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
            {post.authorImage && post.authorImage.asset && (
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src={post.authorImage.asset.url} 
                  alt={post.authorName || 'Author'}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <span className="text-zinc-300 text-sm">
              {post.authorName || 'Anonymous'}
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