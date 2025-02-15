import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div id="home" className="sm:max-w-screen-xl mx-auto max-w-screen-sm">
      {children}
    </div>
  )
}