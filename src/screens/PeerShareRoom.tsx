import React from "react";
import BaseLayout from "@/components/BaseLayout";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function MemberCard({
  username,
  phoneNumber,
  profilePicture,
}: {
  username: string;
  phoneNumber: string;
  profilePicture: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 w-32 bg-white p-4 rounded-md shadow-sm">
      <img className="w-16 h-16 rounded-2xl" src={profilePicture} alt="" />
      <div className="text-center">
        <h3 className="font-medium text-base">{username}</h3>
        <p className="text-gray-400 text-[0.7rem]">{phoneNumber}</p>
      </div>
    </div>
  );
}

function ContactCard({
  username,
  phoneNumber,
  profilePicture,
  credit,
  isUser,
  isContact,
}: {
  username: string;
  phoneNumber: string;
  profilePicture: string;
  credit: string;
  isUser?: boolean;
  isContact?: boolean;
}) {
  return (
    <div className="flex justify-between items-center space-x-4 py-4 bg-white border-b-[1px]">
      <div className="flex items-center space-x-4">
        <img className="w-12 h-12 rounded-2xl" src={profilePicture} alt="" />
        <div className="flex flex-col">
          <h3 className="font-medium">
            {username} : {credit}
          </h3>
          <p className="text-gray-400 text-[0.7rem]">{phoneNumber}</p>
        </div>
      </div>
      {isUser ? null : (
        <button className="bg-[#9EA6BE] w-20 h-10 rounded-lg outline-none font-extralight text-sm text-white">
          {isContact ? "DM" : "Add"}
        </button>
      )}
    </div>
  );
}

