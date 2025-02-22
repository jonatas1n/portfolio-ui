import { CgSpinnerAlt } from "react-icons/cg";

export const Spinner = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary">
        <CgSpinnerAlt />
      </div>
    </div>
  )
};