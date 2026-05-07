import { atlasburguer } from "./atlasBurguer";
import { calculator } from "./calculator";
import { easyBills } from "./easyBills";
import { easyDraw } from "./easyDraw";
import { gbuddy } from "./gbuddy";
import { habitus } from "./habitus";
import { minimalistLpTemplate } from "./minimalistLpTemplate";
import { petcare } from "./petcare";
import { registrationForm } from "./registrationForm";
import { solarFacil } from "./solarFacil";
import { todoApp } from "./todoApp";
import { userRegistration } from "./userRegistration";
import { yourLandingPage } from "./yourLandingPage";

export type ProjectStack = "fullstack" | "frontend" | "backend";

export type Project = {
  name: string;
  description: string;
  stack: string[];
  links?: {
    deploy?: string;
    repo?: string;
  };
  type: ProjectStack;
  isFreelancer: boolean;
  isHighlight: boolean;
  banner: string;
  imgs?: string[];
};

export const projects: Project[] = [
  solarFacil,
  atlasburguer,
  easyBills,
  gbuddy,
  habitus,
  userRegistration,
  petcare,
  todoApp,
  registrationForm,
  minimalistLpTemplate,
  easyDraw,
  calculator,
  yourLandingPage,
];
