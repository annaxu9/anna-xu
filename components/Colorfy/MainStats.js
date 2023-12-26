export default function MainStats({duration, date, popularity}) {
    function formatDuration(milliseconds) {
        // Convert milliseconds to seconds
        const totalSeconds = Math.floor(milliseconds / 1000);
    
        // Calculate minutes and seconds
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
    
        // Format the output as "minutes:seconds"
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    function formatDate(inputDate) {
        const date = new Date(inputDate);
    
        // Extract the month, day, and year
        const month = date.getMonth() + 1; // getMonth() returns 0-11
        const day = date.getDate();
        const year = date.getFullYear();
    
        // Format the output as "M/D/YYYY"
        return `${month}/${day}/${year}`;
    }

    function formatPopularity(number) {
        const formattedNumber = (number / 10).toFixed(1);
        return formattedNumber
    }
    

    return (
        <div className="flex flex-col sm:flex-row  justify-around text-center">
            <div className="p-3 sm:p-0">
                <h2>Track Length</h2>
                <h1 className="text-xl font-black">{formatDuration(duration)}</h1>
            </div>
            <div className="p-3 sm:p-0"> 
                <h2>Release Date</h2>
                <h1 className="text-xl font-black">{formatDate(date)}</h1>
            </div>
            <div className="p-3 sm:p-0">
                <h2>Popularity</h2>
                <div className="flex justify-center items-baseline">
                    <h1 className="text-xl font-black">{formatPopularity(popularity)} </h1>
                    <p className="text-sm font-black">/10</p>
                </div>
            </div>
        </div>
    )
}