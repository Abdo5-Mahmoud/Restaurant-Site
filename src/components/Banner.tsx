import { lazy } from "react";
const Button = lazy(() => import("./Button"));

type BannerProps = {
  t1?: string;
  btn?: string;
  title1: string;
  title2?: string;
  text: string;
};

export default function Banner({ t1, btn, title1, title2, text }: BannerProps) {
  return (
    <div className="banner">
      <div className="text">
        {t1 && <p>{t1}</p>}
        <h1 className="">
          {title1} <br />
          {title2}
        </h1>
        <p className="mb-50">{text}</p>
        {btn && <Button text={btn} />}
      </div>
    </div>
  );
}
