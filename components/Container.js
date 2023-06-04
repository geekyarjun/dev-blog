import { useRouter } from "next/router";
import cn from "classnames";
import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import { useConfig } from "@/lib/config";
import Head from "next/head";
import PropTypes from "prop-types";
// import BlogPost from './BlogPost'

const Container = ({ children, layout, fullWidth, ...customMeta }) => {
  const BLOG = useConfig();
  const { query } = useRouter();

  const url = BLOG.path.length ? `${BLOG.link}/${BLOG.path}` : BLOG.link;
  const meta = {
    title: BLOG.title,
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        {/* <meta content={BLOG.darkBackground} name="theme-color" /> */}
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {BLOG.seo.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={BLOG.seo.googleSiteVerification}
          />
        )}
        {BLOG.seo.keywords && (
          <meta name="keywords" content={BLOG.seo.keywords.join(", ")} />
        )}
        <meta name="description" content={meta.description} />
        <meta property="og:locale" content={BLOG.lang} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:url"
          content={meta.slug ? `${url}/${meta.slug}` : url}
        />
        <meta
          property="og:image"
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
        />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta
          name="twitter:image"
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
        />
        {meta.type === "article" && (
          <>
            <meta property="article:published_time" content={meta.date} />
            <meta property="article:author" content={BLOG.author} />
          </>
        )}
      </Head>
      <div
        className={`gap-[60px] wrapper ${
          BLOG.font === "serif" ? "font-serif" : "font-sans"
        }`}
      >
        <Header2 blogTitle="Arjun's Blog" />
        {/* <Header
          navBarTitle={layout === "blog" ? meta.title : null}
          fullWidth={fullWidth}
        /> */}
        <main className="my-0 mx-auto w-full">
          <div
            className={cn(
              "flex flex-col gap-[60px] min-[810px]:w-4/5 w-full mx-auto max-[809px]:px-8 px-0",
              {
                "min-[810px]:max-w-[1200px]": !query.slug,
                "min-[810px]:max-w-[720px]": query.slug,
              }
            )}
          >
            {children}
          </div>
        </main>
        <Footer fullWidth={fullWidth} />
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
