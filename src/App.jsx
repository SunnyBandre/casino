import "./App.css";
import Sticker from "./Sticker";

const offers = [
  { line1: "100% SIGN-UP", line2: "BONUS" },
  { line1: "$30 REFERRAL", line2: "BONUS" },
  { line1: "30% - 70%", line2: "DAILY BONUS" },
  { line1: "$50 LOYALTY", line2: "BONUS" },
  { line1: "BIRTHDAY", line2: "TREATS" },
  { line1: "5 DAYS STREAK", line2: "BONUS" },
  { line1: "HOLIDAY", line2: "BONUS" },
  { line1: "INSTANT", line2: "LOAD / REDEEM" },
  { line1: "WEEKLY", line2: "FREEPLAY" },
  { line1: "24/7", line2: "SUPPORT" },
  { line1: "$20 SEASONAL", line2: "BOOSTS" },
];

function App() {
  const chunk = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  return (
    <div>
      {/* Home */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 🎬 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/home.mp4" type="video/mp4" />
        </video>

        {/* 🔲 Dark overlay (important for readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* 🧠 Content        md=Tablet(768px) xl=Desktop(1280px)  */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1
            data-text="MEGA WINNERS CLUB OFFICIAL"
            className="luxury-text font-cinzelDecorative text-3xl md:text-5xl xl:text-7xl font-semibold text-white text-center uppercase"
          >
            MEGA
            <br /> WINNERS CLUB
            <br /> OFFICIAL
          </h1>

          <p className="font-cinzelDecorative text-base md:text-xl lg:text-2xl text-white font-semibold text-center uppercase mt-2">
            The World of Winners!!
          </p>
        </div>
      </div>

      {/* About Us */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 🖼️ Background */}
        <div className="absolute inset-0 bg-[url('/images/about.webp')] bg-cover bg-center"></div>

        {/* 🔲 Overlay (UNCHANGED as you wanted) */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* 🧠 Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-between py-16 px-4 text-center">
          {/* 🔝 TOP */}
          <h1 className="luxury-text2 font-cinzelDecorative text-xl md:text-3xl xl:text-5xl font-semibold text-white uppercase">
            ABOUT US!
          </h1>

          {/* 🟰 CENTER */}
          <p className="font-cinzel text-lg md:text-2xl xl:text-4xl text-white font-semibold uppercase max-w-5xl leading-relaxed">
            Welcome to Mega Winners Club your go to <br /> place for exciting
            spins and big wins.
            <br /> We bring you a vibrant casino-style
            <br /> experience filled with fun, thrill, and nonstop
            <br />
            entertainment.
            <br /> Join us and enjoy the excitement of every spin.
          </p>

          {/* 🔻 BOTTOM */}
          <h3 className="font-times text-xl md:text-3xl xl:text-6xl font-semibold text-white uppercase">
            Play. Spin. Win.
          </h3>
        </div>
      </div>

      {/* Why Us */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 🖼️ Background */}
        <div className="absolute inset-0 bg-[url('/images/why.png')] bg-contain bg-center"></div>

        {/* 🔲 Overlay (UNCHANGED as you wanted) */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}

        {/* 🧠 Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-between py-16 px-4 text-center">
          {/* 🔝 TOP */}
          <h1 className="font-cinzelDecorative text-xl md:text-3xl xl:text-6xl font-semibold text-white uppercase why-text">
            WHY US!
          </h1>

          {/* 🟰 CENTER */}
          <h2 className="font-cinzel text-xl md:text-3xl xl:text-5xl text-[#f3cc44] font-bold uppercase why-text">
            At Mega Winners Club,
          </h2>

          {/* 🔻 BOTTOM */}
          <h3 className="font-times text-xl md:text-2xl xl:text-4xl font-semibold text-white uppercase why-text tracking-wide leading-relaxed max-w-6xl mx-auto text-center">
            enjoy professional service from our highly <br /> qualified team.
            <br />
            Get high chances of winning, daily exciting
            <br /> bonuses, instant loading,
            <br /> and quick cashouts.
            <br /> Available 24/7, play anytime, anywhere where
            <br /> winning never stops.
          </h3>
        </div>
      </div>

      {/* Offers & Promotions */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* 🖼️ Background */}
        <div className="absolute inset-0 bg-[url('/images/why.png')] bg-contain bg-center"></div>

        {/* 🧠 Content */}
        <div className="relative z-10 w-full flex flex-col items-center py-2 px-6 text-center">
          {/* 🔝 TITLE */}
          <h1 className="font-cinzelDecorative text-xl md:text-3xl xl:text-5xl font-semibold text-white uppercase why-text">
            OFFERS & PROMOTIONS
          </h1>

          {/* 📱 MOBILE (2 per row) */}
          <div className="flex flex-col gap-0 md:hidden items-center">
            {chunk(offers, 2).map((row, i) => (
              <div key={i} className="flex justify-center gap-0">
                {row.map((item, idx) => (
                  <Sticker key={idx} {...item} />
                ))}
              </div>
            ))}
          </div>

          {/* 📲 TABLET (3 per row) */}
          <div className="hidden md:flex xl:hidden flex-col items-center gap-6">
            {chunk(offers, 3).map((row, i) => (
              <div key={i} className="flex justify-center gap-6">
                {row.map((item, idx) => (
                  <Sticker key={idx} {...item} />
                ))}
              </div>
            ))}
          </div>

          {/* 💻 DESKTOP (xl+) CUSTOM 4-3-4 */}
          <div className="hidden xl:flex flex-col items-center gap-6">
            {[offers.slice(0, 4), offers.slice(4, 7), offers.slice(7, 11)].map(
              (row, i) => (
                <div
                  key={i}
                  className={`flex justify-center ${
                    i === 1 ? "gap-12" : "gap-8"
                  }`}
                >
                  {row.map((item, idx) => (
                    <Sticker key={idx} {...item} />
                  ))}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Whatsapp */}
      <a
        href="https://wa.me/qr/IYZ34O72U6XFJ1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex flex-col items-center group"
      >
        {/* 🟢 Icon */}
        <div className="p-1 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
          <img
            src="/images/whatsapp-logo.png"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </div>

        {/* 🟢 Text */}
        <span className="text-white hidden md:block text-xs xl:text-sm font-bold font-cinzel tracking-wide uppercase drop-shadow-md transition-all duration-300 group-hover:translate-y-1">
          For more query
        </span>
      </a>
    </div>
  );
}

export default App;
