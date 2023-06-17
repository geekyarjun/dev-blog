import { useConfig } from "@/lib/config";
import Vercel from "@/components/Vercel";
import { SocialMedia } from "./Main";
const Footer = ({ fullWidth }) => {
  const BLOG = useConfig();

  const d = new Date();
  const y = d.getFullYear();
  const from = +BLOG.since;
  return (
    <div className="bg-black text-white flex flex-col gap-[30px] items-center p-[50px]">
      <div className="flex max-[809px]:items-center max-[809px]:flex-col max-[809px]:gap-[15px] min-[810px]:gap-[80px]">
        <p className="pt-5 font-bold">Blog</p>
        <p className="pt-5 font-bold">Contact</p>
        <p className="pt-5 font-bold">About</p>
      </div>
      <div className="flex gap-[20px]">
        <SocialMedia color="#ffffff" />
      </div>
      <div>
        <p className="font-bold">Made with ❤️ on Earth</p>
      </div>
    </div>
  );
};

export default Footer;
