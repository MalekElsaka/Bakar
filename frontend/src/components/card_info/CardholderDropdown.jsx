import secVisaLogo from "../../assets/sec_visa_logo.png"

const CardholderDropDown = ({cardholderName}) => {
    return (
        <div className="w-full flex items-center h-10 mb-6 border border-black">
            <img className="h-4 ml-3" src={secVisaLogo} alt="secondary_visa_logo" />
            <p className="text-[13px] ml-3">{cardholderName}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-auto mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
        </div> 
    );
}

export default CardholderDropDown;