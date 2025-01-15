import Actions from "@/components/card_info/Actions";
import Card from "@/components/card_info/Card";
import Info from "@/components/card_info/Info";

let cardInfo = {
    "cardholderName": "MohamedHazem",
    "last4": "0005",
    "expiryMonth": 12,
    "expiryYear": 2027,
    "brand": "Visa",
    "cvc": "123"
}
  
const CardInfoPage = () => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className=" w-full max-w-[420px] h-full px-5 py-5">
                <div className="w-full h-10 mb-6 border border-black"></div>
                <Card cardInfo={cardInfo} />
                <Info cardInfo={cardInfo} />
                <Actions />
            </div>
        </div>
    );
}

export default CardInfoPage;