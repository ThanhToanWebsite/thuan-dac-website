export const NeonBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-slow"></div>
            <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slower"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow"></div>
        </div>
    );
};
