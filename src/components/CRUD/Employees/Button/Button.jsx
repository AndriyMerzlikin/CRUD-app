/* eslint-disable react/prop-types */
const Button = ({ btn = [], item = {}, className = "" }) => {
  return (
    <button
      className={className}
      onClick={() => btn.handleClick(item.id)}
    >
      {btn.title}
    </button>
  );
};

export default Button;