function MemberTab() {
  return (
    <>
      <div className="grid pl-8 mt-8">
        <h2 className="text-xl font-medium">Member</h2>
        <div className="mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex space-x-4 ">
            <li>
              <MemberCard
                username="Hailey Sanders"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
              />
            </li>
            <li>
              <MemberCard
                username="Zayn Michel"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
              />
            </li>
            <li>
              <MemberCard
                username="Thomas Denver"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
              />
            </li>
            <li>
              <MemberCard
                username="Sherry Blossom"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
              />
            </li>
            <li className="pr-8">
              <MemberCard
                username="You"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="grid px-8 mt-8 py-4 bg-white space-y-4">
        <h2 className="text-xl font-medium">All contacts</h2>
        <div className="bg-[#F9F9FB] rounded-lg outline-none flex items-center pl-4">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 8C0 3.58892 3.58892 0 8 0C12.4113 0 16 3.58892 16 8C16 12.4113 12.4113 16 8 16C3.58892 16 0 12.4113 0 8ZM1.47692 8.00004C1.47692 11.5968 4.4032 14.5231 8 14.5231C11.5968 14.5231 14.5231 11.5968 14.5231 8C14.5231 4.4032 11.5968 1.47692 8 1.47692C4.4032 1.47692 1.47692 4.40324 1.47692 8.00004Z"
              fill="#8F96AD"
            />
            <path
              d="M18.7727 17.6756L14.3244 13.2273C14.0213 12.9242 13.5304 12.9242 13.2273 13.2273C12.9242 13.5302 12.9242 14.0216 13.2273 14.3244L17.6756 18.7727C17.8271 18.9242 18.0255 19 18.2241 19C18.4225 19 18.6211 18.9242 18.7727 18.7727C19.0758 18.4698 19.0758 17.9784 18.7727 17.6756Z"
              fill="#8F96AD"
            />
          </svg>

          <input
            className="bg-[#F9F9FB] px-4 py-2 w-full outline-none "
            type="text"
            placeholder="Search name or number."
          />
        </div>

        <div className="overflow-y-auto max-h-[50vh] whitespace-nowrap scrollbar-hide">
          <ul className="flex flex-col space-y-2">
            <li>
              <ContactCard
                username="Hailey Sanders"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="A"
              />
            </li>
            <li>
              <ContactCard
                username="Zayn Michel"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="B+"
              />
            </li>
            <li>
              <ContactCard
                username="Thomas Denver"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="B+"
                isContact={true}
              />
            </li>
            <li>
              <ContactCard
                username="Sherry Blossom"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="A"
                isContact={true}
              />
            </li>
            <li>
              <ContactCard
                username="You"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="A"
                isUser={true}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function PoolMemberAction({
  username,
  phoneNumber,
  profilePicture,
  credit,
  status,
  ratio,
}: {
  username: string;
  phoneNumber: string;
  profilePicture: string;
  credit: string;
  status: string;
  ratio?: string;
}) {
  return (
    <div className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
      <div className="flex items-center space-x-4">
        <img className="w-12 h-12 rounded-2xl" src={profilePicture} alt="" />
        <div className="flex flex-col">
          <h3 className="font-medium text-sm">
            {username} : {credit}
            {ratio && `(${ratio})`}
          </h3>
          <p className="text-gray-400 text-[0.7rem]">{phoneNumber}</p>
        </div>
      </div>
      <button
        className="w-20 h-10 rounded-lg outline-none font-extralight text-sm text-white"
        style={{
          backgroundColor: status === "lend" ? "#9EA6BE" : "#6DC82A",
        }}
      >
        {status === "lend" ? "Lend" : "Bid-able"}
      </button>
    </div>
  );
}

function PoolTab() {
  return (
    <>
      <div className="grid px-8 mt-8">
        <div>
          <h1 className="text-xl font-medium">Pool</h1>
          <span>5/500/B+</span>
        </div>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "bottom",
              },
            },
          }}
        />
      </div>
      <div className="grid px-8 mt-8 py-4 space-y-4">
        <h2 className="text-xl font-medium">Round 3/5</h2>
        <div className="overflow-y-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex flex-col space-y-2">
            <li>
              <PoolMemberAction
                username="Hailey Sanders"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="A"
                status="lend"
                ratio="75/5"
              />
            </li>
            <li>
              <PoolMemberAction
                username="Zayn Michel"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="B+"
                status="lend"
                ratio="75/4"
              />
            </li>
            <li>
              <PoolMemberAction
                username="Thomas Denver"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="B+"
                status="bid-able"
              />
            </li>
            <li>
              <PoolMemberAction
                username="Sherry Blossom"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="A"
                status="bid-able"
              />
            </li>
            <li>
              <PoolMemberAction
                username="You"
                phoneNumber="+66 985 9385"
                profilePicture="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                credit="A"
                status="bid-able"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default function PeerShareRoom() {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <BaseLayout>
      <div className="bg-lightpurple rounded-bl-3xl rounded-br-3xl py-4 px-8">
        <h1 className="text-white font-medium my-8 text-center">Peer Share</h1>
        <ul className="flex justify-between space-x-4 text-white">
          <li className="flex flex-col justify-center items-center space-y-2">
            <button
              className="p-4 rounded-xl"
              style={{
                backgroundColor: activeTab === 0 ? "#7C6EFF" : "#665AD9",
              }}
              onClick={() => handleTabClick(0)}
            >
              <svg
                className="fill-white"
                style={{
                  opacity: activeTab === 0 ? 1 : 0.6,
                }}
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
            <button
              className="p-4 rounded-xl"
              style={{
                backgroundColor: activeTab === 1 ? "#7C6EFF" : "#665AD9",
              }}
              onClick={() => handleTabClick(1)}
            >
              <svg
                className="fill-white"
                style={{
                  opacity: activeTab === 1 ? 1 : 0.6,
                }}
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
            <button
              className="p-4 bg-[#665AD9] rounded-xl"
              onClick={() => handleTabClick(2)}
              style={{
                backgroundColor: activeTab === 2 ? "#7C6EFF" : "#665AD9",
              }}
            >
              <svg
                className="fill-white"
                style={{
                  opacity: activeTab === 2 ? 1 : 0.6,
                }}
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
            <button
              className="p-4 bg-[#665AD9] rounded-xl"
              onClick={() => handleTabClick(3)}
              style={{
                backgroundColor: activeTab === 3 ? "#7C6EFF" : "#665AD9",
              }}
            >
              <svg
                className="fill-white"
                style={{
                  opacity: activeTab === 3 ? 1 : 0.6,
                }}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 5.78V0H5.78V5.78H0ZM1.36 4.42H4.42V1.36H1.36V4.42Z"
                />
                <rect x="2.20996" y="2.20996" width="1.36" height="1.36" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6279 5.78V0H17.4079V5.78H11.6279ZM12.9879 4.42H16.0479V1.36H12.9879V4.42Z"
                />
                <rect x="13.8379" y="2.20996" width="1.36" height="1.36" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                  fillRule="evenodd"
                  clipRule="evenodd"
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

      {activeTab === 0 && <MemberTab />}
      {activeTab === 1 && <PoolTab />}
    </BaseLayout>
  );
}
