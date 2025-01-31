import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
}) => {
  return (
    <Component className={cn("relative", containerClassName)}>
      <motion.div
        className={cn(
          "absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100",
          borderClassName
        )}
        style={{
          background:
            "linear-gradient(var(--border-angle), #4f46e5 0%, #c026d3 50%, #4f46e5 100%)",
        }}
        animate={{
          "--border-angle": ["0deg", "360deg"],
        } as any}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div
        className={cn(
          "relative rounded-xl bg-slate-900/[0.8] p-[1px]",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
};