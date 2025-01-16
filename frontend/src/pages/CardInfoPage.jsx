import Actions from "@/components/card_info/Actions";
import Card from "@/components/card_info/Card";
import Info from "@/components/card_info/Info";
import Loading from "@/components/ui/loading";
import CardholderDropDown from "@/components/card_info/CardholderDropdown";
import useCardInfo from "@/hooks/useCardInfo";

const CardInfoPage = () => {
    const { cardInfo, loading } = useCardInfo();

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