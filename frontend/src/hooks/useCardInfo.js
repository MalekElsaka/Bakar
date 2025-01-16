import { useState, useEffect } from "react";
import { axiosInstance } from "@/lib/utils";

const useCardInfo = () => {
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

    return { cardInfo, loading };
};

export default useCardInfo;