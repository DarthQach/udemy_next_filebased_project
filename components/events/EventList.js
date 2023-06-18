import EventItem from "./EventItem";
import classes from './EventList.module.css';

function EventList(props) {
    // Object destructuring
    const { items } = props;

    return (
        <ul className={classes.list}>
            {items.map((event) => (
                <EventItem
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    location={event.location}
                    id={event.id}
                    key={event.id}
                />
            ))}
        </ul>
    );
}

export default EventList;
