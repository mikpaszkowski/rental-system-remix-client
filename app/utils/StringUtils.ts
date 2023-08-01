export class StringUtils {
    static truncateString(str: string, startLength: number = 5, endLength: number = 8): string {
        if (str.length <= startLength + endLength) {
            return str;
        }

        const start = str.slice(0, startLength);
        const end = str.slice(-endLength);

        return `${start}...${end}`;
    }
}