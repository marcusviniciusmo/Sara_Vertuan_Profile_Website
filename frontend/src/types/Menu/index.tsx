import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface MenuProps {
  language: string;
  routes: RoutesProps[];
};

interface RoutesProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;};
  link: string;
  title: string;
  hasBorder: boolean;
};