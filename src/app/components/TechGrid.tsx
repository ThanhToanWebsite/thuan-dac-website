export const TechGrid = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
          `,
                    backgroundSize: "100px 100px",
                }}
            ></div>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #8b5cf6 1px, transparent 1px),
            linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
          `,
                    backgroundSize: "20px 20px",
                    opacity: 0.5,
                }}
            ></div>
        </div>
    );
};
