import { format } from 'date-fns';

export const convertDate = (isoDateString: Date) =>{
    const date = new Date(isoDateString);

    const formattedDate = format(date, "d MMM, yyyy");

    return formattedDate;
}