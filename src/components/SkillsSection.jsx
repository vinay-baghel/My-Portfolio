import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";

const SkillsSection = () => {
  return (
    <div
      className="flex justify-center items-center w-full flex-col px-4 sm:px-8 py-10 max-w-screen-xl mx-auto"
      data-aos="fade-up"
      data-aos-offset="150"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      
      <h1>FRONTEND</h1>
      <div className="flex flex-wrap justify-center w-full gap-6 sm:gap-10 p-5">
        {[html, css, javascript, react,
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
        ].map((src, i) => (
          <div
            key={i}
            className="group relative w-20 h-28 sm:w-24 sm:h-40 rounded overflow-hidden flex items-center justify-center"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 bg-yellow-500 transition-all duration-500 group-hover:h-full z-0"></div>
            <img src={src} alt="" className="w-14 h-14 z-10" />
          </div>
        ))}
      </div>

  <h1>BACKEND</h1>
      <div className="flex flex-wrap justify-center w-full gap-6 sm:gap-10 p-5">
        {[
          "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
          "https://www.litespeedtech.com/images/icons/nodejs.png",
          "https://www.manektech.com/storage/developer/1646733543.webp",
        ].map((src, i) => (
          <div
            key={i}
            className="group relative w-20 h-28 sm:w-24 sm:h-40 rounded overflow-hidden flex items-center justify-center"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 bg-yellow-500 transition-all duration-500 group-hover:h-full z-0"></div>
            <img src={src} alt="" className="w-14 h-14 z-10" />
          </div>
        ))}
      </div>

    <h1>TOOLS</h1>
      <div className="flex flex-wrap justify-center w-full gap-6 sm:gap-10 p-5">
        {[
          "https://miro.medium.com/v2/0*JLTX-AJQ0oC40mjc.png",
          "https://images.icon-icons.com/2107/PNG/512/file_type_vscode_icon_130084.png",
          "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-512.png",
          "https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.37.2/1753810466856/Microsoft.VisualStudio.Services.Icons.Default",
        ].map((src, i) => (
          <div
            key={i}
            className="group relative w-20 h-28 sm:w-24 sm:h-40 rounded overflow-hidden flex items-center justify-center"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 bg-yellow-500 transition-all duration-500 group-hover:h-full z-0"></div>
            <img src={src} alt="" className="w-16 h-16 z-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
