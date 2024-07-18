import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import moment from 'moment-timezone';
import Select from 'react-select';

import eventsData from '../data/events.json';

const Events = () => {
    const events = eventsData.events;
    const isSmallScreen = window.innerWidth <= 800;

    const [showAllEvents, setShowAllEvents] = useState(false);
    const [activeOption, setActiveOption] = useState('America/Chicago');
    const [calendarView, setCalendarView] = useState(false);

    const timeZones = moment.tz.names().map(zone => ({
        value: zone,
        label: zone.replace(/_/g, ' ')
    })); // Get a list of all time zones and format them for react-select

    const convertToTimeZone = (date, time, timeZone) => {
        const [month, day, year] = date.split('/').map(Number);
        const [timeString, period] = time.split(' ');
        const [hours, minutes] = timeString.split(':').map(Number);

        // Create a Moment object using the parsed date and time
        let eventDate = moment.tz({
            year: 2000 + year,
            month: month - 1,
            day: day,
            hour: hours % 12 + (period === 'PM' ? 12 : 0),
            minute: minutes
        }, 'America/Chicago'); // Assuming input is in CST

        // Convert to the target time zone
        eventDate = eventDate.tz(timeZone);

        // Get the new date and time in the target time zone
        const newDate = eventDate.format('M/D/YY');
        const newTime = eventDate.format('h:mm A');

        return { newDate, newTime };
    };

    const handleOptionChange = (selectedOption) => {
        setActiveOption(selectedOption.value);
    };

    const makeMenu = () => {
        return (
            <div>
                <button className={`btn ${showAllEvents ? 'btn-outline-secondary' : 'btn-primary'}`} style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowAllEvents(false)}>Upcoming Events</button>
                <button className={`btn ${showAllEvents ? 'btn-primary' : 'btn-outline-secondary'}`} style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowAllEvents(true)}>All Events</button>
            </div>
        );
    };

    const makeTimeZoneMenu = () => {
        return (
            <div style={{ width: isSmallScreen ? 'auto' : '25%', margin: 'auto', textAlign: 'left' }}>
                <Select
                    options={timeZones}
                    onChange={handleOptionChange}
                    value={timeZones.find(zone => zone.value === activeOption)}
                    isSearchable
                />
            </div>
        );
    };

    const makeViewMenu = () => {
        return (
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <button className={`btn ${calendarView ? 'btn-outline-secondary' : 'btn-primary'}`} style={{ margin: '10px' }} onClick={() => setCalendarView(false)}>List View</button>
                <button className={`btn ${calendarView ? 'btn-primary' : 'btn-outline-secondary'}`} style={{ margin: '10px' }} onClick={() => setCalendarView(true)}>Calendar View</button>
            </div>
        );
    };

    const singleEvent = (event) => {
        const classNames = {
            'Concert': 'concert',
            'Ceremony': 'ceremony',
            'Release': 'release',
            'Football': 'football',
            'Other': 'other'
        };

        return (<button className={`unclickable-button ${classNames[event.category] || classNames['Other']}`}>{event.title}</button>);
    };

    const renderEvent = (event) => {
        const currentDate = new Date();
        const [month, day, year] = event.date.split('/').map(Number);
        const eventDate = new Date(2000 + year, month - 1, day);

        const { newDate, newTime } = event.time ? convertToTimeZone(event.date, event.time, activeOption) : { newDate: event.date, newTime: '' };

        if (showAllEvents || eventDate >= currentDate) {
            return (
                <div key={event.title}>
                    <div className="row">
                        <div className="col" style={{ textAlign: 'right' }}>
                            <p className="lead title">{newDate} {newTime && <em className="date">@ {newTime}</em>}</p>
                        </div>
                        <div className="col">
                            {singleEvent(event)}
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                </div>
            );
        }
    };

    const allEvents = events.map((el) => (
        <div key={el.title}>
            {renderEvent(el)}
        </div>
    ));

    const eventsForCalendar = events.map(event => {
        const [month, day, year] = event.date.split('/').map(Number);
        const eventDate = new Date(2000 + year, month - 1, day);
        return {
            ...event,
            date: eventDate
        };
    });

    const renderCalendar = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Calendar
                    tileContent={({ date }) => {
                        const dayEvents = eventsForCalendar.filter(event => event.date.toDateString() === date.toDateString());
                        return dayEvents.map(event => (
                            <div key={event.title}>
                                {event.title}
                            </div>
                        ));
                    }}
                />
            </div>
        );
    };

    return (
        <div>
            <div className="container">
                <h1 className="page-title">Events</h1>
                <hr className="featurette-divider" />
                <div style={{ textAlign: "center" }}>
                    {makeMenu()}
                </div>
                <div style={{ textAlign: "right" }}>
                    {makeTimeZoneMenu()}
                </div>
                <div>
                    {makeViewMenu()}
                </div>
                <hr className="featurette-divider" />
                {calendarView ? renderCalendar() : allEvents}
            </div>
        </div>
    );
}

export default Events;
