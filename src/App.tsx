import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import { ChevronRightIcon } from '@heroicons/react/outline'

import Card, { ICard } from './components/Card'
import AddNewCard from './components/AddNewCard'
import ModalAddNewCard from './components/ModalAddNewCard'
import ModalDetailCard from './components/ModalDetailCard'

import db from './db/data.json'

import 'react-multi-carousel/lib/styles.css'
import './App.css'

function CustomDot({ onClick, active, ...rest }: any) {
  return (
    <button
      className={`w-2 h-2 rounded-full mx-0.5
      ${active ? 'bg-indigo-600' : 'bg-gray-200'}
    `}
      onClick={() => onClick()}
    ></button>
  )
}

function App() {
  const [cards, setCards] = useState(db)
  const [openAddNewCard, setOpenAddNewCard] = useState(false)
  const [openDetailCard, setOpenDetailCard] = useState(false)
  const [selectedCard, setSelectedCard] = useState<ICard>({} as ICard)
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 600 },
      items: 3.5,
    },
    mobile: {
      breakpoint: { max: 600, min: 100 },
      items: 1,
    },
  }

  function handleAddNewCard(card: ICard) {
    setCards([...cards, card])
  }

  function handleSelectCard(card: ICard) {
    setSelectedCard(card)
    setOpenDetailCard(true)
  }

  return (
    <div className="bg-gray-50 h-screen p-4 my-auto">
      <ModalAddNewCard
        open={openAddNewCard}
        setOpen={setOpenAddNewCard}
        onAddNewCard={handleAddNewCard}
      />
      <ModalDetailCard
        open={openDetailCard}
        setOpen={setOpenDetailCard}
        card={selectedCard}
      />
      <div className="flex justify-between mb-4">
        <h4 className="text-gray-900 text-lg font-medium leading-8 tracking-wide">
          Cards
        </h4>
        <p className="text-red-500 text-sm leading-8 tracking-wide hover:underline cursor-pointer flex items-center space-x-4">
          View All
          <ChevronRightIcon className="w-4 h-4" />
        </p>
      </div>
      <div
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full"
        style={{
          paddingBottom: '30px',
          position: 'relative',
        }}
      >
        <AddNewCard onClick={() => setOpenAddNewCard(true)} />
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          containerClass="flex-1 w-full"
          transitionDuration={500}
          sliderClass="space-x-2 sm:space-x-4"
          itemClass="w-card"
          customDot={<CustomDot />}
          renderDotsOutside
          showDots
        >
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleSelectCard} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default App
