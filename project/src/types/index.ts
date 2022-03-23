import React from 'react';

type Year = string | number;

export type CardData = {
  title: string,
  link: string,
};

export type FilmInfoProps = {
  genre: string,
  name: string,
  year: Year,
};

export type Route = {
  path: string,
  component: React.Component,
};

export type PrivateRouteProps = {
  children: JSX.Element,
};
