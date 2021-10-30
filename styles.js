import { css } from "@emotion/css";

export const form = css`
  background-color: var(--bg);
  color: var(--color-2);
  border: 1px solid var(--color-1);
  font-family: "Courier New", Courier, monospace;
  margin: 0px 50px 25px;
  padding: 10px 25px 25px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const button = css`
  background-color: var(--color-1);
  border: 1px solid transparent;
  padding: 5px 10px;
  margin: 0px 5px;
  transition: border 0.15s;

  &:hover {
    border: 1px solid var(--color-2);
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

export const title = css`
  border-bottom: 1px solid var(--color-2);
  padding-bottom: 10px;
`;
