export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface ITopPage {
  tags: string[];
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: Advantage[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh: Hh;
}

export interface Advantage {
  _id: string;
  title: string;
  description: string;
}

export interface Hh {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}
