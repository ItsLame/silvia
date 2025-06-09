import { ReactElement, ReactNode } from "react";

export interface IBaseChildrenProps {
  children?: ReactNode | ReactElement | string,
}

export type NullableString = string | null;
