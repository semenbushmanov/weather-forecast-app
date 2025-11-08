export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className='w-20 h-20 sm:w-30 sm:h-30 m-4 sm:m-6 border-blue-700 border-t-transparent border-4 border-solid rounded-full animate-spin' />
    </div>
  );
}
