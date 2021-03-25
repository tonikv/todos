const getTimeBetweenDates = (start, end) => {
    const diffTime = Math.abs(new Date(start) - new Date(end));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.ceil(diffDays / 7);
    const timeObject = {
        days: diffDays,
        weeks: diffWeeks
    }
    return timeObject
}

export default getTimeBetweenDates