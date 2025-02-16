import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div id="home" className="sm:max-w-screen-xl mx-auto px-4">
      {children}
    </div>
  )
}