import React from "react";

export default function PeerShareRoom() {
  return (
    <div className="max-w-[640px] max-h-screen mx-auto bg-[#F9F9FB] h-screen">
      <div className="bg-lightpurple rounded-bl-3xl rounded-br-3xl py-4 px-8">
        <h1 className="text-white font-medium my-8 text-center">Peer Share</h1>
        <ul className="flex justify-between space-x-4 text-white">
          <li className="flex flex-col justify-center items-center space-y-2">
            <button className="p-4 bg-[#7C6EFF] rounded-xl">
              <svg
                className="fill-white"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.60545 9C3.47001 9 0.105469 12.4393 0.105469 16.6667C0.105469 16.8507 0.251566 17 0.431566 17H14.7794C14.9594 17 15.1055 16.8507 15.1055 16.6667C15.1055 12.4393 11.7409 9 7.60545 9Z" />
                <circle cx="8.10547" cy="4" r="4" />
              </svg>
            </button>
            <span className="text-sm">Member</span>
          </li>
          <li className="flex flex-col justify-center items-center space-y-2">
            <button className="p-4 bg-[#665AD9] rounded-xl">
              <svg
                className="fill-white opacity-60"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.000976562"
                  y="16.3157"
                  width="18.482"
                  height="2.16766"
                />
                <rect
                  x="0.000976562"
                  y="4.72876"
                  width="18.482"
                  height="2.16766"
                />
                <path d="M9.24178 0L0.43457 3.64592H18.049L9.24178 0Z" />
                <rect
                  x="1.62598"
                  y="7.97998"
                  width="2.17596"
                  height="7.25238"
                />
                <rect
                  x="5.97852"
                  y="7.97998"
                  width="2.17596"
                  height="7.25238"
                />
                <rect
                  x="10.3301"
                  y="7.97998"
                  width="2.17596"
                  height="7.25238"
                />
                <rect
                  x="14.6816"
                  y="7.97998"
                  width="2.17596"
                  height="7.25238"
                />
              </svg>
            </button>
            <span className="text-sm">Pool</span>
          </li>
          <li className="flex flex-col justify-center items-center space-y-2">
            <button className="p-4 bg-[#665AD9] rounded-xl">
              <svg
                className="fill-white opacity-60"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.57113 4.94849C7.30113 4.94849 5.22473 6.10289 4.01713 8.03609C3.72473 8.50449 3.86713 9.12129 4.33553 9.41409C4.80353 9.70609 5.42073 9.56409 5.71353 9.09529C6.55313 7.75089 7.99553 6.94849 9.57113 6.94849C11.1467 6.94849 12.5887 7.75089 13.4287 9.09529C13.6183 9.39929 13.9443 9.56609 14.2775 9.56609C14.4587 9.56609 14.6415 9.51689 14.8063 9.41409C15.2747 9.12169 15.4171 8.50489 15.1247 8.03609C13.9175 6.10289 11.8415 4.94849 9.57113 4.94849Z" />
                <path d="M18.9903 5.62804C16.9459 2.35324 13.4247 0.398438 9.5711 0.398438C5.7175 0.398438 2.1967 2.35324 0.151899 5.62804C-0.140501 6.09644 0.00189933 6.71324 0.470299 7.00564C0.939099 7.29764 1.5559 7.15564 1.8483 6.68724C3.5251 4.00164 6.4123 2.39844 9.5711 2.39844C12.7299 2.39844 15.6171 4.00164 17.2939 6.68724C17.4835 6.99084 17.8095 7.15764 18.1427 7.15764C18.3235 7.15764 18.5067 7.10884 18.6715 7.00564C19.1403 6.71284 19.2827 6.09644 18.9903 5.62804Z" />
                <circle cx="9.57138" cy="11.4981" r="1.6456" />
              </svg>
            </button>
            <span className="text-sm">Biding</span>
          </li>
          <li className="flex flex-col justify-center items-center space-y-2">
            <button className="p-4 bg-[#665AD9] rounded-xl">
              <svg
                className="fill-white opacity-60"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 5.78V0H5.78V5.78H0ZM1.36 4.42H4.42V1.36H1.36V4.42Z"
                />
                <rect x="2.20996" y="2.20996" width="1.36" height="1.36" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6279 5.78V0H17.4079V5.78H11.6279ZM12.9879 4.42H16.0479V1.36H12.9879V4.42Z"
                />
                <rect x="13.8379" y="2.20996" width="1.36" height="1.36" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 17.4079V11.6279H5.78V17.4079H0ZM1.36 16.0479H4.42V12.9879H1.36V16.0479Z"
                />
                <rect x="2.20996" y="13.8379" width="1.36" height="1.36" />
                <rect x="1.36035" y="6.698" width="1.36" height="1.36" />
                <path d="M4.07973 9.41811V8.05811H2.71973V9.41811H4.04573V10.7781H5.40573V9.41811H4.07973Z" />
                <rect x="9.51953" y="2.61792" width="1.36" height="1.36" />
                <rect x="6.7998" y="1.36011" width="1.36" height="2.618" />
                <rect x="8.16016" width="1.36" height="1.36" />
                <path d="M8.1598 3.97803V5.33803H6.7998V6.69803H9.5198V3.97803H8.1598Z" />
                <path d="M9.5198 12.0701V10.7441H8.1598V8.05811H6.7998V10.7781H8.1598V12.1041H9.5198V13.4301H12.2398V12.0701H9.5198Z" />
                <rect x="9.51953" y="6.698" width="1.36" height="2.72" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0482 6.698V8.024H17.4082V10.744H13.6002V9.418H12.2402V8.058H13.5662V6.698H16.0482ZM13.6002 9.384H16.0482V8.058H13.6002V9.384Z"
                />
                <rect x="16.0479" y="12.0701" width="1.36" height="2.72" />
                <rect x="10.8799" y="9.41797" width="1.36" height="1.36" />
                <rect x="12.2402" y="13.4299" width="1.36" height="1.36" />
                <rect x="13.5996" y="12.0701" width="1.36" height="1.36" />
                <path d="M13.5996 14.79V17.408H14.9596V16.15H16.0476V14.79H13.5996Z" />
                <rect x="6.7998" y="12.104" width="1.36" height="2.584" />
                <path d="M10.8802 16.048V14.688H8.16016V17.408H9.52016V16.048H10.8462V17.408H12.2062V16.048H10.8802Z" />
                <rect x="4.08008" y="6.698" width="2.72" height="1.36" />
                <rect y="8.05811" width="1.36" height="2.72" />
              </svg>
            </button>
            <span className="text-sm">Payment</span>
          </li>
        </ul>
      </div>
      <div className="grid px-8 mt-8">
        <h2 className="text-xl font-medium">Member</h2>
        <div className="mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex space-x-2">
            <li className="bg-white rounded-xl p-4">
              <div className="flex flex-col justify-center items-center space-y-2 w-28">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="space-y-2 text-center">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
            </li>
            <li className="bg-white rounded-xl p-4">
              <div className="flex flex-col justify-center items-center space-y-2 w-28">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="space-y-2 text-center">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
            </li>
            <li className="bg-white rounded-xl p-4">
              <div className="flex flex-col justify-center items-center space-y-2 w-28">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="space-y-2 text-center">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
            </li>
            <li className="bg-white rounded-xl p-4">
              <div className="flex flex-col justify-center items-center space-y-2 w-28">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="space-y-2 text-center">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid px-8 mt-8 py-4 bg-white space-y-4">
        <h2 className="text-xl font-medium">All contacts</h2>
        <input
          className="bg-[#F9F9FB] px-4 py-2 rounded-lg outline-none"
          type="text"
          placeholder="Search name or number."
        />

        <div className="overflow-y-auto max-h-[40vh] whitespace-nowrap scrollbar-hide">
          <ul className="flex flex-col space-y-2">
            <li className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
              <button className="bg-[#9EA6BE] px-8 py-2 rounded-lg outline-none font-light text-white">
                Add
              </button>
            </li>
            <li className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
              <button className="bg-[#9EA6BE] px-8 py-2 rounded-lg outline-none font-light text-white">
                Add
              </button>
            </li>
            <li className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
              <button className="bg-[#9EA6BE] px-8 py-2 rounded-lg outline-none font-light text-white">
                Add
              </button>
            </li>
            <li className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
              <button className="bg-[#9EA6BE] px-8 py-2 rounded-lg outline-none font-light text-white">
                DM
              </button>
            </li>
            <li className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
              <button className="bg-[#9EA6BE] px-8 py-2 rounded-lg outline-none font-light text-white">
                DM
              </button>
            </li>
            <li className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
              <button className="bg-[#9EA6BE] px-8 py-2 rounded-lg outline-none font-light text-white">
                DM
              </button>
            </li>
            <li className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="font-medium">Halley</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
              <button className="bg-[#9EA6BE] px-8 py-2 rounded-lg outline-none font-light text-white">
                DM
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
