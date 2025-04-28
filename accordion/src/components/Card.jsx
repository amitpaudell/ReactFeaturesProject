const Card = ({ title }) => {
  return (
    <div className="flex justify-between h-23 w-[50%] text-amber-50 text-2xl text-center font-bold border-2 p-6 bg-[#644100]">
      <span>{title}</span>
      <button>+</button>
    </div>
  );
};

export default Card;
