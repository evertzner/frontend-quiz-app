type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex font-medium text-lg md:text-[28px] gap-3 h-[56px] md:h-[92px] md:mt-2 md:mb-2 md:gap-2 p-3 md:p-8 justify-center items-center bg-purple text-white heading-s rounded-xl md:rounded-3xl self-stretch shadow-[0px_16px_40px_0px_rgba(143,160,193,0.14)] dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)] transition-all hover:bg-[#b53eff]'
    >
      {text}
    </button>
  );
};

export default Button;
