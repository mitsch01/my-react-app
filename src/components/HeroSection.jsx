import { motion } from 'framer-motion'

export default function HeroSection({title, subtitle, image}){
  return (
    <section className="relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h1 className="text-4xl font-bold mb-4">{title || 'Illustrationen & Projekte'}</h1>
          <p className="text-lg text-gray-700 max-w-xl">{subtitle || 'Eine Auswahl meiner Arbeiten. Workshops und mehr.'}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          {/* placeholder for animated illustration */}
          <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center">Hero Image</div>
        </motion.div>
      </div>
    </section>
  )
}