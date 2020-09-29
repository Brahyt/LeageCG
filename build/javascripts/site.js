import 'jquery'
import 'popper.js'
import { Calendar } from '../../node_modules/@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import "../stylesheets/site.css.scss"

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, googleCalendarPlugin, timeGridPlugin, listPlugin, bootstrapPlugin],
    googleCalendarApiKey: "AIzaSyCkYwlgQh425sDEAWkkh0JuPr61Qmfrhp4",
    plugins: [bootstrapPlugin, googleCalendarPlugin, dayGridPlugin],
    themeSystem: 'bootstrap',
    events: {
      googleCalendarId: 'league8190@gmail.com'
    }
  });

  calendar.render();
});


//AIzaSyCkYwlgQh425sDEAWkkh0JuPr61Qmfrhp4
