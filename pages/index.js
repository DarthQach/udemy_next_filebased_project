import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <ul><EventList items={featuredEvents} /></ul>
        </div>
    );
}

export default HomePage;
