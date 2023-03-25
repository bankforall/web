import React, { useState, useEffect } from "react";
import BaseLayout from "@/components/BaseLayout";
import CountdownTimer from "@/components/CountdownTimer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PeerShareRoomData = {
  id: "1",
  roomName: "Peer Share Room",
  round: 1,
  paymentTerm: 500,
  paymentTermUnit: "1w",
  startBidDate: "2021-08-01",
  bidTimeOut: "1h",
  creditRequirement: "B",
  maxMember: 5,
  private: false,
  typeRoom: "float",
  inviteCode: "123456",
  roomPassword: "123456",
  members: [
    {
      id: "1",
      username: "John Doe",
      avartar: "https://picsum.photos/200",
      credit: "A",
      phoneNumber: "0123456789",
      isBidden: true,
      isPaid: true,
      isWinner: false,
      bitRate: 0,
      interest: 0,
      totalInterest: 0,
    },
    {
      id: "2",
      username: "John Doe 2",
      avartar: "https://picsum.photos/200",
      credit: "B",
      phoneNumber: "0123456789",
      isBidden: false,
      isPaid: true,
      isWinner: false,
      bitRate: 0,
      interest: 0,
      totalInterest: 0,
    },
    {
      id: "3",
      username: "John Doe 3",
      credit: "B+",
      avartar: "https://picsum.photos/200",
      phoneNumber: "0123456789",
      isBidden: false,
      isPaid: true,
      isWinner: true,
      bitRate: 0,
      interest: 50,
      totalInterest: 50,
    },
  ],
};

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
      ],
      hoverOffset: 20,
      borderWidth: 0,
    },
  ],
};

function PeerShareMenu({
  activeTab,
  onActiveTab,
}: {
  activeTab: number;
  onActiveTab: (tab: number) => void;
}) {
  return (
    <div className="bg-lightpurple rounded-bl-3xl rounded-br-3xl py-4 px-8">
      <h1 className="text-white font-medium my-8 text-center">Peer Share</h1>
      <ul className="flex justify-between space-x-4 text-white">
        <li className="flex flex-col justify-center items-center space-y-2">
          <button
            className="p-4 rounded-xl"
            style={{
              backgroundColor: activeTab === 0 ? "#7C6EFF" : "#665AD9",
            }}
            onClick={() => onActiveTab(0)}
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
            onClick={() => onActiveTab(1)}
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
              <rect x="1.62598" y="7.97998" width="2.17596" height="7.25238" />
              <rect x="5.97852" y="7.97998" width="2.17596" height="7.25238" />
              <rect x="10.3301" y="7.97998" width="2.17596" height="7.25238" />
              <rect x="14.6816" y="7.97998" width="2.17596" height="7.25238" />
            </svg>
          </button>
          <span className="text-sm">Pool</span>
        </li>
        <li className="flex flex-col justify-center items-center space-y-2">
          <button
            className="p-4 bg-[#665AD9] rounded-xl"
            onClick={() => onActiveTab(2)}
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
            onClick={() => onActiveTab(3)}
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
  );
}

