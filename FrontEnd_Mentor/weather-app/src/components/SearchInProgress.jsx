import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";
export default function SearchInProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 bg-neutral-800 text-gray-300 px-4 py-2 rounded-xl w-full max-w-md mx-auto shadow-md"
    >
      <FiLoader className="animate-spin text-gray-400" />
      <p className="text-sm">Search in progress</p>
    </motion.div>
  );
}
