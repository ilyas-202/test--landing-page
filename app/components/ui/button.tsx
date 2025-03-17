import React from "react";
import styles from "./button.module.css";
import { cn } from "@/app/lib/utils";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;