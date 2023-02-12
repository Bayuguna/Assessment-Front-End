import Logo from "../../atoms/Logo";

function Footer() {
  const buildAppsContent = [
    { name: "Golang Logo", image: "/buildapps/golang.png" },
    { name: "Dart Logo", image: "/buildapps/dart.png" },
    { name: "Flutter Logo", image: "/buildapps/flutter.png" },
    { name: "React JS Logo", image: "/buildapps/reactjs.png" },
    { name: "Next JS Logo", image: "/buildapps/nextjs.png" },
    { name: "Laravel Logo", image: "/buildapps/laravel.png" },
  ];
  return (
    <>
      <div
        className={`flex bg-primary px-20 py-10 justify-between`}
      >
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-5">
            <Logo />
            <div className="flex flex-col text-white">
              <span className={`text-[22px] font-bold`}>Aksara Tech</span>
              <span className="text-sm">PT AKSARA TEKNOLOGI UTAMA</span>
            </div>
          </div>
        </div>
      </div>
      <footer
        className={`left-0 right-0 bottom-0 bg-primary flex justify-start px-5 md:px-20 py-5 border-opacity-30 relative border-t border-white`}
      >
        <div className="flex space-x-1 md:space-x-3 justify-center items-center">
            <span className={`text-white text-xs md:text-sm`}>
              Copyright 2023 Assessment Test
            </span>
            <div className="dot">

            </div>
            <span className={`text-white text-xs md:text-sm`}>
              Terms and Policy
            </span>
        </div>

      </footer>
    </>
  );
}

export default Footer;
