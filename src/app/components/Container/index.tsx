import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div id="home" className="max-w-screen-xl mx-auto">
      {children}
    </div>
  )
}