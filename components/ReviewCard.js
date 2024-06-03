export const ReviewCard = ({ review: active }) => {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 px-4 sm:px-6 rounded-t-3xl rounded-br-3xl h-64 sm:h-56 flex flex-col justify-between">
                <div className="text-sm sm:text-sm md:text-lg text-gray-500">
                    { active?.comment || 'N/A' }
                </div>
                <div className="inline-flex items-center space-x-3">
                    <img 
                        src={`https://ui-avatars.com/api/?name=${active?.name || 'N/A'}&background=0D8ABC&color=fff`} 
                        className="w-10 h-10 aspect-square rounded-full object-cover"
                    />
                    <p className="text-sm text-gray-500">
                        { active?.name || 'N/A' }
                    </p>
                </div>
            </div>
        </>
    )
}