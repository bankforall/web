import React, { FC } from "react";
import BaseLayout from "@/components/BaseLayout";
const SuccessWithdraw: FC = () => {
    return (
<BaseLayout>
    <div className='py-40 items-center text-center'>
        <div className='mx-28'>
            <svg width="150" height="150" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M137.143 74.7756V80.0327C137.136 92.3552 133.146 104.345 125.768 114.215C118.39 124.084 108.019 131.304 96.2023 134.798C84.3856 138.292 71.756 137.872 60.1973 133.602C48.6385 129.331 38.7697 121.439 32.0629 111.102C25.3561 100.764 22.1705 88.536 22.9813 76.2402C23.7921 63.9445 28.5557 52.2403 36.5619 42.8732C44.568 33.506 55.3876 26.9778 67.4071 24.2621C79.4265 21.5465 92.0018 22.789 103.257 27.8042M137.143 34.3185L80.0003 91.5185L62.8574 74.3757" stroke="#7165E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className='text-3xl my-3'>Success</div>
        <div className='text-xs'>Your money was withdrew.</div> 
    </div>
    <button
              type="submit"
              className=" py-3 my-10 mx-28 w-40 text-center bg-lightpurple text-white font-bold rounded-lg"
            >
              CLOSE
    </button>
                 
</BaseLayout> 
);
};
export default SuccessWithdraw;