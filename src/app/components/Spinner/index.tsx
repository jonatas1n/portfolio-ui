import { CgSpinnerAlt } from "react-icons/cg";

export const Spinner = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary">
        <CgSpinnerAlt />
      </div>
    </div>
  )
};