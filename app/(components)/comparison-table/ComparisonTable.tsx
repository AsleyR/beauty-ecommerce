const ComparisonTable = () => {
    return (
        <div className="grid grid-rows-4 text-left">
            <div className="grid grid-cols-3 py-8 font-medium border-b border-gray-200">
                <h1>Product</h1>
                <h1>Price</h1>
                <h1>Volume (Grams)</h1>
            </div>
            <div className="grid grid-cols-3 py-8 font-bold border-b border-gray-200">
                <p className="">Esqido</p>
                <p className="">$18 USD</p>
                <p className="">0.5g</p>
            </div>
            <div className="grid grid-cols-3 py-8 font-light border-b border-gray-200">
                <p className="">Drug store Gel Liners</p>
                <p className="">$18 USD</p>
                <p className="">0.28g</p>
            </div>
            <div className="grid grid-cols-3 py-8 font-light border-gray-200">
                <p className="">High end Gel Liners</p>
                <p className="">$24 USD</p>
                <p className="">0.35g</p>
            </div>
        </div>
    )
}

export default ComparisonTable