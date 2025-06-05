export default function RefreshBtn({onClick}) {
  return (
    <div className="my-10 h-[90px] w-auto bg-[#DAD5F3] rounded-full m-auto shadow-lg transition delay-150 duration-300 ease-in-out hover:bg-[#BEB6E9] lg:my-0 lg:h-[120px]">
      <img
        className="p-5 h-full object-cover hover:cursor-pointer lg:p-7"
        src="/refresh.png"
        alt="reload"
        onClick={onClick}
      />
    </div>
  );
}
