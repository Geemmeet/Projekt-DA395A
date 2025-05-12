//should have a reciepeObj arg
export default function card() {
  return (
    <div className="w-1/3 h-2/3 bg-pink-500 m-5 flex justify-center items-center flex-col pt-5">
      <div className="w-95 h-64">
        <img
          className="p-2 w-full h-full object-cover"
          src="/imageatm.png"
          alt="not available"
        />
      </div>
      <h3 className="mt-4">Recept titel</h3>
      <p className="pb-10 mt-2">Text som sedan ska bytas ut</p>
    </div>
  );
}
