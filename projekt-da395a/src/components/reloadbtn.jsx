export default function ReloadBtn({onClick}) {
  return (
    <div className="w-auto h-1/2 bg-[#DAD5F3] rounded-full m-auto shadow-lg transition delay-150 duration-300 ease-in-out hover:bg-[#BEB6E9]">
      <img
        className="w-30 p-5 h-full object-cover hover:cursor-pointer"
        src="/refresh.png"
        alt="reload"
        onClick={onClick}
        
      />
    </div>
  );
}