function MemberCard({
  username,
  phoneNumber,
  avartar,
  isLast,
}: {
  username: string;
  phoneNumber: string;
  avartar: string;
  isLast: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center space-y-2 w-32 bg-white p-4 rounded-md shadow-sm ${
        isLast ? "mr-8" : ""
      }`}
    >
      <img className="w-16 h-16 rounded-2xl" src={avartar} alt="" />
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
  avartar,
  credit,
  isUser,
  isContact,
}: {
  username: string;
  phoneNumber: string;
  avartar: string;
  credit: string;
  isUser?: boolean;
  isContact?: boolean;
}) {
  return (
    <div className="flex justify-between items-center space-x-4 py-4 bg-white border-b-[1px]">
      <div className="flex items-center space-x-4">
        <img className="w-12 h-12 rounded-2xl" src={avartar} alt="profile" />
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

function ContactList({ members }: any) {
  return (
    <ul className="flex flex-col space-y-2">
      {members.map((member: any, index: number) => (
        <li>
          <ContactCard
            username={member.username}
            phoneNumber={member.phoneNumber}
            avartar={member.avartar}
            credit={member.credit}
          />
        </li>
      ))}
    </ul>
  );
}

function MemberList({ members }: any) {
  return (
    <ul className="flex space-x-4">
      {members.map((member: any, index: number) => (
        <li>
          <MemberCard
            username={member.username}
            phoneNumber={member.phoneNumber}
            avartar={member.avartar}
            isLast={members.length - 1 === index}
          />
        </li>
      ))}
    </ul>
  );
}

function MemberTab({ members }: any) {
  return (
    <>
      <div className="grid pl-8 mt-8">
        <h2 className="text-xl font-medium">Member</h2>
        <div className="mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <MemberList members={members} />
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
              fillRule="evenodd"
              clipRule="evenodd"
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
          <ContactList members={members} />
        </div>
      </div>
    </>
  );
}

function PoolMemberStatus({
  username,
  phoneNumber,
  avartar,
  credit,
  isWinner,
  ratio,
}: {
  username: string;
  phoneNumber: string;
  avartar: string;
  credit: string;
  isWinner?: boolean;
  ratio?: string;
}) {
  return (
    <div className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
      <div className="flex items-center space-x-4">
        <img className="w-12 h-12 rounded-2xl" src={avartar} alt="" />
        <div className="flex flex-col">
          <h3 className="font-medium text-sm">
            {username} : {credit}
            {ratio && `(${ratio})`}
          </h3>
          <p className="text-gray-400 text-[0.7rem]">{phoneNumber}</p>
        </div>
      </div>

      {isWinner ? (
        <span className="w-20 h-6 bg-gray-200 text-gray-500 rounded-md outline-none font-extralight text-sm flex justify-center items-center capitalize">
          lent
        </span>
      ) : (
        <span className="w-20 h-6 bg-green-200 text-green-500 rounded-md outline-none font-extralight text-sm flex justify-center items-center capitalize">
          Bid-able
        </span>
      )}
    </div>
  );
}

function PoolTab({
  members,
  maxMember,
  paymentTerm,
  creditRequirement,
  round,
}: any) {
  return (
    <>
      <div className="grid px-8 mt-8">
        <div>
          <h1 className="text-xl font-medium">Pool</h1>
          <span>
            {maxMember}/{paymentTerm}/{creditRequirement}
          </span>
        </div>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  padding: 20,
                  usePointStyle: true,
                  boxWidth: 8,
                  boxHeight: 8,
                  font: {
                    size: 10,
                  },
                },
              },
            },
          }}
        />
      </div>
      <div className="grid px-8 mt-8 py-4 space-y-4">
        <h2 className="text-xl font-medium">
          Round {round}/{maxMember}
        </h2>
        <div className="overflow-y-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex flex-col space-y-2">
            {members.map((member: any) => (
              <li>
                <PoolMemberStatus
                  username={member.username}
                  phoneNumber={member.phoneNumber}
                  avartar={member.avartar}
                  credit={member.credit}
                  isWinner={member.isWinner}
                  ratio="75/5"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function BidingAction({ onClose }: { onClose: () => void }) {
  const [bidRate, setBidRate] = useState(0);

  const handleBidRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      return;
    }

    setBidRate(Number(e.target.value));
  };

  const handleConfirm = () => {
    onClose();
    alert(`Confirm: ${bidRate}`);
  };

  return (
    <div className="absolute bottom-2 right-4 left-4 grid p-8 mt-8 z-30 bg-white rounded-xl shadow-2xl">
      <div className="py-2 border-b mb-8">
        <h1 className="text-xl font-medium">
          Biding /{" "}
          <span className="text-[#979797] text-sm">Ending date 31/01/2566</span>
        </h1>
      </div>
      <div className="text-sm">
        <div className="flex justify-between">
          <span>Payment term</span>
          <span>Bath 500</span>
        </div>
        <div className="flex justify-between">
          <span>Interest</span>
          <span>Bath {bidRate}</span>
        </div>
        <div className="flex justify-between">
          <span>Tern</span>
          <span>No. Round 2</span>
        </div>
        <div className="flex justify-between">
          <span>Total Interest</span>
          <span>Bath 100</span>
        </div>
        <div className="flex justify-between">
          <span>Total Interest (%)</span>
          <span>20% / year</span>
        </div>
      </div>
      <div className="mt-8 space-y-10">
        <div className="flex justify-between items-center">
          <span className="text-center mr-8 text-3xl text-light font-medium">
            Bath
          </span>
          <input
            className="text-3xl text-center font-medium w-[50%] bg-transparent border-b outline-none"
            placeholder="0"
            value={
              Math.round((bidRate + Number.EPSILON) * 100) / 100 || undefined
            }
            onChange={handleBidRate}
            type="number"
          />
        </div>
        <button
          onClick={handleConfirm}
          className="bg-[#7C6EFF] text-white rounded-xl py-4 px-8 w-full"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

function BidingMemberStatus({ avartar, username, isBidden }: any) {
  return (
    <div className="flex justify-between items-center space-x-4 py-4 border-b-[1px]">
      <div className="flex items-center space-x-4">
        <img className="w-12 h-12 rounded-2xl" src={avartar} alt="profile" />
        <h3 className="font-medium text-sm">{username}</h3>
      </div>

      {isBidden ? (
        <span className="w-20 h-6 bg-green-200 text-green-500 rounded-md outline-none font-extralight text-sm flex justify-center items-center capitalize">
          Bidden
        </span>
      ) : (
        <span className="min-w-20 px-3 h-6 bg-gray-200 text-gray-500 rounded-md outline-none font-extralight text-sm flex justify-center items-center capitalize">
          waiting for bid
        </span>
      )}
    </div>
  );
}

function BidingMemberList({ members }: any) {
  return (
    <ul className="flex flex-col space-y-2">
      {members.map((member: any) => (
        <>
          {!member.isWinner && (
            <li>
              <BidingMemberStatus
                avartar={member.avartar}
                username={member.username}
                isBidden={member.isBidden}
              />
            </li>
          )}
        </>
      ))}
    </ul>
  );
}

function BidingTab({ members }: any) {
  const [isBidding, setIsBidding] = useState(false);
  const [isBidden, setIsBidden] = useState(false);

  // if members is isPaid all return true
  const isAllPaid = members.every((member: any) => member.isPaid);

  // count how many members isPaid
  const countPaid = members.filter((member: any) => member.isPaid).length;

  const handleClose = () => {
    setIsBidding(false);
  };

  const handleBidding = () => {
    setIsBidding(true);
    setIsBidden(true);

    // TODO: call api to start bidding
  };

  return (
    <>
      <div className="relative flex flex-col px-8 pb-8 mt-8 z-0">
        {isBidding && <BidingAction onClose={handleClose} />}
        <h3 className="text-xl font-medium">Biding</h3>
        {isAllPaid ? (
          <>
            <p className="capitalize text-sm py-2">
              timeout in{" "}
              <span className="font-bold">
                <CountdownTimer targetDate={new Date("2023-03-26")} />
              </span>
            </p>
            <div className="relative max-h-[45vh] overflow-y-auto whitespace-nowrap scrollbar-hide">
              <BidingMemberList members={members} />
            </div>

            <button
              onClick={handleBidding}
              className="bg-[#7C6EFF] bottom-0 text-white rounded-xl py-4 px-8 w-full mt-8"
            >
              {isBidden ? "Change Bid Rate" : "Start Bid"}
            </button>
          </>
        ) : (
          <div className="text-md space-y-8">
            <div className="space-y-4">
              <p className="text-sm">
                All members must pay before bidding can begin. please wait.
              </p>
              <p className="text-sm text-red-700">
                if have any member who not pay, before bidding can begin, this
                pool will be canceled.
              </p>
            </div>

            <div className="w-full bg-lightpurple p-4 rounded-2xl capitalize text-white">
              <p className="text-xl font-bold text-center">
                {countPaid} / {members.length} members have paid
              </p>
              <p className="text-md text-center">
                time left to pay{" "}
                <span className="font-bold">
                  <CountdownTimer targetDate={new Date("2023-03-26")} />
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function PaymentTab({
  creditRequirement,
  paymentTerm,
  interest,
  term,
  totalTerm,
  totalInterest,
  totalInterestPerset,
  dueDate,
}: any) {
  return (
    <>
      <div className="grid px-8 -mt-8 pt-12 space-y-4 pb-4 bg-lightpurple min-h-screen">
        <div className="bg-white rounded-3xl p-4 space-y-8">
          <div>
            <h1 className="text-xl font-bold">Pool</h1>
            <p>
              {totalTerm}/{paymentTerm}/{creditRequirement}
            </p>
          </div>

          <div className="text-sm">
            <div className="flex justify-between">
              <span>Payment term</span>
              <span>Bath {paymentTerm}</span>
            </div>
            <div className="flex justify-between">
              <span>Interest</span>
              <span>Bath {interest}</span>
            </div>
            <div className="flex justify-between">
              <span>Tern</span>
              <span>No. Round {term}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Interest</span>
              <span>Bath {totalInterest}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Interest (%)</span>
              <span>{totalInterestPerset}% / year</span>
            </div>
          </div>

          <div className="grid justify-center text-center">
            <p className="text-sm">Total Payment this item</p>
            <p className="text-3xl">Bath 550</p>
            <p className="text-sm">
              Due date: <span className="text-gray-400">before {dueDate}</span>
            </p>
          </div>

          <div className="space-y-2">
            <span>Pay with</span>
            <div className="flex justify-center">
              <div className="space-x-4">
                <button>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="51" height="51" rx="16" fill="#2C62C7" />
                    <mask
                      id="mask0_621_5384"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="51"
                      height="51"
                    >
                      <rect width="51" height="51" rx="16" fill="white" />
                    </mask>
                    <g mask="url(#mask0_621_5384)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40.2101 37.3892V34.9587H39.6228V36.3718C39.4271 36.1174 39.1474 35.9761 38.7838 35.9761C38.0288 35.9761 37.4415 36.5696 37.4415 37.3892C37.4415 38.2087 38.0288 38.8022 38.7838 38.8022C39.1754 38.8022 39.455 38.6609 39.6228 38.4066V38.7457H40.2101V37.3892ZM22.8711 36.0327H23.822V36.5696H22.8711V37.7848C22.8711 38.0674 22.983 38.237 23.2627 38.237C23.4025 38.237 23.5982 38.2087 23.766 38.0957L23.9338 38.6044C23.7381 38.7174 23.4584 38.8022 23.2067 38.8022C22.5355 38.8022 22.2838 38.4348 22.2838 37.8131V36.5696H21.7525V36.0327H22.2838V35.2131H22.8711V36.0327ZM15.1245 37.05V38.7457H14.4813V37.2479C14.4813 36.7957 14.2855 36.5413 13.894 36.5413C13.5304 36.5413 13.2508 36.7674 13.2508 37.2479V38.7457H12.6635V37.2479C12.6635 36.7957 12.4677 36.5413 12.0762 36.5413C11.6847 36.5413 11.433 36.7674 11.433 37.2479V38.7457H10.8457V36.0327H11.433V36.3718C11.6567 36.0609 11.9364 35.9761 12.216 35.9761C12.6355 35.9761 12.9152 36.1457 13.111 36.4566C13.3627 36.0892 13.7262 35.9761 14.0618 35.9761C14.733 35.9761 15.1245 36.4 15.1245 37.05ZM28.7999 35.9761C28.4643 35.9761 28.2406 36.1457 28.1008 36.3718V36.0327H27.5135V38.7457H28.1008V37.2196C28.1008 36.7674 28.2966 36.5131 28.6601 36.5131C28.772 36.5131 28.9118 36.5413 29.0237 36.5696L29.1915 36.0044C29.0796 35.9761 28.9118 35.9761 28.7999 35.9761ZM20.1864 35.9761C20.6059 35.9761 20.9974 36.0609 21.2771 36.2587L21.0254 36.7392C20.8576 36.6544 20.522 36.5131 20.1864 36.5131C19.8788 36.5131 19.683 36.6261 19.683 36.824C19.683 36.9935 19.8788 37.05 20.1304 37.0783L20.4101 37.1066C20.9694 37.1913 21.333 37.4457 21.333 37.9261C21.333 38.4348 20.8855 38.8022 20.1025 38.8022C19.683 38.8022 19.2635 38.6892 18.9559 38.4631L19.2355 38.0109C19.4313 38.1522 19.7389 38.2935 20.1304 38.2935C20.522 38.2935 20.7457 38.1522 20.7457 37.9544C20.7457 37.8131 20.5779 37.7283 20.2703 37.6718L19.9906 37.6435C19.4033 37.5587 19.0677 37.3044 19.0677 36.8522C19.0677 36.3153 19.5152 35.9761 20.1864 35.9761ZM36.8821 35.9761C36.5466 35.9761 36.3228 36.1457 36.183 36.3718V36.0327H35.5957V38.7457H36.183V37.2196C36.183 36.7674 36.3788 36.5131 36.7423 36.5131C36.8542 36.5131 36.994 36.5413 37.1059 36.5696L37.2737 36.0044C37.1618 35.9761 36.994 35.9761 36.8821 35.9761ZM30.8135 38.8022C29.9466 38.8022 29.3872 38.2087 29.3872 37.3892C29.3872 36.5696 29.9466 35.9761 30.8135 35.9761C31.205 35.9761 31.4847 36.0609 31.7643 36.287L31.4847 36.7674C31.261 36.5979 31.0372 36.5131 30.7855 36.5131C30.3101 36.5413 29.9745 36.8805 29.9745 37.3892C29.9745 37.9261 30.3101 38.2653 30.7855 38.2653C31.0372 38.2653 31.261 38.1805 31.4847 38.0109L31.7643 38.4913C31.4847 38.7174 31.205 38.8022 30.8135 38.8022ZM34.8127 37.3892V36.0327H34.2254V36.3718C34.0296 36.1174 33.7499 35.9761 33.3864 35.9761C32.6313 35.9761 32.044 36.5696 32.044 37.3892C32.044 38.2087 32.6313 38.8022 33.3864 38.8022C33.7779 38.8022 34.0576 38.6609 34.2254 38.4066V38.7457H34.8127V37.3892ZM33.4703 36.5131C32.9669 36.5131 32.6593 36.9087 32.6593 37.3892C32.6593 37.8696 32.9669 38.237 33.4703 38.2653C33.9457 38.2653 34.2813 37.8696 34.2813 37.3892C34.2813 36.8805 33.9457 36.5131 33.4703 36.5131ZM25.6398 35.9761C24.8567 35.9761 24.2974 36.5413 24.2974 37.3892C24.2974 38.237 24.8567 38.8022 25.6677 38.8022C26.0593 38.8022 26.4508 38.6892 26.7584 38.4348L26.4788 38.0109C26.255 38.1805 25.9754 38.2935 25.6957 38.2935C25.3321 38.2935 24.9686 38.124 24.8847 37.6435H26.8703V37.4174C26.8982 36.5413 26.3949 35.9761 25.6398 35.9761ZM26.311 37.1348C26.255 36.7109 26.0033 36.4848 25.6398 36.4848C25.2203 36.4848 24.9686 36.7674 24.9127 37.1348H26.311ZM38.8677 36.5131C38.3643 36.5131 38.0567 36.9087 38.0567 37.3892C38.0567 37.8696 38.3643 38.237 38.8677 38.2653C39.3432 38.2653 39.6788 37.8696 39.6788 37.3892C39.6788 36.8805 39.3432 36.5131 38.8677 36.5131ZM18.4245 37.3892V36.0327H17.8372V36.3718C17.6415 36.1174 17.3618 35.9761 16.9982 35.9761C16.2432 35.9761 15.6559 36.5696 15.6559 37.3892C15.6559 38.2087 16.2432 38.8022 16.9982 38.8022C17.3898 38.8022 17.6694 38.6609 17.8372 38.4066V38.7457H18.4245V37.3892ZM17.0542 36.5131C16.5508 36.5131 16.2432 36.9087 16.2432 37.3892C16.2432 37.8696 16.5508 38.237 17.0542 38.2653C17.5296 38.2653 17.8652 37.8696 17.8652 37.3892C17.8652 36.8805 17.5296 36.5131 17.0542 36.5131Z"
                        fill="white"
                      />
                      <path
                        d="M21.0811 15.4304H29.8904V31.4261H21.0811V15.4304Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M21.6402 23.4283C21.6402 20.1783 23.1504 17.2957 25.4716 15.4305C23.7657 14.074 21.6123 13.2544 19.2631 13.2544C13.6979 13.2544 9.19531 17.8044 9.19531 23.4283C9.19531 29.0522 13.6979 33.6022 19.2631 33.6022C21.6123 33.6022 23.7657 32.7827 25.4716 31.4261C23.1504 29.5892 21.6402 26.6783 21.6402 23.4283Z"
                        fill="#EB001B"
                      />
                      <path
                        d="M41.7763 23.4283C41.7763 29.0522 37.2737 33.6022 31.7085 33.6022C29.3593 33.6022 27.2059 32.7827 25.5 31.4261C27.8492 29.5609 29.3314 26.6783 29.3314 23.4283C29.3314 20.1783 27.8212 17.2957 25.5 15.4305C27.2059 14.074 29.3593 13.2544 31.7085 13.2544C37.2737 13.2544 41.7763 17.8327 41.7763 23.4283Z"
                        fill="#F79E1B"
                      />
                    </g>
                  </svg>
                </button>
                <button>
                  <svg
                    width={51}
                    height={51}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width={51} height={51} rx={16} fill="#F7911E" />
                    <mask
                      id="a"
                      style={{
                        maskType: "luminance",
                      }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={51}
                      height={51}
                    >
                      <rect width={51} height={51} rx={16} fill="#fff" />
                    </mask>
                    <g mask="url(#a)">
                      <path fill="url(#b)" d="M7 7h38v37H7z" />
                    </g>
                    <defs>
                      <pattern
                        id="b"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use xlinkHref="#c" transform="scale(.00581 .00595)" />
                      </pattern>
                      <image
                        id="c"
                        width={172}
                        height={168}
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </button>
                <button>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="51" height="51" rx="16" fill="#F7911E" />
                    <mask
                      id="mask0_621_5408"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="51"
                      height="51"
                    >
                      <rect width="51" height="51" rx="16" fill="white" />
                    </mask>
                    <g mask="url(#mask0_621_5408)">
                      <rect width="51" height="51" fill="url(#pattern0)" />
                      <rect
                        x="5"
                        y="5"
                        width="41"
                        height="41"
                        fill="url(#pattern1)"
                      />
                    </g>
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_621_5408"
                          transform="scale(0.00217391)"
                        />
                      </pattern>
                      <pattern
                        id="pattern1"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_621_5408"
                          transform="scale(0.00217391)"
                        />
                      </pattern>
                      <image
                        id="image0_621_5408"
                        width="460"
                        height="460"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl space-y-4 p-4">
          <div className="flex border-b pb-4 space-x-4 border-dashed">
            <img
              className="w-12 h-12 rounded-2xl"
              src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
              alt=""
            />
            <div>
              <p className="text-gray-400 text-[0.6rem]">Profile name</p>
              <p className="text-lg font-medium">You</p>
            </div>
          </div>

          <div className="space-y-8">
            <svg
              className="w-full"
              width="303"
              height="73"
              viewBox="0 0 303 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.58105 72.4807H10.2381V0.690918H7.58105V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6074 72.4807H17.936V0.690918H16.6074V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7324 72.4807H22.061V0.690918H20.7324V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.05371 72.4807H5.10908V0.690918H4.05371V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00878906 72.4807H1.06416V0.690918H0.00878906V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.3213 72.4807H28.6493V0.690918H27.3213V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M289.808 72.4807H291.137V0.690918H289.808V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M260.087 72.4807H261.416V0.690918H260.087V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M266.553 72.4807H267.881V0.690918H266.553V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M272.371 72.4807H272.902V0.690918H272.371V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M230.772 72.4807H232.101V0.690918H230.772V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M237.239 72.4807H238.568V0.690918H237.239V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M244.639 72.4807H245.171V0.690918H244.639V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46.7783 72.4807H49.4348V0.690918H46.7783V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.3076 72.4807H41.0902V0.690918H36.3076V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M89.002 72.4807H91.659V0.690918H89.002V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M118.966 72.4807H123.748V0.690918H118.966V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M192.816 72.4807H198.131V0.690918H192.816V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M221.556 72.4807H224.213V0.690918H221.556V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M212.941 72.4807H213.738V0.690918H212.941V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M204.009 72.4807H204.806V0.690918H204.009V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.4004 72.4807H67.7289V0.690918H66.4004V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M79.2012 72.4807H79.9982V0.690918H79.2012V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M72.9346 72.4807H73.731V0.690918H72.9346V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M103.609 72.4807H104.407V0.690918H103.609V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M110.405 72.4807H111.734V0.690918H110.405V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M126.038 72.4807H126.835V0.690918H126.038V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M129.303 72.4807H130.631V0.690918H129.303V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M97.3418 72.4807H98.1388V0.690918H97.3418V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.5117 72.4807H85.1512V0.690918H82.5117V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M59.8252 72.4807H61.1537V0.690918H59.8252V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.9717 72.4807H55.8312V0.690918H53.9717V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M251.448 72.4807H254.105V0.690918H251.448V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M141.733 72.4807H143.062V0.690918H141.733V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M148.2 72.4807H149.528V0.690918H148.2V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M163.753 72.4807H166.144V0.690918H163.753V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M172.686 72.4807H175.077V0.690918H172.686V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M168.751 72.4807H170.08V0.690918H168.751V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M154.017 72.4807H154.549V0.690918H154.017V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M179.946 72.4807H180.478V0.690918H179.946V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M184.413 72.4807H184.944V0.690918H184.413V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M207.112 72.4807H207.644V0.690918H207.112V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M216.7 72.4807H218.029V0.690918H216.7V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M133.095 72.4807H135.752V0.690918H133.095V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M278.624 72.4807H281.281V0.690918H278.624V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299.663 72.4807H302.32V0.690918H299.663V72.4807Z"
                fill="#010604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M293.52 72.4807H296.176V0.690918H293.52V72.4807Z"
                fill="#010604"
              />
            </svg>

            <svg
              className="w-full"
              width="170"
              height="157"
              viewBox="0 0 170 157"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.929688 51.9274V0.231934H56.8797V51.9274H0.929688ZM14.0944 39.7638H43.715V12.3956H14.0944V39.7638Z"
                fill="black"
              />
              <rect
                x="22.3223"
                y="19.9978"
                width="13.1647"
                height="12.1636"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M113.488 51.9274V0.231934H169.438V51.9274H113.488ZM126.653 39.7638H156.274V12.3956H126.653V39.7638Z"
                fill="black"
              />
              <rect
                x="134.881"
                y="19.9978"
                width="13.1647"
                height="12.1636"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.929688 155.926V104.231H56.8797V155.926H0.929688ZM14.0944 143.763H43.715V116.395H14.0944V143.763Z"
                fill="black"
              />
              <rect
                x="22.3223"
                y="123.997"
                width="13.1647"
                height="12.1636"
                fill="black"
              />
              <rect
                x="14.0947"
                y="60.1379"
                width="13.1647"
                height="12.1636"
                fill="black"
              />
              <path
                d="M40.4235 84.4651V72.3015H27.2588V84.4651H40.0944V96.6288H53.2591V84.4651H40.4235Z"
                fill="black"
              />
              <rect
                x="93.083"
                y="23.647"
                width="13.1647"
                height="12.1636"
                fill="black"
              />
              <rect
                x="66.7529"
                y="12.3955"
                width="13.1647"
                height="23.415"
                fill="black"
              />
              <rect
                x="79.918"
                y="0.231934"
                width="13.1647"
                height="12.1636"
                fill="black"
              />
              <path
                d="M79.9176 35.8105V47.9742H66.7529V60.1378H93.0823V35.8105H79.9176Z"
                fill="black"
              />
              <path
                d="M93.0823 108.184V96.3247H79.9176V72.3015H66.7529V96.6288H79.9176V108.488H93.0823V120.348H119.412V108.184H93.0823Z"
                fill="black"
              />
              <rect
                x="93.083"
                y="60.1379"
                width="13.1647"
                height="24.3273"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M156.273 60.1379V71.9975H169.438V96.3248H132.577V84.4652H119.412V72.3016H132.248V60.1379H156.273ZM132.577 84.1611H156.273V72.3016H132.577V84.1611Z"
                fill="black"
              />
              <rect
                x="156.273"
                y="108.184"
                width="13.1647"
                height="24.3273"
                fill="black"
              />
              <rect
                x="106.247"
                y="84.4651"
                width="13.1647"
                height="12.1636"
                fill="black"
              />
              <rect
                x="119.412"
                y="120.348"
                width="13.1647"
                height="12.1636"
                fill="black"
              />
              <rect
                x="132.577"
                y="108.184"
                width="13.1647"
                height="12.1636"
                fill="black"
              />
              <path
                d="M132.577 132.511V155.926H145.742V144.675H156.274V132.511H132.577Z"
                fill="black"
              />
              <rect
                x="66.7529"
                y="108.488"
                width="13.1647"
                height="23.1109"
                fill="black"
              />
              <path
                d="M106.247 143.763V131.599H79.918V155.926H93.0827V143.763H105.918V155.926H119.083V143.763H106.247Z"
                fill="black"
              />
              <rect
                x="40.4238"
                y="60.1379"
                width="26.3294"
                height="12.1636"
                fill="black"
              />
              <rect
                x="0.929688"
                y="72.3015"
                width="13.1647"
                height="24.3273"
                fill="black"
              />
            </svg>
          </div>

          <p className="font-bold text-3xl text-center">
            Baht {paymentTerm + interest}
          </p>
        </div>

        <button className="w-full py-3 font-bold text-lightpurple bg-white rounded-lg">
          Confirm
        </button>
      </div>
    </>
  );
}

export default function PeerShareRoom() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  const RenderPeerShareTab = () => {
    switch (activeTab) {
      case 0:
        return <MemberTab members={PeerShareRoomData.members} />;
      case 1:
        return (
          <PoolTab
            creditRequirement={PeerShareRoomData.creditRequirement}
            paymentTerm={PeerShareRoomData.paymentTerm}
            maxMember={PeerShareRoomData.maxMember}
            round={PeerShareRoomData.round}
            members={PeerShareRoomData.members}
          />
        );
      case 2:
        return <BidingTab members={PeerShareRoomData.members} />;
      case 3:
        return (
          <PaymentTab
            creditRequirement={PeerShareRoomData.creditRequirement}
            paymentTerm={PeerShareRoomData.paymentTerm}
            interest={PeerShareRoomData.members[2].interest}
            term={PeerShareRoomData.round}
            totalTerm={PeerShareRoomData.maxMember}
            totalInterest={PeerShareRoomData.members[2].totalInterest}
            totalInterestPerset={
              (PeerShareRoomData.members[2].totalInterest * 100) /
              PeerShareRoomData.paymentTerm
            }
          />
        );
      default:
        return <MemberTab members={PeerShareRoomData.members} />;
    }

    return null;
  };

  return (
    <BaseLayout>
      <PeerShareMenu onActiveTab={handleTabClick} activeTab={activeTab} />
      <RenderPeerShareTab />
    </BaseLayout>
  );
}
