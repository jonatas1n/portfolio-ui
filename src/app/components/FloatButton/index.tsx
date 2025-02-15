import { FaTimes } from "react-icons/fa";
import { FaEllipsis} from "react-icons/fa6";

type FloatButtonProps = {
  onClick: VoidFunction;
  isActive: boolean;
};
export const FloatButton = ({ onClick, isActive }: FloatButtonProps) => {
  return (
    <button onClick={onClick} className="transition fixed bottom-2 p-4 shadow-lg border-2 border-light right-6 rounded-full bg-accent text-light">
      {isActive ? <FaTimes /> : <FaEllipsis />}
    </button>
  );
};
