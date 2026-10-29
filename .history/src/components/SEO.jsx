import { Helmet } from "react-helmet-async";

export default function SEO({ title, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}