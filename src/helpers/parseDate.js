const parseDate = (date) => {
    const dateObj = new Date(date)
    let day = dateObj.getUTCDate()
    let month = dateObj.getUTCMonth() + 1
    let hour = dateObj.getHours()
    let minutes = dateObj.getMinutes()
    let year = dateObj.getFullYear()
    let yearTwoDigits = year.toString();
    yearTwoDigits = yearTwoDigits.charAt(2) + yearTwoDigits.charAt(3);

    if (minutes < 10) minutes = "0" + minutes
    if (hour < 10) hour = "0" + hour
    if (day < 10) day = "0" + day
    if (month < 10) month = "0" + month

    const returnDate = day + "." + month + "." + yearTwoDigits
    return returnDate
}

export default parseDate