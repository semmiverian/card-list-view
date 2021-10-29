import { PlusCircleIcon } from '@heroicons/react/outline'

interface IProps {
  onClick: () => void
}

export default function AddNewCard({ onClick }: IProps) {
  return (
    <section
      onClick={onClick}
      className="w-full sm:w-52 rounded-xl border-2 border-gray-500 border-dotted flex flex-col justify-center items-center text-gray-900 p-2 font-medium cursor-pointer hover:bg-gray-500 hover:text-white"
    >
      <PlusCircleIcon className="w-8 h-8" />
      <h4>Add new Card</h4>
    </section>
  )
}
