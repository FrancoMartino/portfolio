import SocialMedia from "../../common/SocialMedia";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div
      id="footer"
      className="flex w-full md:flex-row flex-col-reverse items-center text-gray-400 justify-center gap-4 p-8 md:pt-16"
    >
      <span className="text-sm">Franco Martino - {year}</span>
      <SocialMedia />
    </div>
  );
}
