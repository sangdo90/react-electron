import { CreatedWebpack, CRA, Redux, Recoil, Chapter3 } from "../../pages";

// export const MENU_LIST = [
//   {
//     path: "/chapter1",
//     name: "Project Init",
//   },
//   {
//     path: "/chapter2",
//     name: "챕터2",
//   },
// ];

export const MENU_LIST = {
  Install: {
    CRA: {
      path: "/CRA",
      component: CRA,
    },
    Webpack: {
      path: "/webpack",
      component: CreatedWebpack,
    },
  },
  React: {
    Redux: {
      path: "/redux",
      component: Redux,
    },
    Recoil: {
      path: "/recoil",
      component: Recoil,
    },
  },
  Chapter3: {
    path: "/chapter3",
    component: Chapter3,
  },
};
