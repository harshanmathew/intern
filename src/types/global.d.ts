type NavLinkType = {
  href: string;
  label: string;
  active: boolean;
};

type TrendingProjectCardType = {
  title: string;
  caption: string;
  description: string;
  imgUrl: string;
};

type ProjectDetailCardType = {
  title: string;
  createdBy: string;
  description: string;
  imgUrl: string;
  marketCap: {
    amount: string;
    percent: number;
  };
};
