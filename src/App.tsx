import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Wallet, ExternalLink, Github, Twitter, Disc as Discord } from 'lucide-react';
import CryptoTicker from './components/CryptoTicker';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-astra-light">
      <CryptoTicker />
      
      <header className="bg-astra-green text-white py-16 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1 
            className="text-6xl font-bold mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Trezor.io/start Guide
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your Complete Guide to Securing Your Digital Assets
          </motion.p>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-8 gap-4 rotate-12 scale-150">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="h-16 bg-white/10 rounded"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="prose max-w-none"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-astra-green mb-12 text-center"
          >
            Getting Started with Your Trezor Device
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              className="p-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <Shield className="w-16 h-16 text-astra-green mb-6" />
              <h3 className="text-2xl font-bold mb-4">Maximum Security</h3>
              <p>Protect your cryptocurrencies with military-grade security features.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              className="p-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <Lock className="w-16 h-16 text-astra-green mb-6" />
              <h3 className="text-2xl font-bold mb-4">Easy Setup</h3>
              <p>Quick and intuitive setup process for beginners and experts alike.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              className="p-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <Wallet className="w-16 h-16 text-astra-green mb-6" />
              <h3 className="text-2xl font-bold mb-4">Multi-Currency Support</h3>
              <p>Store and manage multiple cryptocurrencies in one secure device.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-astra-green">Complete Guide to Trezor.io/start</h2>
              <p className="mt-4">Welcome to the comprehensive guide for Trezor.io/start, your gateway to secure cryptocurrency management. The Trezor hardware wallet represents the gold standard in cryptocurrency security, offering unparalleled protection for your digital assets.</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-astra-green">Initial Setup Process</h3>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <motion.li variants={fadeInUp}>Unbox your Trezor device and verify security seals</motion.li>
                <motion.li variants={fadeInUp}>Connect your device to your computer using the provided USB cable</motion.li>
                <motion.li variants={fadeInUp}>Visit Trezor.io/start to begin the initialization process</motion.li>
                <motion.li variants={fadeInUp}>Install the Trezor Bridge software for seamless communication</motion.li>
                <motion.li variants={fadeInUp}>Follow the on-screen instructions to create your wallet</motion.li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-astra-green">Security Best Practices</h3>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <motion.li variants={fadeInUp}>Generate and safely store your recovery seed</motion.li>
                <motion.li variants={fadeInUp}>Enable additional security features like PIN protection</motion.li>
                <motion.li variants={fadeInUp}>Regularly update your Trezor's firmware</motion.li>
                <motion.li variants={fadeInUp}>Never share your recovery seed or PIN with anyone</motion.li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg my-12"
            >
              <h3 className="text-2xl font-bold text-astra-green mb-6">External Resources</h3>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 10 }}>
                  <a href="https://trezor.io/learn" className="text-astra-green hover:underline flex items-center group">
                    <span className="group-hover:translate-x-2 transition-transform">Trezor Learning Hub</span>
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  <a href="https://trezor.io/support" className="text-astra-green hover:underline flex items-center group">
                    <span className="group-hover:translate-x-2 transition-transform">Official Support Center</span>
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                  </a>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-astra-green">Advanced Features</h3>
              <p className="mt-4">Discover the advanced capabilities of your Trezor device at Trezor.io/start, including:</p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <motion.li variants={fadeInUp}>Multiple account management</motion.li>
                <motion.li variants={fadeInUp}>Password manager integration</motion.li>
                <motion.li variants={fadeInUp}>U2F security key functionality</motion.li>
                <motion.li variants={fadeInUp}>Integration with popular cryptocurrency exchanges</motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="bg-astra-green text-white py-16 mt-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold mb-4">About Trezor Guide</h4>
              <p className="text-gray-300">Your trusted resource for Trezor wallet setup and security best practices. Stay safe in the world of cryptocurrency.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#setup" className="text-gray-300 hover:text-white transition-colors">Setup Guide</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#security" className="text-gray-300 hover:text-white transition-colors">Security Tips</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Discord className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-12 pt-8 border-t border-white/10"
          >
            <p>© 2024 Trezor Guide. This is an independent guide for Trezor.io/start.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;