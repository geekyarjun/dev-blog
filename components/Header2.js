const Header = ({ blogTitle }) => {
  return (
    <header className="bg-white">
      <div
        className="flex items-center gap-6 p-[20px] pr-[20px]"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.18) 0px 0.60323px 0.60323px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.29021px 2.29021px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px",
        }}
      >
        <h3 className=" dark:text-white font-black text-[12px] lg:text-[18px] xl:text-[22px]">
          {blogTitle}
        </h3>
        {/* Make it props driven */}
        <div className="flex items-center justify-end flex-1 gap-6">
          <p className="text-[12px] lg:text-[16px] xl:text-[18px] text-black font-semibold">
            Blog
          </p>
          <p className="text-[12px] lg:text-[16px] xl:text-[18px] text-black font-semibold">
            About
          </p>
        </div>
        <button
          className="text-[12px] lg:text-[14px] xl:text-[18px] p-[10px] text-white rounded-lg font-semibold"
          style={{
            background:
              "linear-gradient(251deg, rgb(255, 195, 223) 0%, rgb(118, 77, 255) 100%)",
          }}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
