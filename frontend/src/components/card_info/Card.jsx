import visaLogo from "../../assets/visa_logo.png"

const Card = ({cardInfo: {cardholderName, last4, expiryMonth, expiryYear, brand, cvc}}) => {

    return (
        <div className="w-full flex flex-col h-[190px] border border-black pb-2 px-5">

            {/* brand logo */}
            <div className="ml-auto">
                <img className="w-[82px] h-[82px]" src={visaLogo} alt="card_brand_logo" />
            </div>

            {/* card number */}
            <div className="flex w-full h-[20px] overflow-hidden">
                <p className="text-[38px] -mt-[27px] h-fit tracking-widest">.... .... ....</p>
                <p className="ml-[6px] tracking-widest">{last4}</p>
            </div>

            {/* card info */}
            <div className="mt-auto justify-between w-full h-12 flex">
                <div className="flex flex-col">
                    <p className="text-[12px] text-gray-700 mb-[2px]">Cardholder</p>
                    <p className="text-[13px] ">{cardholderName}</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-[12px] text-gray-700 mb-[2px]">Expiry date</p>
                    <p className="text-[13px] ">{expiryMonth}/{expiryYear?.toString().slice(-2)}</p>

                </div>

                <div className="flex flex-col">
                    <p className="text-[12px] text-gray-700 mb-[2px]">CVC</p>
                    <p className="text-[13px] tracking-widest h-fit ">{cvc}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;