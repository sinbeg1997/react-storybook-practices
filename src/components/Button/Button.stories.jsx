import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: "Button",
    size: "small",
    fullWidth: false,
    variant: "contained",
    color: "primary",
  },
};

export const ButtonWithStartIcon = {
  args: {
    children: "Button",
    size: "small",
    fullWidth: false,
    startIcon: (
      <div className="w-[16px] h-[16px] rounded-[4px] text-black text-[8px] bg-white">
        icon
      </div>
    ),
  },
};

export const ButtonWithEndIcon = {
  args: {
    children: "Button",
    size: "small",
    fullWidth: false,
    endIcon: (
      <div className="w-[16px] h-[16px] rounded-[4px] text-black text-[8px] bg-white">
        icon
      </div>
    ),
  },
};
