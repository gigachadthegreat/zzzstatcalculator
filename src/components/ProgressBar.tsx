function ProgressBar({ maximum, amount, colors }: { maximum: number; amount: number[]; colors: string[] }) {
    // Calculate segment positions
    const segments = [];
    let currentPosition = 0;

    for (let i = 0; i < amount.length; i++) {
        const width = (amount[i] / maximum) * 100;
        segments.push({
            color: colors[i],
            width: `${width}%`,
            left: `${currentPosition}%`
        });
        currentPosition += width;
    }

    return (
        <div className="relative w-75 h-5">
            {/* Background bar */}
            <div className="absolute w-full h-full border-2 border-gray-400 bg-gray-200">
                {/* Color segments */}
                {segments.map((segment, index) => (
                    <div
                        key={index}
                        className="absolute h-full"
                        style={{
                            backgroundColor: segment.color,
                            width: segment.width,
                            left: segment.left,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProgressBar;
