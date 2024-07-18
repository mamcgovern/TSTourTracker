import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Modal, Button } from 'react-bootstrap';

import moment from 'moment-timezone';
import Select from 'react-select';

import eventsData from '../data/events.json';

const Events = () => {
    const events = eventsData.events;
    const isSmallScreen = window.innerWidth <= 800;

    const [showAllEvents, setShowAllEvents] = useState(false);
    const [activeOption, setActiveOption] = useState('America/Chicago');
    const [calendarView, setCalendarView] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null); // Ensure this is correctly initialized

    const timeZones = moment.tz.names().map(zone => ({
        value: zone,
        label: zone.replace(/_/g, ' ')
    }));

    const convertToTimeZone = (date, time, timeZone) => {
        const [month, day, year] = date.split('/').map(Number);
        const [timeString, period] = time.split(' ');
        const [hours, minutes] = timeString.split(':').map(Number);

        let eventDate = moment.tz({
            year: 2000 + year,
            month: month - 1,
            day: day,
            hour: hours % 12 + (period === 'PM' ? 12 : 0),
            minute: minutes
        }, 'America/Chicago');

        eventDate = eventDate.tz(timeZone);

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

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const renderCalendar = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div style={{ width: '90%', maxWidth: '1500px', padding: '20px' }}>
                    <Calendar
                        tileContent={({ date }) => {
                            const dayEvents = eventsForCalendar.filter(event => event.date.toDateString() === date.toDateString());
                            return dayEvents.map(event => (
                                <div key={event.title} onClick={() => handleEventClick(event)} style={{ cursor: 'pointer' }}>
                                    {event.title}
                                </div>
                            ));
                        }}
                    />
                </div>
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

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedEvent?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Date:</strong> {selectedEvent?.date.toLocaleDateString()}</p>
                        <p><strong>Time:</strong> {selectedEvent?.time}</p>
                        <p><strong>Category:</strong> {selectedEvent?.category}</p>
                        <p><strong>Description:</strong> {selectedEvent?.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Events;
