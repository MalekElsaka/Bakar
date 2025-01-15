import secVisaLogo from "../../assets/sec_visa_logo.png"

const Info = ({ cardInfo: { cardholderName, last4, expiryMonth, expiryYear, brand, cvc, status, cardtype, billing_address, created_at } }) => {
    return (
        <div className="w-full flex flex-col gap-2 mt-8">
            <div className="flex overflow-hidden h-[19px]">
                <p className="text-[12px] min-w-[90px] text-nowrap">Card number</p>
                <p className="ml-20 text-[34px] mr-2 -mt-[26px] h-fit">.... .... ....</p>
                <p className="text-[12px]">{last4}</p>
            </div>

            <div className="flex overflow-hidden h-[19px]">
                <p className="text-[12px] min-w-[90px] text-nowrap">CVV</p>
                <p className="ml-20 text-[12px] tracking-wider h-fit">{cvc}</p>
            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Expiration</p>
                <p className="ml-20 text-[12px]">{expiryMonth}/{expiryYear}</p>
            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Brand</p>
                <p className="ml-20 text-[12px]">{brand}</p>
                <img className="h-3 ml-1 mt-1" src={secVisaLogo} alt="visa_logo" />
            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Status</p>
                <div className="border border-black p-1 ml-20 ">
                    <p className=" text-[10px] font-semibold">{status}</p>
                </div>
            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Cardholder</p>
                <p className="ml-20 text-[12px]">{cardholderName}</p>

            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Card type</p>
                <p className="ml-20 text-[12px]">{cardtype}</p>

            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Created at</p>
                <p className="ml-20 text-[12px]">{created_at}</p>

            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Billing address</p>
                <p className="ml-20 text-[12px]">{billing_address}</p>
            </div>
        </div>
    );
}

export default Info;