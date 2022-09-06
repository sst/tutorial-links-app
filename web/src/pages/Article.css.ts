import { style } from "@vanilla-extract/css";
import { vars } from "../vars.css";

export const article = style({
  padding: "1rem",
});

export const comments = style({
  padding: 0,
  margin: "1rem 0 0",
  listStyle: "none",
});

export const comment = style({
  padding: "0.75rem 0",
  borderBottom: `1px solid ${vars.colors.divider}`,
});

export const form = style({
  marginTop: "1rem",
});

export const field = style({
  width: "100%",
  display: "block",
  maxWidth: "600px",
});

export const button = style({
  marginTop: "1rem",
});
