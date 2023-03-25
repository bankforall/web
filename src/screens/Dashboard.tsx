import React, { useState, useEffect } from "react";
import BaseLayout from "@/components/BaseLayout";
import { Link } from "react-router-dom";
import { getSummary } from "@/service/summary.service";
import { MainDashboardSummary } from "@/model/summary";
import { deposit, withdraw } from "@/service/account-transaction.service";

const RangeSlider = ({ title, value, onInputChange, handleCancel }: any) => {
  return (
    <div className="absolute flex flex-col items-center bg-white rounded-md space-y-4 py-8 z-30 top-[50%] left-4 right-4 shadow-lg">
      <h1 className="text-purple text-2xl font-bold">{title}</h1>
      <p className="text-purple text-2xl">{value}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="w-80"
        onChange={onInputChange}
      />

      <div className="space-x-2">
        <button
          onClick={handleCancel}
          className="w-24 py-2 bg-gray-200 text-gray-600  rounded-md capitalize font-bold"
        >
          Cancel
        </button>
        <button className="w-24 py-2 bg-lightpurple text-white rounded-md capitalize font-bold">
          Save
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [moneyToInvestAndSave, setMoneyToInvestAndSave] = useState({
    investYourMoney: 0,
    saveYourMoney: 0,
  });

  const [InvestmentSliderModal, setInvestmentSliderModal] = useState(false);
  const [SavingSliderModal, setSavingSliderModal] = useState(false);

  const handleInvestYourMoney = (e: any) => {
    setMoneyToInvestAndSave({
      ...moneyToInvestAndSave,
      investYourMoney: e.target.value,
    });

    console.log(moneyToInvestAndSave);
  };

  const handleSaveYourMoney = (e: any) => {
    setMoneyToInvestAndSave({
      ...moneyToInvestAndSave,
      saveYourMoney: e.target.value,
    });

    console.log(moneyToInvestAndSave);
  };

  const toggleShowSliderModal = (showSliderModal: boolean, onToggle: any) => {
    onToggle(!showSliderModal);
  };

  const [data, setData] = useState({
    mainSummary: {
      balance: "",
      peerShareBalance: "",
      microFinanceBalance: "",
    } as MainDashboardSummary,
  });

  useEffect(() => {
    async function fetchData() {
      const response = await getSummary();
      setData({ mainSummary: response });
    }

    fetchData();
    console.log("fetched");
  }, []);

  let microFinanceAmount: string = data.mainSummary.microFinanceBalance;
  let peerSharingAmount: string = data.mainSummary.peerShareBalance;
  let totalSaving: string = data.mainSummary.balance;
  console.log("data", data);
  console.log(microFinanceAmount, peerSharingAmount, totalSaving);

  function addMoneyButtonClick() {
    depositMoney();
  }

  function withdrawMoneyButtonClick() {
    withdrawMoney();
  }

  async function depositMoney(): Promise<void> {
    const response = await deposit(1000);
    if (response) {
      const newBalance = parseInt(data.mainSummary.balance) + 1000;
      const newMainSummary = {
        ...data.mainSummary,
        balance: newBalance.toString(),
      };
      setData({ mainSummary: newMainSummary });
    } else {
      alert("fail something something");
    }
  }

  async function withdrawMoney(): Promise<void> {
    const response = await withdraw(1000);
    console.log("with", response);
    if (response) {
      const newBalance = parseInt(data.mainSummary.balance) - 1000;
      const newMainSummary = {
        ...data.mainSummary,
        balance: newBalance.toString(),
      };
      setData({ mainSummary: newMainSummary });
    } else {
      alert("Insufficient balance");
    }
  }

  return (
    <BaseLayout>
      <div className="relative px-4 space-y-8 pb-8 z-0">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-between py-4">
            <div className="text-start my-2 font-semibold">You</div>
            <div className="items-end w-10 h-10">
              <img src="https://png.pngitem.com/pimgs/s/168-1689599_male-user-filled-icon-user-icon-100-x.png"></img>
            </div>
          </div>

          {InvestmentSliderModal && (
            <>
              <RangeSlider
                title="Invest Your Money"
                value={moneyToInvestAndSave.investYourMoney}
                onInputChange={handleInvestYourMoney}
                handleCancel={() => {
                  toggleShowSliderModal(
                    InvestmentSliderModal,
                    setInvestmentSliderModal
                  );
                }}
              />
            </>
          )}

          {SavingSliderModal && (
            <>
              <RangeSlider
                title="Save Your Money"
                value={moneyToInvestAndSave.saveYourMoney}
                onInputChange={handleSaveYourMoney}
                handleCancel={() => {
                  toggleShowSliderModal(
                    SavingSliderModal,
                    setSavingSliderModal
                  );
                }}
              />
            </>
          )}

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#7165E3] text-white font-bold rounded text-center px-20 py-10 ">
              <div className="font-thin text-l">Total Saving</div>
              <p className="font-bold text-3xl ">Baht {totalSaving ?? "-"}</p>
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-100 dark:text-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={addMoneyButtonClick}
            className="bg-[#D5F6EE] hover:bg-gray-400 text-gray-800 font-semibold py-2 px-3 rounded inline-flex items-center"
          >
            <svg
              className=""
              width="30"
              height="30"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.25 0H18.75C18.286 0.000662407 17.8412 0.239026 17.5131 0.662793C17.1851 1.08656 17.0005 1.66112 17 2.26042V9.6875H14V2.26042C13.9995 1.66112 13.8149 1.08656 13.4869 0.662793C13.1588 0.239026 12.714 0.000662407 12.25 0H1.75C1.28603 0.000662407 0.841207 0.239026 0.51313 0.662793C0.185052 1.08656 0.000512831 1.66112 0 2.26042V28.7396C0.000512831 29.3389 0.185052 29.9134 0.51313 30.3372C0.841207 30.761 1.28603 30.9993 1.75 31H12.25C12.714 30.9993 13.1588 30.761 13.4869 30.3372C13.8149 29.9134 13.9995 29.3389 14 28.7396V21.3932H17V28.7396C17.0005 29.3389 17.1851 29.9134 17.5131 30.3372C17.8412 30.761 18.286 30.9993 18.75 31H29.25C29.714 30.9993 30.1588 30.761 30.4869 30.3372C30.8149 29.9134 30.9995 29.3389 31 28.7396V2.26042C30.9995 1.66112 30.8149 1.08656 30.4869 0.662793C30.1588 0.239026 29.714 0.000662407 29.25 0ZM26.3594 1.29167L26.1094 2.58333H21.8906L21.6406 1.29167H26.3594ZM19.5 10.9792C19.6326 10.9792 19.7598 10.9111 19.8536 10.79C19.9473 10.6689 20 10.5046 20 10.3333V9.77469L21.7188 11.625L20 13.4753V12.9167C20 12.7454 19.9473 12.5811 19.8536 12.46C19.7598 12.3389 19.6326 12.2708 19.5 12.2708H15.2812H11.0625V10.9792H19.5ZM17 13.5625V17.5182H14V13.5625H17ZM9.35938 1.29167L9.10938 2.58333H4.89062L4.64062 1.29167H9.35938ZM13 28.7396C12.9998 28.9964 12.9208 29.2427 12.7801 29.4244C12.6395 29.606 12.4489 29.7081 12.25 29.7083H1.75C1.55114 29.7081 1.36047 29.606 1.21985 29.4244C1.07924 29.2427 1.00017 28.9964 1 28.7396V2.26042C1.00017 2.00355 1.07924 1.75727 1.21985 1.57564C1.36047 1.39401 1.55114 1.29188 1.75 1.29167H3.60938L4.015 3.38578C4.04204 3.5255 4.10446 3.64954 4.19233 3.73818C4.28021 3.82682 4.3885 3.87498 4.5 3.875H9.5C9.6115 3.87498 9.71979 3.82682 9.80767 3.73818C9.89554 3.64954 9.95796 3.5255 9.985 3.38578L10.3906 1.29167H12.25C12.4489 1.29188 12.6395 1.39401 12.7801 1.57564C12.9208 1.75727 12.9998 2.00355 13 2.26042V9.6875H10.5625C10.4299 9.6875 10.3027 9.75554 10.2089 9.87666C10.1152 9.99778 10.0625 10.162 10.0625 10.3333V12.9167C10.0625 13.088 10.1152 13.2522 10.2089 13.3733C10.3027 13.4945 10.4299 13.5625 10.5625 13.5625H13V17.5182H12V16.2266C11.9999 16.1039 11.9727 15.9838 11.9217 15.8803C11.8707 15.7768 11.798 15.6942 11.712 15.6421C11.626 15.5901 11.5303 15.5707 11.4361 15.5863C11.3419 15.6018 11.2531 15.6517 11.18 15.7301L8.18 18.9592C8.12366 19.0199 8.07833 19.0958 8.04722 19.1816C8.01611 19.2674 7.99999 19.361 7.99999 19.4557C7.99999 19.5505 8.01611 19.644 8.04722 19.7298C8.07833 19.8156 8.12366 19.8916 8.18 19.9522L11.18 23.1814C11.2531 23.2597 11.3419 23.3096 11.4361 23.3252C11.5303 23.3408 11.626 23.3214 11.712 23.2693C11.798 23.2173 11.8707 23.1346 11.9217 23.0312C11.9727 22.9277 11.9999 22.8076 12 22.6849V21.3932H13V28.7396ZM11.5 20.1016C11.3674 20.1016 11.2402 20.1696 11.1464 20.2907C11.0527 20.4118 11 20.5761 11 20.7474V21.306L9.28125 19.4557L11 17.6054V18.1641C11 18.3353 11.0527 18.4996 11.1464 18.6207C11.2402 18.7419 11.3674 18.8099 11.5 18.8099H20V20.1016H11.5ZM30 28.7396C29.9998 28.9964 29.9208 29.2427 29.7801 29.4244C29.6395 29.606 29.4489 29.7081 29.25 29.7083H18.75C18.5511 29.7081 18.3605 29.606 18.2199 29.4244C18.0792 29.2427 18.0002 28.9964 18 28.7396V21.3932H20.5C20.6326 21.3932 20.7598 21.3252 20.8536 21.2041C20.9473 21.083 21 20.9187 21 20.7474V18.1641C21 17.9928 20.9473 17.8285 20.8536 17.7074C20.7598 17.5863 20.6326 17.5182 20.5 17.5182H18V13.5625H19V14.8542C19 14.9769 19.027 15.0972 19.078 15.2008C19.129 15.3044 19.2017 15.3871 19.2878 15.4392C19.3738 15.4913 19.4696 15.5106 19.5639 15.495C19.6581 15.4793 19.747 15.4292 19.82 15.3506L22.82 12.1215C22.8763 12.0608 22.9217 11.9849 22.9528 11.8991C22.9839 11.8133 23 11.7197 23 11.625C23 11.5303 22.9839 11.4367 22.9528 11.3509C22.9217 11.2651 22.8763 11.1892 22.82 11.1285L19.82 7.89935C19.7469 7.82099 19.6581 7.77111 19.5639 7.75553C19.4697 7.73996 19.374 7.75934 19.288 7.81141C19.202 7.86348 19.1293 7.94608 19.0783 8.04957C19.0273 8.15306 19.0001 8.27316 19 8.39583V9.6875H18V2.26042C18.0002 2.00355 18.0792 1.75727 18.2199 1.57564C18.3605 1.39401 18.5511 1.29188 18.75 1.29167H20.6094L21.015 3.38578C21.042 3.5255 21.1045 3.64954 21.1923 3.73818C21.2802 3.82682 21.3885 3.87498 21.5 3.875H26.5C26.6115 3.87498 26.7198 3.82682 26.8077 3.73818C26.8955 3.64954 26.958 3.5255 26.985 3.38578L27.3906 1.29167H29.25C29.4489 1.29188 29.6395 1.39401 29.7801 1.57564C29.9208 1.75727 29.9998 2.00355 30 2.26042V28.7396Z"
                fill="#36C4A2"
              />
            </svg>
            <span className="mx-2">Add money (1000)</span>
          </button>

          <button
            onClick={withdrawMoneyButtonClick}
            className="bg-[#FFF1D1] hover:bg-gray-400 text-gray-800 font-semibold py-2 px-3 rounded inline-flex items-center"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.54883 13.2857C9.54883 13.5915 9.79669 13.8393 10.1024 13.8393V12.7322C9.79669 12.7322 9.54883 12.98 9.54883 13.2857Z"
                fill="#FD9101"
              />
              <path
                d="M10.6897 9.96439H10.6565C8.21053 9.95547 6.22059 11.9311 6.21194 14.377C6.20302 16.8227 8.17864 18.8126 10.6243 18.8215C11.7969 18.8204 12.9229 18.3639 13.7654 17.5484C15.0418 16.2913 15.4353 14.3889 14.762 12.7285C14.0887 11.0683 12.4812 9.97709 10.6897 9.96439ZM7.88861 14.9465H6.78146V13.8394H7.88861V14.9465ZM12.8707 15.5001C12.8707 16.4172 12.1272 17.1608 11.21 17.1608V17.7144H10.1029V17.1608C9.18577 17.1608 8.44218 16.4172 8.44218 15.5001H9.54932C9.54932 15.8058 9.79718 16.0537 10.1029 16.0537V14.9465C9.18577 14.9465 8.44218 14.2029 8.44218 13.2858C8.44218 12.3687 9.18577 11.6251 10.1029 11.6251V11.0715H11.21V11.6251C12.1272 11.6251 12.8707 12.3687 12.8707 13.2858H11.7636C11.7636 12.9801 11.5157 12.7322 11.21 12.7322V13.8394C12.1272 13.8394 12.8707 14.583 12.8707 15.5001ZM14.5315 14.9465H13.4243V13.8394H14.5315V14.9465Z"
                fill="#FD9101"
              />
              <path
                d="M11.21 16.0537C11.5157 16.0537 11.7635 15.8058 11.7635 15.5001C11.7635 15.1944 11.5157 14.9465 11.21 14.9465V16.0537Z"
                fill="#FD9101"
              />
              <path
                d="M1.24512 29.3393C1.26809 30.2467 1.99844 30.9771 2.90583 31H18.4058C19.3132 30.9771 20.0436 30.2467 20.0665 29.3393V28.2322H1.24512V29.3393Z"
                fill="#FD9101"
              />
              <path
                d="M8.38613 2.52053L8.78374 3.32143H12.5279L12.9282 2.52053C13.022 2.33268 13.2139 2.21429 13.4237 2.21429H20.0665V1.66071C20.0436 0.753322 19.3132 0.0229754 18.4058 0H2.90583C1.99844 0.0229754 1.26809 0.753322 1.24512 1.66071V2.21429H7.88797C8.09881 2.2132 8.29207 2.33187 8.38613 2.52053ZM4.56655 1.66071H3.4594V0.553571H4.56655V1.66071Z"
                fill="#FD9101"
              />
              <path
                d="M17.8523 16.0537V12.7322C17.8523 12.4265 18.1001 12.1787 18.4058 12.1787H20.0665V3.32153H13.7659L13.3683 4.12243C13.2742 4.3111 13.0809 4.42976 12.8701 4.42868H8.44154C8.23179 4.42868 8.03988 4.31029 7.94609 4.12243L7.54578 3.32153H1.24512V27.1251H20.0665V16.6072H18.4058C18.1001 16.6072 17.8523 16.3594 17.8523 16.0537ZM17.2987 3.8751H18.9594C19.2651 3.8751 19.513 4.12297 19.513 4.42868V6.08939H18.4058V4.98225H17.2987V3.8751ZM4.01297 26.5715H2.35226C2.04655 26.5715 1.79869 26.3237 1.79869 26.018V24.3572H2.90583V25.4644H4.01297V26.5715ZM4.01297 4.98225H2.90583V6.08939H1.79869V4.42868C1.79869 4.12297 2.04655 3.8751 2.35226 3.8751H4.01297V4.98225ZM14.5408 18.3366C13.5072 19.3602 12.1103 19.9327 10.6558 19.9287H10.6126C7.55524 19.9168 5.0866 17.4287 5.09849 14.3713C5.11039 11.314 7.59848 8.84535 10.6558 8.85725H10.6991C12.938 8.87401 14.9465 10.2377 15.788 12.3127C16.6292 14.3878 16.1378 16.7654 14.5425 18.3366H14.5408ZM19.513 26.018C19.513 26.3237 19.2651 26.5715 18.9594 26.5715H17.2987V25.4644H18.4058V24.3572H19.513V26.018Z"
                fill="#FD9101"
              />
              <path
                d="M29.6992 14.3928L25.6028 11.1162V12.7321C25.6028 13.0378 25.355 13.2856 25.0492 13.2856H18.96V15.4999H25.0492C25.355 15.4999 25.6028 15.7478 25.6028 16.0535V17.6693L29.6992 14.3928Z"
                fill="#FD9101"
              />
            </svg>
            <span className="mx-2">Withdraw (1000)</span>
          </button>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-lg">
            Get your money working for you
          </p>
          <div className="grid grid-rows-2 gap-1 w-auto">
            <button
              onClick={() => {
                toggleShowSliderModal(SavingSliderModal, setSavingSliderModal);
              }}
              className="items-stretch border-solid border-2 border-#a1a1aa text-center py-3 px-5 rounded inline-flex w-full cursor-pointer"
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="21" cy="21" r="21" fill="#F5F9FF" />
                <g clipPath="url(#clip0_604_13797)">
                  <path
                    d="M15.1411 14.4607L23.9115 12.0668L23.447 11.128C23.1431 10.5177 22.402 10.2658 21.7917 10.5696L13.9404 14.4607H15.1411Z"
                    fill="#0066F6"
                  />
                  <path
                    d="M26.634 12.136C26.5253 12.136 26.4166 12.1508 26.3079 12.1805L24.2475 12.7437L17.9551 14.4608H25.0974H28.2102L27.8248 13.0476C27.6766 12.4967 27.1775 12.136 26.634 12.136Z"
                    fill="#0066F6"
                  />
                  <path
                    d="M29.4974 15.3254H29.2157H28.8328H28.4499H25.5272H14.7879H13.3797H12.1938H11.9739H11.2377C10.8474 15.3254 10.499 15.5058 10.2718 15.7899C10.168 15.9208 10.0889 16.0715 10.0445 16.2371C10.0173 16.3408 10 16.4495 10 16.5607V16.7089V18.1171V30.324C10 31.0059 10.5534 31.5592 11.2353 31.5592H29.4949C30.1768 31.5592 30.7302 31.0059 30.7302 30.324V26.8776H23.4001C22.2414 26.8776 21.3002 25.9363 21.3002 24.7777V23.6462V23.2632V22.8803V22.0304C21.3002 21.4622 21.5274 20.9459 21.8956 20.5679C22.2217 20.2319 22.659 20.0046 23.1481 19.9478C23.2296 19.9379 23.3136 19.933 23.3976 19.933H29.7024H30.0853H30.4683H30.7302V16.5607C30.7326 15.8788 30.1792 15.3254 29.4974 15.3254Z"
                    fill="#0066F6"
                  />
                  <path
                    d="M31.5975 21.1139C31.474 21.0003 31.3282 20.9138 31.1652 20.857C31.0392 20.815 30.9058 20.7903 30.765 20.7903H30.7328H30.7081H30.3252H28.9442H23.4003C22.7184 20.7903 22.165 21.3437 22.165 22.0255V22.6407V23.0236V23.4065V24.7752C22.165 25.4571 22.7184 26.0105 23.4003 26.0105H30.7328H30.765C30.9058 26.0105 31.0392 25.9858 31.1652 25.9438C31.3282 25.8894 31.474 25.8005 31.5975 25.6868C31.8446 25.462 32.0002 25.1359 32.0002 24.7752V22.0255C32.0002 21.6648 31.8446 21.3387 31.5975 21.1139ZM25.9795 23.6462C25.9795 23.9871 25.7028 24.2638 25.3619 24.2638H24.9518C24.6109 24.2638 24.3342 23.9871 24.3342 23.6462V23.2361C24.3342 23.0384 24.4256 22.863 24.5713 22.7518C24.6776 22.6703 24.8085 22.6184 24.9518 22.6184H25.0556H25.3619C25.7028 22.6184 25.9795 22.8951 25.9795 23.2361V23.6462Z"
                    fill="#0066F6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_604_13797">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(10 10)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="mx-auto my-auto">Save for an emergency</span>
              <div className="my-auto px-5 h-1 w-10 bg-gray-300">
                <div className="h-full w-5 bg-red-600"></div>
              </div>
            </button>
            <button
              onClick={() => {
                toggleShowSliderModal(
                  InvestmentSliderModal,
                  setInvestmentSliderModal
                );
              }}
              className="items-center border-solid border-2 border-#a1a1aa text-center py-3 px-5 rounded inline-flex w-full cursor-pointer"
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="21" cy="21" r="21" fill="#F5F9FF" />
                <path
                  d="M21.6446 21.6446V10C15.4072 10.3272 10.3272 15.4072 10 21.6446H21.6446ZM19.0665 19.711H17.7774V18.4219H19.0665V19.711ZM15.1993 15.8438H16.4883V17.1329H15.1993V15.8438ZM18.4219 15.5769L19.3333 16.4883L15.8438 19.9779L14.9324 19.0665L18.4219 15.5769Z"
                  fill="#0066F6"
                />
                <path
                  d="M21.6444 22.9336H13.9346C14.2487 27.0413 17.5368 30.3294 21.6445 30.6435V22.9336H21.6444Z"
                  fill="#0066F6"
                />
                <path
                  d="M22.9336 12.5781C22.9336 12.7166 22.9336 32.1523 22.9336 32.0001C27.9641 31.666 32.0001 27.3385 32.0001 22.2248C32.0001 17.1106 27.9653 12.9111 22.9336 12.5781ZM26.8008 21.6446C27.867 21.6446 28.7344 22.512 28.7344 23.5782C28.7344 24.4174 28.194 25.1261 27.4453 25.3931V26.8009H26.1563V25.3931C25.4077 25.1261 24.8672 24.4174 24.8672 23.5782H26.1563C26.1563 23.9338 26.4452 24.2227 26.8008 24.2227C27.1564 24.2227 27.4453 23.9338 27.4453 23.5782C27.4453 23.2226 27.1564 22.9337 26.8008 22.9337C25.7346 22.9337 24.8672 22.0663 24.8672 21.0001C24.8672 20.1609 25.4077 19.4521 26.1563 19.1852V17.7774H27.4453V19.1852C28.194 19.4521 28.7344 20.1609 28.7344 21.0001H27.4453C27.4453 20.6444 27.1564 20.3555 26.8008 20.3555C26.4452 20.3555 26.1563 20.6444 26.1563 21.0001C26.1563 21.3557 26.4452 21.6446 26.8008 21.6446Z"
                  fill="#0066F6"
                />
              </svg>

              <span className="mx-auto my-auto">Invest your money</span>
              <div className="my-auto px-5 h-1 w-10 bg-gray-300">
                <div className="h-full w-5 bg-red-600"></div>
              </div>
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-lg">Ways to earn tour money</p>
          <button className=" items-stretch border-solid border-2 border-#a1a1aa hover:bg-gray-300 text-center py-3 px-6 rounded inline-flex w-full">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="21" cy="21" r="21" fill="#F6FEFB" />
              <g clipPath="url(#clip0_604_13820)">
                <path
                  d="M24.7559 10.656H23.7305C23.6661 10.656 23.6579 10.656 23.5103 10.5116C23.3146 10.3203 22.9872 10 22.3893 10C21.7913 10 21.4639 10.3203 21.2683 10.5116C21.1207 10.656 21.1125 10.656 21.0481 10.656C20.9838 10.656 20.9755 10.656 20.828 10.5117C20.6324 10.3203 20.3049 10 19.707 10C19.1091 10 18.7817 10.3203 18.5861 10.5117C18.4385 10.656 18.4303 10.656 18.3659 10.656H17.3623L18.338 12.7853H23.7299L24.7559 10.656Z"
                  fill="#16BE81"
                />
                <path
                  d="M24.1099 26.8491L26.4261 22.9852C26.6836 22.5556 27.0862 22.2364 27.5491 22.0755L27.6781 19.6535C26.7478 18.346 25.4303 17.4527 23.8446 16.6545H18.1843C16.5863 17.4514 15.2582 18.346 14.3223 19.6635L14.4508 22.0755C14.9137 22.2364 15.3163 22.5556 15.5738 22.9852L17.89 26.8491C18.4387 27.7069 18.6802 28.6974 18.601 29.6881C19.3677 29.9457 20.1768 30.08 20.9903 30.08C21.8111 30.08 22.6263 29.9435 23.3983 29.6817C23.3207 28.6931 23.5624 27.705 24.1099 26.8491ZM21.5166 24.5519V25.2599H20.6172V24.5838C19.9794 24.5455 19.3606 24.3733 18.9779 24.1373L19.4627 23.0402C19.8837 23.289 20.445 23.4484 20.9361 23.4484C21.3635 23.4484 21.5165 23.3591 21.5165 23.206C21.5165 22.6447 19.0481 23.0976 19.0481 21.4328C19.0481 20.712 19.5711 20.1061 20.6171 19.9594V19.2641H21.5165V19.9466C21.9885 19.9912 22.4478 20.1125 22.8113 20.3166L22.3585 21.4073C21.9184 21.184 21.5038 21.0756 21.1147 21.0756C20.6746 21.0756 20.5342 21.2032 20.5342 21.3562C20.5342 21.892 23.0027 21.4455 23.0027 23.0912C23.0028 23.7802 22.5052 24.3797 21.5166 24.5519Z"
                  fill="#16BE81"
                />
                <path
                  d="M18.8281 14.0745H23.212V15.3657H18.8281V14.0745Z"
                  fill="#16BE81"
                />
                <path
                  d="M16.8359 27.5137L16.8241 27.4946L14.5051 23.6259C14.255 23.2087 13.7108 23.079 13.2994 23.3385C12.9017 23.5894 12.7767 24.1117 13.0177 24.5156L15.2114 28.1904L14.102 28.8468L11.9227 25.1632C11.6199 24.6858 11.5254 24.1186 11.6568 23.5645C11.7909 22.9989 12.1582 22.5028 12.6647 22.2034C12.8361 22.1021 13.0153 22.027 13.1976 21.9759L12.9643 17.597C12.9226 16.8147 12.2761 16.2017 11.4926 16.2017C10.6803 16.2017 10.0211 16.859 10.0189 17.6715L10 24.6719L12.9315 29.7168L12.0725 31.9999H16.3837L17.1595 30.5017C17.5263 29.4921 17.4091 28.4051 16.8359 27.5137Z"
                  fill="#16BE81"
                />
                <path
                  d="M32.0004 24.6721L31.9814 17.6717C31.9792 16.8593 31.32 16.2019 30.5077 16.2019C29.7242 16.2019 29.0777 16.8149 29.036 17.5973L28.8027 21.9762C28.985 22.0272 29.1643 22.1023 29.3356 22.2036C29.8421 22.503 30.2095 22.9991 30.3435 23.5647C30.4749 24.1189 30.3804 24.686 30.0776 25.1634L27.8984 28.847L26.7889 28.1907L28.9826 24.5158C29.2237 24.112 29.0986 23.5897 28.7009 23.3387C28.2896 23.0792 27.7453 23.209 27.4953 23.6261L25.1762 27.4949L25.1645 27.5139C24.5913 28.4053 24.4741 29.4923 24.8409 30.5019L25.6167 32.0001H29.9279L29.0689 29.717L32.0004 24.6721Z"
                  fill="#16BE81"
                />
              </g>
              <defs>
                <clipPath id="clip0_604_13820">
                  <rect
                    width="22"
                    height="22"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="mx-auto my-auto">
              Invite your friends and get a bonus
            </span>
          </button>
        </div>
        <div className="feature-container">
          <div className="feature-square border-solid border-2 border-#a1a1aa hover:bg-gray-300 text-center">
            <h1>peer sharing</h1>
            <h3>{peerSharingAmount ?? "-"}</h3>
            <button>
              <Link to="/peershare-dashboard" className="font-bold">
                GO
              </Link>
            </button>
          </div>
          <div className="feature-square border-solid border-2 border-#a1a1aa hover:bg-gray-300 text-center">
            <h1>micro finance</h1>
            <h3>{microFinanceAmount ?? "-"}</h3>
            <button>
              <Link to="" className="font-bold">
                GO
              </Link>
            </button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
export default Dashboard;
