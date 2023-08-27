import { useState } from "react"

const images = [
    'https://anikenatural.com/wp-content/uploads/2021/04/300g-African-Black-Soap.jpeg',
    'https://mexyeveshop.com.ng/wp-content/uploads/2018/10/Mexyeve-Product-Whitening-Black-Soap.jpeg',
    'https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFBYkdQVDk0NkwuX1NMMTE5MF8uanBn.jpg',
    'https://www.tholuhairbeauty.com/cdn/shop/products/DuduOsun3.jpg?v=1569213274',
    'https://www.lumibeauty.com/3129-large_default/dudu-osun-black-soap.jpg',
    'https://girlyessentials.com.ng/wp-content/uploads/2022/11/beautysecretsafricanblacksoap.jpg',
]
export const ProductImagesView = () => {
    const [activeImage, setActiveImage] = useState(images[0])

    return (
        <>
            <div className="flex flex-col">
                {/* Full Image */}
                <div className="relative">
                    <picture className="w-full h-96 overflow-h-hidden">
                        <img src={activeImage} className="w-full h-full rounded-lg object-cover" />
                    </picture>
                </div>
                {/* Smaller Images */}
                <div className="py-4">
                    <div className="flex w-full overflow-x-hidden">
                        { images.map((image, key) => (
                            <button key={key} onClick={ () => setActiveImage(image)} className="mx-2 p-1 border rounded">
                                <img src={image} className="w-16 h-16 aspect-video object-contain bg-blend-color-burn" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export const ProductDetails = () => {
    return (
        <>
            <div className="flex flex-col space-y-4">
                <h2 className='text-4xl font-bold py-2'>Shea Butter</h2>
                <div className="flex space-x-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((e, key) => (
                            <svg key={key} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                        ))}
                    </div>
                    <p className="text-gray-600 text-xs">(7)</p>
                </div>
                <div>
                    <h3 className="text-gray-900 whitespace-no-wrap text-3xl font-semibold">£ 100</h3>
                </div>
                <div className='inline-flex space-x-6 py-2'>
                    <a href='#' className='bg-green-700 text-white rounded-full p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>
                    </a>
                    <p className='text-lg'>1</p>
                    <a href='#' className='bg-green-700 text-white rounded-full p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                    </a>
                </div>
                <div>
                    <div className="flex flex-col space-y-2 text-lg my-8">
                        <a 
                            href="#"
                            className="py-3 w-64 text-green-700 h-auto bg-white border-2 border-green-600 rounded-lg inline-flex justify-center items-center space-x-2"
                        >
                            <span>Add to cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                        </a>
                        <a href="#" className="py-3 hidden justify-center items-center w-64 bg-green-600 h-auto text-white rounded-lg border-2 border-white">
                            Buy now
                        </a>
                    </div>
                </div>
                <div className="border-t-2 pt-4">
                    <div className="text-gray-600 inline-flex space-x-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                        <div className="inline-flex flex-col">
                            <span className="text-xs font-semibold">Delivery</span>
                            <span className="text-sm text-gray-400">
                                Estimated delivery time: 1 - 7 days
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t-2 pt-4">
                    <div className="text-gray-600 inline-flex space-x-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
                        <div className="inline-flex flex-col">
                            <span className="text-xs font-semibold">Pickup</span>
                            <span className="text-sm text-gray-400">
                                Pickup & Pay on Collection Available
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t-2 pt-4">
                    <div className="text-gray-600 inline-flex space-x-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" /></svg>
                        <div className="inline-flex flex-col">
                            <span className="text-xs font-semibold">Return Policy</span>
                            <span className="text-sm text-gray-400">
                                Free return within 15 days for Official Store items and 7 days for other eligible items.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col py-4">
                    <p className="my-1.5 text-gray-500 text-sm">
                        Share With Friends
                    </p>
                    <div className="flex flex-wrap w-full my-2 space-x-4">
                        <a className="text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentFill"><path d="M28.4444 2H3.55556C3.143 2 2.74733 2.16389 2.45561 2.45561C2.16389 2.74733 2 3.143 2 3.55556V28.4444C2 28.857 2.16389 29.2527 2.45561 29.5444C2.74733 29.8361 3.143 30 3.55556 30H16.9567V19.1733H13.3198V14.9344H16.9567V11.8233C16.9567 8.20667 19.1656 6.23578 22.4011 6.23578C23.4884 6.23267 24.5773 6.28867 25.66 6.40222V10.1667H23.4278C21.6731 10.1667 21.3309 11.0036 21.3309 12.2278V14.9267H25.5262L24.9818 19.1656H21.3293V30H28.4444C28.857 30 29.2527 29.8361 29.5444 29.5444C29.8361 29.2527 30 28.857 30 28.4444V3.55556C30 3.143 29.8361 2.74733 29.5444 2.45561C29.2527 2.16389 28.857 2 28.4444 2Z" fill="#4B4B4B"/></svg>
                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentFill"><path d="M31.5239 6.58269C30.4106 7.07602 29.2146 7.40935 27.9573 7.56002C29.2546 6.78374 30.2252 5.56198 30.6879 4.12269C29.4691 4.84667 28.1351 5.35628 26.7439 5.62935C25.8084 4.63051 24.5693 3.96846 23.219 3.74599C21.8687 3.52352 20.4827 3.75308 19.2763 4.39902C18.0698 5.04497 17.1103 6.07117 16.5468 7.31829C15.9833 8.56542 15.8473 9.96369 16.1599 11.296C13.6902 11.172 11.2741 10.5301 9.0685 9.41189C6.8629 8.2937 4.91706 6.72424 3.35727 4.80535C2.82393 5.72535 2.51727 6.79202 2.51727 7.92802C2.51667 8.95068 2.76851 9.95768 3.25044 10.8597C3.73237 11.7617 4.42948 12.5307 5.27993 13.0987C4.29364 13.0673 3.3291 12.8008 2.4666 12.3214V12.4014C2.4665 13.8357 2.96264 15.2259 3.87084 16.336C4.77905 17.4462 6.04336 18.2079 7.44927 18.492C6.53431 18.7396 5.57505 18.7761 4.64393 18.5987C5.0406 19.8328 5.81326 20.9121 6.85376 21.6853C7.89425 22.4585 9.15049 22.8869 10.4466 22.9107C8.24638 24.6379 5.52912 25.5748 2.73193 25.5707C2.23644 25.5708 1.74137 25.5419 1.24927 25.484C4.08857 27.3096 7.39372 28.2784 10.7693 28.2747C22.1959 28.2747 28.4426 18.8107 28.4426 10.6027C28.4426 10.336 28.4359 10.0667 28.4239 9.80002C29.639 8.92132 30.6878 7.83322 31.5213 6.58669L31.5239 6.58269Z" fill="#4B4B4B"/></svg>
                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentFill"><path fillRule="evenodd" clipRule="evenodd" d="M1.33325 3.78392C1.33325 3.13396 1.59145 2.51063 2.05104 2.05104C2.51063 1.59145 3.13396 1.33326 3.78392 1.33326H28.2133C28.5354 1.33273 28.8544 1.39574 29.1521 1.51868C29.4498 1.64162 29.7204 1.82207 29.9482 2.0497C30.1761 2.27734 30.3569 2.54769 30.4801 2.84527C30.6034 3.14285 30.6668 3.46182 30.6666 3.78392V28.2133C30.6669 28.5354 30.6038 28.8545 30.4807 29.1522C30.3576 29.4499 30.177 29.7205 29.9493 29.9483C29.7215 30.1762 29.4511 30.3569 29.1534 30.4802C28.8558 30.6034 28.5367 30.6668 28.2146 30.6666H3.78392C3.46198 30.6666 3.1432 30.6032 2.84578 30.4799C2.54837 30.3567 2.27815 30.176 2.05056 29.9483C1.82298 29.7206 1.64249 29.4503 1.51942 29.1528C1.39634 28.8553 1.33308 28.5365 1.33325 28.2146V3.78392ZM12.9439 12.5173H16.9159V14.5119C17.4893 13.3653 18.9559 12.3333 21.1599 12.3333C25.3853 12.3333 26.3866 14.6173 26.3866 18.8079V26.5706H22.1106V19.7626C22.1106 17.3759 21.5373 16.0293 20.0813 16.0293C18.0613 16.0293 17.2213 17.4813 17.2213 19.7626V26.5706H12.9439V12.5173ZM5.61059 26.3879H9.88792V12.3333H5.61059V26.3866V26.3879ZM10.4999 7.74926C10.508 8.11549 10.4428 8.47964 10.3082 8.82034C10.1737 9.16104 9.97239 9.47144 9.71623 9.7333C9.46007 9.99516 9.15418 10.2032 8.81653 10.3453C8.47887 10.4873 8.11624 10.5605 7.74992 10.5605C7.3836 10.5605 7.02097 10.4873 6.68331 10.3453C6.34565 10.2032 6.03977 9.99516 5.78361 9.7333C5.52745 9.47144 5.32618 9.16104 5.1916 8.82034C5.05702 8.47964 4.99185 8.11549 4.99992 7.74926C5.01575 7.03039 5.31243 6.34631 5.82643 5.8435C6.34043 5.3407 7.03088 5.05915 7.74992 5.05915C8.46895 5.05915 9.1594 5.3407 9.67341 5.8435C10.1874 6.34631 10.4841 7.03039 10.4999 7.74926Z" fill="#4B4B4B"/></svg>
                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentFill"><path d="M15.9962 11.3312C13.4255 11.3312 11.3277 13.429 11.3277 15.9997C11.3277 18.5704 13.4255 20.6683 15.9962 20.6683C18.5669 20.6683 20.6648 18.5704 20.6648 15.9997C20.6648 13.429 18.5669 11.3312 15.9962 11.3312ZM29.9984 15.9997C29.9984 14.0665 30.0159 12.1507 29.9074 10.2209C29.7988 7.97946 29.2875 5.99016 27.6484 4.35108C26.0058 2.70851 24.02 2.20067 21.7785 2.0921C19.8453 1.98353 17.9295 2.00104 15.9997 2.00104C14.0665 2.00104 12.1507 1.98353 10.2209 2.0921C7.97947 2.20067 5.99016 2.71201 4.35109 4.35108C2.70851 5.99366 2.20067 7.97946 2.0921 10.2209C1.98353 12.1542 2.00104 14.07 2.00104 15.9997C2.00104 17.9295 1.98353 19.8487 2.0921 21.7785C2.20067 24.02 2.71201 26.0093 4.35109 27.6484C5.99367 29.2909 7.97947 29.7988 10.2209 29.9073C12.1542 30.0159 14.07 29.9984 15.9997 29.9984C17.933 29.9984 19.8488 30.0159 21.7785 29.9073C24.02 29.7988 26.0093 29.2874 27.6484 27.6484C29.291 26.0058 29.7988 24.02 29.9074 21.7785C30.0195 19.8487 29.9984 17.933 29.9984 15.9997ZM15.9962 23.1829C12.0211 23.1829 8.81302 19.9748 8.81302 15.9997C8.81302 12.0246 12.0211 8.81651 15.9962 8.81651C19.9713 8.81651 23.1795 12.0246 23.1795 15.9997C23.1795 19.9748 19.9713 23.1829 15.9962 23.1829ZM23.4736 10.1999C22.5455 10.1999 21.796 9.45043 21.796 8.52232C21.796 7.59421 22.5455 6.84472 23.4736 6.84472C24.4018 6.84472 25.1513 7.59421 25.1513 8.52232C25.1515 8.7427 25.1083 8.96097 25.0241 9.16464C24.9399 9.3683 24.8163 9.55334 24.6605 9.70918C24.5047 9.86501 24.3196 9.98857 24.116 10.0728C23.9123 10.157 23.694 10.2002 23.4736 10.1999Z" fill="#4B4B4B"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export const ProductDescription = () => {
    return (
        <>
            <div className="py-8">
                <div className="px-4 lg:px-0 mt-6 text-gray-700 w-full mx-auto text-lg leading-relaxed">
                    <h2 className="text-4xl text-gray-800 font-bold mb-4 mt-4">
                        Description 
                    </h2>
                </div>
                <div className="px-4 lg:px-0 mt-12 text-gray-700 w-full md:max-w-5xl mx-auto text-lg leading-relaxed">
                    <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
                    justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
                    resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
                    outlived peculiar rendered led six.</p>

                    <p className="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
                    thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
                    attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
                    expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
                    uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
                    newspaper in advantage frankness to concluded unwilling.</p>
                </div>
            </div>
        </>
    )
}

export const ProductReviews = () => {
    return (
        <>
            <div className="px-4 lg:px-0 mt-6 text-gray-700 w-full mx-auto text-lg leading-relaxed">
                <h2 className="text-4xl text-gray-800 font-bold mb-4 mt-4">
                    Customers Reviews 
                </h2>
            </div>
            <div className="w-full md:max-w-5xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="border-b-2 w-64 py-6">
                        <p className="text-6xl font-bold py-3">4.3</p>
                        <p>out of 5</p>
                    </div>
                    <div className="space-y-2">
                        {
                            ['w-1/2', 'w-2/3', 'w-2/5', 'w-1/5', 'w-3/4'].map((option, key) => (
                                <div key={key} className="relative h-2 rounded-lg w-72 bg-gray-300">
                                    <div className={`absolute bg-green-600 h-2 rounded-lg ${option}`}></div>
                                </div>
                            ))
                        }
                        <div>
                            <p className="text-right text-gray-600">7 Ratings</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:max-w-5xl mx-auto">
                <div className="flex justify-between py-8">
                    <div>
                        <h4 className="text-xl font-semibold">Tap to Rate:</h4>
                    </div>
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((e, key) => (
                            <a href="#" key={key}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="py-8">
                    <a href="#" className="inline-flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                        <span>Write a Review</span>
                    </a>
                </div>
            </div>
            <div className="space-y-8 w-full md:max-w-5xl mx-auto mb-8">
                {   [...Array(5)].map((e, key) => (
                    <div className="bg-gray-100 px-24 py-6 rounded-lg" key={key}>
                        <div className="flex justify-between">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((e, key) => (
                                    <svg key={key} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                                ))}
                            </div>
                            <div>
                                <p>25-10-2021</p>
                            </div>
                        </div>
                        <div className="py-4">
                            <p className="pb-6 text-gray-500 font-light text-lg">
                                Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
                                justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
                                resolution son indulgence.
                            </p>
                        </div>
                        <div>
                            <p className="">Jason Mason</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}