import { ReactElement, ReactNode } from "react";

interface BaseChildrenProps {
  children?: ReactNode | ReactElement | string,
}

type NullableString = string | null;
