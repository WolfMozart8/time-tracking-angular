export interface TimeData {
    title: string;
    timeframes: {
        daily: TimeFrame
        weekly: TimeFrame
        monthly: TimeFrame
    }
}

interface TimeFrame {
    current: number;
    previous: number;
}
