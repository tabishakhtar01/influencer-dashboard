const NavIcon1 = ({ strokeColor }) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.1685 21.145L26.9186 16.2836C25.7905 15.4055 24.2103 15.4055 23.0811 16.2836L16.8312 21.145C16.0698 21.7366 15.625 22.647 15.625 23.6116V31.25C15.625 32.9761 17.0239 34.375 18.75 34.375H31.2498C32.9758 34.375 34.3747 32.9761 34.3747 31.25V23.6116C34.3747 22.647 33.93 21.7366 33.1685 21.145Z"
      stroke={strokeColor}
      strokeWidth="1.5"
    />
    <path
      d="M21.8749 30.2085H28.1249"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default NavIcon1;
