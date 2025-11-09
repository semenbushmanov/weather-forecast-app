interface ErrorCardProps {
  message: string;
};

export default function ErrorCard({ message }: ErrorCardProps) {
  return (
    <div className="flex flex-col p-4 sm:p-6 bg-gray-600 rounded-2xl border border-red-500">
      <p className="text-red-500 text-sm sm:text-lg md:text-2xl text-center font-semi-bold m-10">{message}</p>
    </div>
  );
};
