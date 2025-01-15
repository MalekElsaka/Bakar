let cardInfo = {
    "cardholderName": "MohamedHazem",
    "last4": "0005",
    "expiryMonth": 12,
    "expiryYear": 2027,
    "brand": "Visa",
    "cvc": "123"
}

const Card = ({cardInfo: {cardholderName, last4, expiryMonth, expiryYear, brand, cvc}}) => {
    const spacedName = cardholderName.replace(/([a-z])([A-Z])/g, '$1 $2');

    return (
        <div className="w-full flex flex-col h-[190px] border border-black py-3 px-5">

            {/* brand logo */}
            <div className="ml-auto">
                <p className=" font-bold italic text-[28px]">{brand}</p>
            </div>

            {/* card number */}
            <div className="flex w-full mt-5 h-[20px] overflow-hidden">
                <p className="text-[38px] -mt-[27px] h-fit tracking-widest">.... .... ....</p>
                <p className="ml-[6px] tracking-widest">{last4}</p>
            </div>

            {/* card info */}
            <div className="mt-auto justify-between w-full h-12 flex">
                <div className="flex flex-col">
                    <p className="text-[12px] text-gray-700 mb-[2px]">Cardholder</p>
                    <p className="text-[13px] ">{spacedName}</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-[12px] text-gray-700 mb-[2px]">Expiry date</p>
                    <p className="text-[13px] ">{expiryMonth}/{expiryYear.toString().slice(-2)}</p>

                </div>

                <div className="flex flex-col">
                    <p className="text-[12px] text-gray-700 mb-[2px]">CVC</p>
                    <p className="text-[38px] -mt-[27px] h-fit ">...</p>
                </div>
            </div>
        </div>
    );
}

export default Card;