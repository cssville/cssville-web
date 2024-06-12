import React from 'react';
import { Cssville } from "cssville-generators/build/cssville"
import { ClassPage } from './../components/pages/docs/ClassPage'
import type { RouteObject } from "react-router";
import { GettingStartedPage } from "../components/pages/docs/introduction/GettingStartedPage";
import { HomePage } from "../components/pages/HomePage";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { ChipPage } from "../components/pages/ChipPage";
import { ButtonPage } from "../components/pages/ButtonPage";
import { TypographyPage } from "../components/pages/TypographyPage";

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
  {
    path: "/chip",
    element: <ChipPage />,
  },
  {
    path: "/button",
    element: <ButtonPage />,
  },
  {
    path: "/typography",
    element: <TypographyPage />
  },
  {
    path: "/docs/intro/getting-started",
    element: <GettingStartedPage />
  },
  {
    path: "/docs/css-classes/:name",
    element: <ClassPage activeCategory={"CSS classes"} />,
    loader: async ({ params }) => {
      return params.name;
    },
  },
]

export const MenuItems: any[] = [
  {
    category: "Introduction",
    values: [
      {
        item: "Getting started",
        href: "/docs/intro/getting-started",
      },
    ]
  },
  {
    category: "CSS classes",
    values: [
      ...Cssville.generators.map(g => (
        {
          item: g.name,
          href: `/docs/css-classes/${g.name}`,
        })
      )]
  },
];