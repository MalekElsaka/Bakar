import Actions from "@/components/card_info/Actions";
import Card from "@/components/card_info/Card";
import Info from "@/components/card_info/Info";
import secVisaLogo from "../assets/sec_visa_logo.png"
import { axiosInstance } from "@/lib/utils";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/loading";


const CardInfoPage = () => {
    const [cardInfo, setCardInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCardInfo = async () => {
            const response = await axiosInstance.get('/api/IssueCard/get-card-data');
            if (response.status === 200) {
                const spacedCardholderName = response.data.cardholderName?.replace(/([a-z])([A-Z])/g, '$1 $2');
                setCardInfo({
                    ...response.data,
                    cardholderName: spacedCardholderName,
                    status: "Active",
                    cardtype: "Virtual",
                    created_at: 'Nov 19, 2023, 9:32 PM',
                    billing_address: '123 Main Street, San Fransisco, CA, 94111, US'
                });
                setLoading(false);
            }
        };
        fetchCardInfo();
    }, []);

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center h-screen">
                <Loading/>
            </div>
        );
    }

    return (
        <div className="w-full flex justify-center">
            <div className=" w-full max-w-[420px] h-full px-5 py-5">
                <div className="w-full flex items-center h-10 mb-6 border border-black">
                    <img className="h-4 ml-3" src={secVisaLogo} alt="secondary_visa_logo" />
                    <p className="text-[13px] ml-3">{cardInfo.cardholderName}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-auto mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                </div>
                <Card cardInfo={cardInfo} />
                <Info cardInfo={cardInfo} />
                <Actions />
            </div>
        </div>
    );
}

export default CardInfoPage;