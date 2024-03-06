import { Link } from "react-router-dom";
import { HighlightMdDemo } from "../components/0-demo-markdown";
import { SEO } from "./SEO";

const data1: Record<string, string>[] = [
  {
    title: "Reining",
    subtitle: "Reining & Performance Horses",
  },
  {
    img: "./src/assets/img/horse-2.webp",
  },
  {
    img: "./src/assets/img/horse-2.webp",
  },
  {
    link: "/pages/about-breed.html",
    linkText: "read more",
  },
  {
    // title: "Reining",
    // subtitle: "Reining & Performance Horses",
    // img: "./src/assets/img/horse-2.webp",
    text: `250 characters - See what our 10 acre ranch and NRHA Professional
        trainers can offer you an your horse. See what our 10acre ranch and
        NRHA Professional trainers can offer you and your horse. See what our
        10 acre ranch and NRHA Professional trainers.`,

    link: "/pages/about-breed.html",
    linkText: "read more",
  },
];

/*
## Reining

Reining & Performance Horses

![image](./src/assets/img/horse-2.webp)
![image](./src/assets/img/horse-2.webp)

[read more](/pages/about-breed.html)

250 characters - See what our 10 acre ranch and NRHA Professional
trainers can offer you an your horse. See what our 10acre ranch and
NRHA Professional trainers can offer you and your horse. See what our
10 acre ranch and NRHA Professional trainers.

[read more](/pages/about-breed.html)
*/

function RenderData({ data }: { data: Record<string, string> }) {
  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        return (
          <div key={key} className="text-red-500">
            {key === "link" ? <Link to={value}>{value}</Link> : null}
            {key === "linkText" ? <Link to={data.link}>{value}</Link> : null}
            {key === "img" ? <img src={value} alt="" /> : null}
            {key === "title" ? <div className="text-2xl">{value}</div> : null}
            {key === "subtitle" ? <div className="text-sm">{value}</div> : null}
            {key === "text" ? <div className="py-4">{value}</div> : null}
          </div>
        );
      })}
    </>
  );
}

export function Reining() {
  return (
    <>
      <SEO title="S6 Ranch Reining" description="Horse reining competitions and events" href="/reining" />

      <HighlightMdDemo />

      {data1.map((data, index) => {
        return <RenderData key={index} data={data} />;
      })}

      {/* <RenderData data={data1} /> */}

      {/* <div className="text-red-500">
            <div>{data.title}</div>
            <div>{data.subtitle}</div>
            <img src={data.img} alt="" />
            <div>{data.text}</div>
            <Link to={data.link}>{data.linkText}</Link>
        </div> */}
    </>
  );
}
