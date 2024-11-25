
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  // absolute w-screen top-0
  return (
    <div>
    <div className=" relative max-w-sm rounded mt-8  bg-[#D9D9D9]">
        <img className=" relative left-36 object-cover" src={imageUrl} alt={title} />
        <div className="p-4 text-center  ">
        <h2 className="font-bold text-4xl mb-5 mt-5">{title}</h2>
        <p className="text-black text-xl">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Card;
