export function formatWIB(date: string | Date | null | undefined) {
    if (!date) return "-";

    return new Date(date)
        .toLocaleString("sv-SE", {
            timeZone: "Asia/Jakarta",
            hour12: false,
        })
        .replace("T", " ");
}
