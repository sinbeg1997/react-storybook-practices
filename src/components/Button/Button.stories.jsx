import Button from "./Button";
import { Link } from "react-router-dom";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  decorators: [withRouter],
};

export const Default = {
  args: {
    children: "Button",
    size: "small",
    fullWidth: false,
    variant: "contained",
    color: "primary",
    disabled: false,
  },
};

export const AnchorButton = {
  args: {
    children: "Go to Google",
    as: "a",
    target: "_blank",
    href: "https://www.google.com.vn/",
  },
};

export const LinkButton = {
  args: {
    children: "Link Button",
    as: Link,
    to: "/",
  },
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: "/",
      },
    }),
  },
};
