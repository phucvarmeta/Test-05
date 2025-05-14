// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue =
  | "tablet"
  | "tabletSmall"
  | "mobileLarge"
  | "mobileSmall";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  tablet: "(max-width:1024px)",
  tabletSmall: "(max-width:940px)",
  mobileLarge: "(max-width:660px)",
  mobileSmall: "(max-width:440px)",
});

export default ScreenContext;
/* prettier-ignore-end */
