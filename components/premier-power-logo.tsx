export function PremierPowerLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        <rect width="48" height="48" rx="8" fill="#252821" />
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="7"
          stroke="#e8ba54"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        {/* Shield outline */}
        <path
          d="M24 9L34.5 13.5V22.5C34.5 29.5 30 36 24 38.5C18 36 13.5 29.5 13.5 22.5V13.5L24 9Z"
          fill="#1c1e19"
          stroke="#e8ba54"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        {/* Power lightning bolt */}
        <path
          d="M25.5 14L18.5 23.5H24.5L22.5 33.5L30.5 22H24.5L25.5 14Z"
          fill="url(#ppGoldGradient)"
        />
        <defs>
          <linearGradient
            id="ppGoldGradient"
            x1="18.5"
            y1="14"
            x2="30.5"
            y2="33.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f7d98c" />
            <stop offset="1" stopColor="#cca13f" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}
