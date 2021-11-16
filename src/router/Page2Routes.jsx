import { UrlParamater } from "../UrlParamater";
import { Page2 } from "./Page2";

export const Page2Routes = [
  { path: "/", exact: true, children: <Page2 /> },
  { path: "/:id", exact: false, children: <UrlParamater /> }
];
