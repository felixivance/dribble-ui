import Image from 'next/image'

export default function Banner() {
  return (
    <div className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-black">Analytics that helps you</span>
        <span className="text-red-500">
          <i className="fas fa-bolt"></i>
        </span>
        <span className="text-lg font-bold text-black">shape the future</span>
        <span className="text-red-500">
          <i className="fas fa-smile-beam"></i>
        </span>
      </div>
      <div>
        <Image
          src="https://source.unsplash.com/800x600/?analytics"
          alt="Laptop with bar graphs"
          width={500}
          height={300}
        />
      </div>
    </div>
  )
}