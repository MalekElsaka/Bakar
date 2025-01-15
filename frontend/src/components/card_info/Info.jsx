const Info = ({cardInfo}) => {
    return (
        <div className="w-full flex flex-col gap-2 mt-8">
            <div className="flex overflow-hidden h-[19px]">
                <p className="text-[12px] min-w-[90px] text-nowrap">Card number</p>
                <p className="ml-20 text-[34px] mr-2 -mt-[26px] h-fit">.... .... ....</p>
                <p className="text-[12px]">1234</p>
            </div>

            <div className="flex overflow-hidden h-[19px]">
                <p className="text-[12px] min-w-[90px] text-nowrap">CVV</p>
                <p className="ml-20 text-[34px] -mt-[26px] h-fit">...</p>
            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Expiration</p>
                <p className="ml-20 text-[12px]">10/2026</p>
            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Brand</p>
                <p className="ml-20 text-[12px]">Visa</p>
            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Status</p>
                <p className="ml-20 text-[12px]">Active</p>
            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Cardholder</p>
                <p className="ml-20 text-[12px]">Malek Elsaka</p>

            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Card type</p>
                <p className="ml-20 text-[12px]">Virtual</p>

            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Created at</p>
                <p className="ml-20 text-[12px]">Nov 15, 2023, 9:32 PM</p>

            </div>

            <div className="flex">
                <p className="text-[12px] min-w-[90px] text-nowrap">Billing address</p>
                <p className="ml-20 text-[12px]">123 Main Street, San Fransisco, CA, 94111, US</p>
            </div>
        </div>
    );
}

export default Info;