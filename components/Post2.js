import PropTypes from "prop-types";
import Image from "next/image";
import { MdArrowBack } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import cn from "classnames";
import { useConfig } from "@/lib/config";
import useTheme from "@/lib/theme";
import FormattedDate from "@/components/FormattedDate";
import TagItem from "@/components/TagItem";
import NotionRenderer from "@/components/NotionRenderer";
import TableOfContents from "@/components/TableOfContents";
import { PostChip } from "./Main";

const Back = ({ href }) => (
  <div className="max-[1199px]:w-[90vw] max-[809px]:hidden w-[70vw] self-center font-semibold text-lg flex items-center gap-2 text-[#333333]">
    <MdArrowBack /> <p>Back</p>
  </div>
);

/**
 * A post renderer
 *
 * @param {PostProps} props
 *
 * @typedef {object} PostProps
 * @prop {object}   post       - Post metadata
 * @prop {object}   blockMap   - Post block data
 * @prop {string}   emailHash  - Author email hash (for Gravatar)
 * @prop {boolean} [fullWidth] - Whether in full-width mode
 */
export default function Post(props) {
  const BLOG = useConfig();
  const { post, blockMap, emailHash, fullWidth = false } = props;
  console.log("blockMap", blockMap);
  const { dark } = useTheme();
  return (
    <article
      className={cn(
        "flex flex-col max-[809px]:gap-[40px] gap-[70px] blog-post-container"
      )}
    >
      <Back />
      <header className="flex flex-col gap-[20px]">
        <div className="self-start">
          <PostChip />
        </div>
        <h1 className="font-black text-6xl text-[#333333] leading-[72px] max-[809px]:text-4xl">
          {post.title}
        </h1>
        <p className="font-medium max-[809px]:text-sm opacity-40 -tracking-[0.2px] text-lg">
          <FormattedDate date={post.date} />
        </p>
      </header>
      <div className="rounded-2xl h-full min-h-min">
        <img
          src="https://framerusercontent.com/images/n2mCZJ0uofOeATNf1rAPeC5Vm8.jpg?scale-down-to=4096"
          alt=""
          srcSet="https://framerusercontent.com/images/n2mCZJ0uofOeATNf1rAPeC5Vm8.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/n2mCZJ0uofOeATNf1rAPeC5Vm8.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/n2mCZJ0uofOeATNf1rAPeC5Vm8.jpg?scale-down-to=2048 2048w, https://framerusercontent.com/images/n2mCZJ0uofOeATNf1rAPeC5Vm8.jpg?scale-down-to=4096 4096w, https://framerusercontent.com/images/n2mCZJ0uofOeATNf1rAPeC5Vm8.jpg 5184w"
          sizes="min(100vw, 720px)"
          style={{
            pointerEvents: "none",
            userSelect: "none",
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectPosition: "center center",
            objectFit: "cover",
            imageRendering: "auto",
          }}
        ></img>
      </div>
      {/* {post.type[0] !== "Page" && (
        <nav
          className={cn(
            "w-full flex mt-7 items-start text-gray-500 dark:text-gray-400"
          )}
        >
          <div className="flex mb-4">
            <a href={BLOG.socialLink || "#"} className="flex">
              <Image
                alt={BLOG.author}
                width={24}
                height={24}
                src={`https://gravatar.com/avatar/${emailHash}`}
                className="rounded-full"
              />
              <p className="ml-2 md:block">{BLOG.author}</p>
            </a>
            <span className="block">&nbsp;/&nbsp;</span>
          </div>
          <div className="mr-2 mb-4 md:ml-0">
            <FormattedDate date={post.date} />
          </div>
          {post.tags && (
            <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
              {post.tags.map((tag) => (
                <TagItem key={tag} tag={tag} />
              ))}
            </div>
          )}
        </nav>
      )} */}
      <div className="self-stretch -mt-4 flex flex-col items-center lg:flex-row lg:items-stretch">
        {/* {!fullWidth && <div className="flex-1 hidden lg:block" />} */}
        <div>
          <NotionRenderer
            recordMap={blockMap}
            fullPage={false}
            darkMode={dark}
          />
        </div>
        {/* <div
          className={cn(
            "order-first lg:order-[unset] w-full lg:w-auto max-w-2xl lg:max-w-[unset] lg:min-w-[160px]",
            fullWidth ? "flex-none" : "flex-1"
          )}
        > */}
        {/* `65px` is the height of expanded nav */}
        {/* TODO: Remove the magic number */}
        {/* <TableOfContents
            blockMap={blockMap}
            className="pt-3 sticky"
            style={{ top: "65px" }}
          /> */}
        {/* </div> */}
      </div>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  emailHash: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};
