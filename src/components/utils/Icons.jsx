export const Logo = () => (
  <svg
    viewBox="0 0 51 50"
    width="21.5"
    className="absolute cursor-pointer origin-top-left overflow-visible pointer-events-auto"
    style={{ marginTop: "2.1px", width: "auto" }}
  >
    <style>
      {`
        @keyframes ghost-move {
          0% { transform: translateX(0) translateY(0) rotate(0deg); filter: blur(0px); }
          8% { transform: translateX(-5px) translateY(-5px) rotate(-3deg); filter: blur(0px); }
          16% { transform: translateX(-10px) translateY(-10px) rotate(-5deg); filter: blur(0px); }
          25% { transform: translateX(-20px) translateY(-20px) rotate(0deg); filter: blur(0px); }
          34% { transform: translateX(-30px) translateY(0px) rotate(5deg); filter: blur(0px); }
          42% { transform: translateX(-20px) translateY(3px) rotate(0deg); filter: blur(0px); }
          50% { transform: translateX(-10px) translateY(8px) rotate(0deg); filter: blur(0px); }
          60% { transform: translateX(0px) translateY(10px) rotate(3deg); filter: blur(0px); }
          68% { transform: translateX(5px) translateY(5px) rotate(0deg); filter: blur(0px); }
          85% { transform: translateX(10px) translateY(-5px) rotate(3deg); filter: blur(0px); }
          92% { transform: translateX(15px) translateY(-10px) rotate(0deg); filter: blur(0px); }
          100% { transform: translateX(0) translateY(0px) rotate(0deg); filter: blur(0px); }
        }
      `}
    </style>

    {/* Inner Animated SVG */}
    <svg
      viewBox="0 0 143 133"
      width="60"
      height="56"
      style={{
        animation: "ghost-move 5s infinite ease-in-out",
        display: "block",
        transformOrigin: "center center",
        overflow: "visible",
      }}
    >
      <path
        d="M88.3101 51.4392C93.9242 61.2951 96.6273 66.2022 101.493 74.6442C106.818 83.8842 113.012 93.857 116.376 100.13C105.277 100.13 101.41 100.13 95.9203 100.13C90.4309 100.13 89.8903 100.13 85.9396 100.13C76.2114 100.13 75.5015 100.13 74.2955 100.13C67.5043 100.13 63.2336 100.13 56.7462 100.13C47.0982 100.13 11.2094 100.315 0.871582 100.315C28.0093 53.5677 30.9041 48.3268 58.7056 0.311768C67.4174 15.0811 77.4543 32.3812 88.3101 51.4392Z"
        fill="white"   // 👈 changed to white
      />
    </svg>
  </svg>
);
export const Menu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    fill="white"
    width="24"
    height="24"
  >
    <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
  </svg>
);
export const Cross = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" 
   width="24"
    height="24"
     fill="white">
    <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
  </svg>
)
export const Down=()=>(
  <svg xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
     fill="white"
  viewBox="0 0 640 640"><path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>
)
export const Up=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"   width="24"
    height="24"
     fill="white"
  >
    <path d="M297.4 201.4C309.9 188.9 330.2 188.9 342.7 201.4L502.7 361.4C515.2 373.9 515.2 394.2 502.7 406.7C490.2 419.2 469.9 419.2 457.4 406.7L320 269.3L182.6 406.6C170.1 419.1 149.8 419.1 137.3 406.6C124.8 394.1 124.8 373.8 137.3 361.3L297.3 201.3z"/></svg>
)