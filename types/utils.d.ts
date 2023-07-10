export function parseTime(time: number): {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};
export function pad(number: number, length?: number): string;
export function formatMilliseconds(milliseconds: number, length?: number): string;
export function formatTimecode({ format, time }: {
    format: string;
    time: number;
}): string;
