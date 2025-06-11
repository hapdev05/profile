import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { PlayerCanvas } from "./canvas";

function PlayerContainer({ isMobile }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Return a simple div during SSR
  if (!hasMounted) {
    return (
      <div className="hidden md:block md:w-1/3 w-full md:h-auto h-[440px] cursor-pointer">
        <PlayerCanvas isMobile={isMobile} />
      </div>
    );
  }

  // Return motion.div on client side
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="hidden md:block md:w-1/3 w-full md:h-auto h-[440px] cursor-pointer"
    >
      <PlayerCanvas isMobile={isMobile} />
    </motion.div>
  );
}

export default PlayerContainer;
