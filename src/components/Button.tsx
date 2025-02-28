type ButtonProp = {
  onClick: () => void;
  disabled: boolean;
  text: string;
};

const Button = ({ onClick, disabled, text }: ButtonProp) => {
  return (
    <button
      className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
