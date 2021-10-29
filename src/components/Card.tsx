import SpenmoIcon from './../assets/spenmo_white.png'

export interface ICard {
  id: number
  cardName: string
  cardLastFour: string
  expiry: string
  color: string
}

export interface IProps {
  card: ICard
  onClick: (card: ICard) => void
}

export default function Card({ card, onClick }: IProps) {
  const { color, cardLastFour, expiry, cardName } = card
  return (
    <section
      className="w-full shadow rounded-xl text-white p-2 font-medium flex-shrink-0 cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={() => {
        onClick(card)
      }}
    >
      <img src={SpenmoIcon} className="w-10 mb-2" />
      <h4>{cardName}</h4>
      <p>**** **** **** {cardLastFour}</p>

      <div className="flex justify-between items-end">
        <section>
          <span className="text-xs">Expiry</span>
          <p>{expiry}</p>
        </section>
        <img
          src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
          className="w-8 h-8"
        />
      </div>
    </section>
  )
}
