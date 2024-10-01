export function CardTangkapDaily() {
    return (
        <section className="bg-white rounded-lg m-2 p-4 drop-shadow-lg">
            <header>
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-medium text-gray-500">Penangkapan Hari Ini</h1>
                    <span className="text-xl rounded-lg p-2 bg-green-500 text-white">KG</span>
                </div>
                <h2 className="text-sm font-medium">1/10/2024 <span className="text-gray-500 !font-normal">(Hari Ini)</span></h2>
            </header>
            <div className="py-4">
                <h1 className="text-xl font-semibold">50 KG</h1>
            </div>
        </section>
    );
}

export function CardTangkapMonthly() {
    return (
        <section className="bg-white rounded-lg m-2 p-4 drop-shadow-lg">
            <header>
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-medium text-gray-500">Penangkapan Bulan Ini</h1>
                    <span className="text-xl rounded-lg p-2 bg-green-500 text-white">KG</span>
                </div>
                <h2 className="text-sm font-medium">Oktober <span className="text-gray-500 !font-normal">(Bulan Ini)</span></h2>
            </header>
            <div className="py-4">
                <h1 className="text-xl font-semibold">1.000 KG</h1>
            </div>
        </section>
    );
}

export function CardTangkapYearly() {
    return (
        <section className="bg-white rounded-lg m-2 p-4 drop-shadow-lg">
            <header>
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-medium text-gray-500">Penangkapan Tahun Ini</h1>
                    <span className="text-xl rounded-lg p-2 bg-green-500 text-white">KG</span>
                </div>
                <h2 className="text-sm font-medium">2024 <span className="text-gray-500 !font-normal">(Tahun Ini)</span></h2>
            </header>
            <div className="py-4">
                <h1 className="text-xl font-semibold">10.000 KG</h1>
            </div>
        </section>
    );
}


