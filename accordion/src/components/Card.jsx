const Card = ({ title, ans, handleClick, isOpen }) => {
  return (
    // Each card component
    <div className="flex flex-col justify-between h-auto w-[50%] text-amber-50  text-center  border-2 p-6 bg-[#644100]">
      <div className="flex justify-between text-2xl font-bold">
        <span>{title}</span>
        <button onClick={handleClick}>+</button>
      </div>

      <div className="mt-3">
        <p>{isOpen ? ans : ""}</p>
      </div>
    </div>
  );
};

export default Card;
