import React from "react";
import cx from "classnames";

type ButtonBaseProps<E extends React.ElementType> = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  as?: E; // Accept all components
  // as?: E extends "button" | "a" ? E : never; // Accept only button or a component
};

type ButtonProps<E extends React.ElementType> = ButtonBaseProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonBaseProps<E>>;

const Button = <E extends React.ElementType>({
  size = "small",
  fullWidth = false,
  startIcon = null,
  endIcon = null,
  variant = "contained",
  color = "primary",
  as,
  ...props
}: ButtonProps<E>) => {
  const Component = as || "button";
  return (
    <Component
      {...props}
      className={cx(
        " text-[12px] leading-[1.67] font-bold  rounded-[8px] px-[12px] py-[6px] inline-flex gap-x-[8px] items-center justify-center",
        {
          "bg-[#0084F4] border-0 text-white":
            variant === "contained" && color === "primary",
          "bg-[#FF1E2B] border-0 text-white":
            variant === "contained" && color === "secondary",
          "border border-[#0084F4] text-[#388DDD]":
            variant === "outlined" && color === "primary",
          "border border-[#FF1E2B] text-[#FF1E2B]":
            variant === "outlined" && color === "secondary",
          "w-full": fullWidth,
          "min-w-[89px]": size === "small" && !fullWidth,
          "min-w-[104px]": size === "medium" && !fullWidth,
          "min-w-[343px]": size === "large" && !fullWidth,
        },
        props.className
      )}
    >
      {startIcon}
      {props.children}
      {endIcon}
    </Component>
  );
};

export default Button;
