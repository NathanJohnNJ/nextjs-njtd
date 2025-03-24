import { motion, AnimatePresence } from "framer-motion";

export default function Statement(){

  return (
    <AnimatePresence>
      <motion.div className="flex flex-col items-center justify-center text-xl md:text-2xl lg:text-3xl">
        <p className="text-base lg:text-lg text-[var(--mid-color)]">This carousel showcases some of my projects that I&apos;ve worked on using vanilla JavaScript.</p>
        <p className="text-base lg:text-lg text-[var(--mid-color)]">The carousel this time has been created using javascript which has allowed me to more easily configure the transitions.</p>
        <p className="text-base lg:text-lg text-[var(--mid-color)]">You can see the code for all of my carousels on <a href="https://github.com/NathanJohnNJ/carousels" className="text-[var(--light-color)] no-underline hover:text-[var(--whirte-color)] hover:text-lg lg:hover:text-xl">GitHub</a>.</p>
      </motion.div>
    </AnimatePresence>
  )
}