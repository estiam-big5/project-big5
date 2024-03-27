import Image from 'next/image';

type CardInfo = {
    name: string,
    code: string
}

export default function WalletCardInfo(props: CardInfo) {
    return (
        <div className="wallet-card">
            <div className="top-card">
                <p>Credit</p>
                <Image src="/wallet/mastercardlogo.png" alt="Mastercard Logo" width={45} height={45} />
            </div>
            <div className="bottom-card">
                <Image style={{ transform: 'rotate(90deg)' }} src="/wallet/wifi.png" alt="Wifi" width={20} height={20} />
                <p>{props.name}</p>
                <p><span style={{color:"#8C8C8C"}}>**** </span>{props.code}</p>
            </div>
        </div>
    )
}