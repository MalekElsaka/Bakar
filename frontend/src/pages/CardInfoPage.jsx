import Actions from "@/components/card_info/Actions";
import Card from "@/components/card_info/Card";
import Info from "@/components/card_info/Info";
import { axiosInstance } from "@/lib/utils";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/loading";
import CardholderDropDown from "@/components/card_info/CardholderDropdown";

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
                <CardholderDropDown cardholderName={cardInfo.cardholderName}/>
                <Card cardInfo={cardInfo} />
                <Info cardInfo={cardInfo} />
                <Actions />
            </div>
        </div>
    );
}

export default CardInfoPage;