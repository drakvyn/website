import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'HOME', href: '/' },
      { label: 'PROJECTS', href: '/projects' },
      { label: 'BLOG', href: '/blog' },
      { label: 'CONTACT', href: '#contact' },
    ],
    contact: [
      { label: 'Discord', href: 'https://discord.com/users/thesoftwarewizard', icon: 'discord' },
      { label: 'Telegram', href: 'https://t.me/thesoftwarewizard', icon: 'telegram' },
      { label: 'Calendly', href: 'https://calendly.com/roajeanmarco/30min', icon: 'calendly' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeanmra/', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/TheSoftwareWizard', icon: 'github' },
      { label: 'Email', href: 'mailto:jean@thesoftwarewizard.dev', icon: 'mail' }
    ]
  };

  return (
    <footer className="relative bg-zinc-900 border-t border-zinc-800 overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(126, 34, 206, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(126, 34, 206, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="font-squada text-white text-lg">
              <span className="text-overlay">NAVIGATION</span>
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-zinc-300 hover:text-white transition-colors flex items-center group text-sm relative"
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="absolute -left-2 w-1 h-4 bg-white rounded-full opacity-0"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-3 text-right"
          >
            <h4 className="font-squada text-white text-lg">
              <span className="text-overlay">CONTACT</span>
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.contact.map((link) => (
                <li key={link.label} className="flex justify-end">
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white transition-colors flex items-center group text-sm relative"
                    whileHover={{ x: -4 }}
                  >
                    {link.label}
                    <motion.div
                      className="absolute -right-2 w-1 h-4 bg-white rounded-full opacity-0"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    {link.icon === 'discord' && (
                      <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    )}
                    {link.icon === 'telegram' && (
                      <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    )}
                    {link.icon === 'calendly' && (
                      <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.224 2.792-6.224 6.224S8.568 18.22 12 18.22s6.224-2.792 6.224-6.224S15.432 5.772 12 5.772zm.996 6.978c0 .55-.446.996-.996.996s-.996-.446-.996-.996V8.556c0-.55.446-.996.996-.996s.996.446.996.996v4.194z"/>
                      </svg>
                    )}
                    {link.icon === 'linkedin' && (
                      <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    )}
                    {link.icon === 'github' && (
                      <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    {link.icon === 'mail' && (
                      <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.224 2.792-6.224 6.224S8.568 18.22 12 18.22s6.224-2.792 6.224-6.224S15.432 5.772 12 5.772zm0 9.996c-.55 0-.996-.446-.996-.996V8.556c0-.55.446-.996.996-.996s.996.446.996.996v6.196c0 .55-.446.996-.996.996z"/>
                      </svg>
                    )}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-zinc-800 mt-6 pt-3 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 text-xs">
            © {currentYear} Jean Roa. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 