const MONTHS = {
    1: 'Januar',
    2: 'Februar',
    3: 'Mars',
    4: 'April',
    5: 'Mai',
    6: 'Juni',
    7: 'Juli',
    8: 'August',
    9: 'September',
    10: 'Oktober',
    11: 'November',
    12: 'Desember',
};

export const formatDate = str => {
    if (typeof str !== 'string' || !str.length) {
        return '';
    }

    const [date, time] = str.split('T');

    const [year, month, day] = date.split('-');
    const [hours, minutes] = time.split(':');

    const monthName = MONTHS[parseInt(month, 10)];

    return `${day} ${monthName} ${year}, ${hours}:${minutes}`;
};
