import { ReactElement, ReactNode } from "react";

interface IBaseChildrenProps {
  children?: ReactNode | ReactElement | string,
}

type NullableString = string | null;
