function generateDateArray(len: number) {
    const dateArray = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 1);

    for (let i = 0; i < len; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear();

        const dateString = `${day}/${month}/${year}`;

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const title = `${day} ${currentDate.toLocaleDateString('en-US', { month: 'short' })}`;


        dateArray.push({ key: dateString, title: title });
    }

    return dateArray;
}

 generateDateArray;

export default generateDateArray;