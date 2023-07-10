export function parseTime(time: any): {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: any;
};
export function pad(number: any, length?: number): string;
export function formatMilliseconds(milliseconds: any, length?: number): string;
export function formatTimecode({ format, time }: {
    format: any;
    time: any;
}): string;
