import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Simran Nagekar - Game Experience Designer & Creative Technologist",
  description = "Portfolio of Simran Nagekar - Game Experience Designer, Design Generalist & Creative Technology Explorer. Explore innovative game design projects and interactive experiences.",
  keywords = "Simran Nagekar, Game Designer, Experience Designer, UX Designer, Portfolio, Game Development, Creative Technology, Interactive Design, UI/UX",
  ogImage = "https://simrann.dev/og-image.jpg",
  url = "https://simrann.dev/"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
