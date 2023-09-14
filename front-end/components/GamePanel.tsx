import React, {ReactNode} from "react";


export interface Props {
    isVisible : boolean;
    onClose : () => void;
    header : string;
    description: string;
    platforms: any;
}
const GamePanel = ({ isVisible, onClose, header, description, platforms } : Props ) => {
console.log(platforms)
console.log(header)

    if (!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper' ) onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" 
        onClick={() => onClose()}>
            <div className="flex flex-col"> 
                <div className="w-[1200px] h-[600px] flex flex-col gap-10 font-bold justify-center bg-darkGrey p-5 px-20 rounded"> 
                  <h2 className="text-6xl">{header}</h2>
                  <p className="text-2xl w-2/5">{description}</p>
                  <div className="flex flex-row gap-5 text-4xl">
                    {platforms.map(({icon}) => icon)}
                  </div>
                  <div className="clear-left max-w-2xl">
                    <img src="gauntlerGameTile.png" alt={header} />
                  </div>
                </div>
            </div>
        </div>
    );
};

export default GamePanel;