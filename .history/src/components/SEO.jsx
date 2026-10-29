import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://globetechnew.com${path}`} />
    </Helmet>
  );
}