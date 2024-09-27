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

type HighlightItemType = {
  transaction: 'Bought' | 'Sold';
  createdBy: string;
  counts: number;
  token: string;
  imgUrl: string;
};

type BackHomeNavbarType = {
  navLink?: string;
  children?: React.ReactNode;
};

type TokenDetailBoxType = {
  title: string;
  value: string;
  isHighlight?: boolean;
};

type InputTypes = React.InputHTMLAttributes<HTMLInputElement> & {
  inputClass?: string;
  rootClass?: string;
  labelIcon?: React.ReactNode;
  labelClass?: string;
  label?: string;
  required?: boolean;
  maxCharAllowed?: number;
};

type TextAreaTypes = Omit<
  InputTypes,
  React.InputHTMLAttributes<HTMLInputElement>
> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
