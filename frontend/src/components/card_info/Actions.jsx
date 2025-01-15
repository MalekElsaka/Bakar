const Actions = () => {
    return (
        < div className=" flex flex-col mt-7 gap-4 " >
            <button className="border h-9 text-[12.5px] border-black hover:bg-black hover:text-white transition-colors duration-300"> Freeze Card</button>
            <button className="border h-9 text-[12.5px] border-black hover:bg-black hover:text-white transition-colors duration-300"> Replace Card</button>
            <button className="border h-9 text-[12.5px] border-black hover:bg-black hover:text-white transition-colors duration-300"> Cancel Card</button>
        </div >

    );
}

export default Actions;