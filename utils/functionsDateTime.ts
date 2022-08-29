//only accept this format mm-dd-yyyy for now
export const dateStringToYear = (date: string) => {
    const [year, month, day] = date.split('-');
    return year;
}