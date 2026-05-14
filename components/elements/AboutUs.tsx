import Lanyard from "../Lanyard";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 mt-32 border border-gray-300 rounded-lg px-8 gap-8 w-full h-150 relative z-0 overflow-hidden">
      <div>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci
          magni ratione rem fugit atque veritatis quasi inventore accusantium
          blanditiis.
        </p>
      </div>
      <div className="">
        <Lanyard position={[0, 0, 22]} gravity={[0, -30, 0]} />
      </div>
    </div>
  );
}
