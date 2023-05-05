import Link from "next/link"
interface IPhershianLogo {
  black?: boolean
}
export const PhershianLogo = ({ black = false }: IPhershianLogo) => {
  const textColor = black ? "text-black" : "text-white";
  const logoColor = black ? "/img/logo/logoBlack.svg" : "/img/logo/logo.svg";
  return (
    <Link href="/">
      <div className="flex flex-row items-center h-min cursor-pointer">
        <img
          src={logoColor}
          alt="Logo Phershian"
          className="relative bottom-[6px]"
        />
        <p className={"text-3xl px-2 h-full hidden sm:block " + textColor}>|</p>
        <p className={"text-xs hidden sm:block " + textColor}>{"GLOBAL CONSULTING"}</p>
      </div>
    </Link>
  )
}