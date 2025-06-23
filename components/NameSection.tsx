import { ThemeControls } from "./ThemeControls";

export const NameSection = () =>{
  return (
              <section className="flex max-sm:flex-row max-sm:justify-between max-sm:mb-1">
                <div>
                <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-extralight subpixel-antialiased">Abhishek Gurav</p>
                <p className="2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm font-light subpixel-antialiased">Frontend Engineer</p>
                </div>
                <div className="min-sm:hidden"><ThemeControls /></div>
              </section>
  );
}