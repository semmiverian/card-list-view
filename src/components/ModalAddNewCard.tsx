import { useState, ChangeEvent, MouseEvent } from 'react'
import Modal from './Modal'
import { ICard } from './Card'

interface IProps {
  open: boolean
  setOpen: (open: boolean) => void
  onAddNewCard: (card: ICard) => void
}

export default function ModalAddNewCard({
  open,
  setOpen,
  onAddNewCard,
}: IProps) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [limit, setLimit] = useState('')
  const [color, setColor] = useState('#000000')
  const [expiredAt, setExpiredAt] = useState('')

  function onChange(setState: (value: string) => void) {
    return function (e: ChangeEvent<HTMLInputElement>) {
      setState(e.target.value)
    }
  }

  function addCard(e: MouseEvent<HTMLButtonElement>) {
    let newCard = {
      id: Math.floor(Math.random() * 500),
      cardName: name,
      cardLastFour: number.slice(-4),
      expiry: expiredAt,
      color: color,
    }

    onAddNewCard(newCard)
    resetForm()
  }

  function resetForm() {
    setOpen(false)
    setName('')
    setNumber('')
    setLimit('')
    setColor('#000000')
    setExpiredAt('')
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className=" sm:mt-0 sm:w-full">
        <Modal.Title
          as="h3"
          className="text-xl leading-6 tracking-wide font-medium text-gray-900 mb-4"
        >
          Add New Card
        </Modal.Title>
        <div className="mt-2 w-full space-y-4 mb-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Credit Card Holder
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Superhuman"
                value={name}
                onChange={onChange(setName)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="credit-card-number"
              className="block text-sm font-medium text-gray-700"
            >
              Credit Card Number
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="credit-card-number"
                id="credit-card-number"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="1234-1234-1234-1234"
                value={number}
                onChange={onChange(setNumber)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="credit-card-limit"
              className="block text-sm font-medium text-gray-700"
            >
              Credit Card Spend Limit
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="credit-card-limit"
                id="credit-card-limit"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="1000"
                value={limit}
                onChange={onChange(setLimit)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="credit-card-color"
              className="block text-sm font-medium text-gray-700"
            >
              Credit Card Color
            </label>
            <div className="mt-1">
              <input
                type="color"
                name="credit-card-limit"
                id="credit-card-limit"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="1234-1234-1234-1234"
                value={color}
                onChange={onChange(setColor)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="credit-card-expiry"
              className="block text-sm font-medium text-gray-700"
            >
              Expired At
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="credit-card-expiry"
                id="credit-card-expiry"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Superhuman"
                value={expiredAt}
                onChange={onChange(setExpiredAt)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={addCard}
          >
            Add
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}
