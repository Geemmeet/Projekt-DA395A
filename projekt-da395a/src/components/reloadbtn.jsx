export default function ReloadBtn({onClick}) {
  return (
    <div className="w-auto h-1/2 bg-pink-500 rounded-full m-auto">
      <img
        className="w-30 p-3 h-full object-cover hover:cursor-pointer"
        src="/reload.png"
        alt="reload"
        onClick={onClick}
        
      />
    </div>
  );
}
