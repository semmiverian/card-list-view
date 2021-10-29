import Modal from './Modal'
import { ICard } from './Card'

interface IProps {
  open: boolean
  setOpen: (open: boolean) => void
  card: ICard
}

export default function ModalDetailCard({ open, setOpen, card }: IProps) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className=" sm:mt-0 sm:w-full">
        <Modal.Title
          as="h3"
          className="text-xl leading-6 tracking-wide font-medium text-gray-900 mb-4"
        >
          Card Detail
        </Modal.Title>
        <div className="mt-2 w-full space-y-4 mb-4">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Card Holder name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {card.cardName}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Expired At</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {card.expiry}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Card Color</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div className="border p-1 w-12 h-6 rounded-lg">
                  <div
                    className="w-full h-full rounded-md"
                    style={{ backgroundColor: card.color }}
                  ></div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-row-reverse">
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
