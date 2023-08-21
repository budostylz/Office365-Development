$(document).ready(() => {


  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    height: '100%',
    aspectRatio: 1.8,
    editable: true, // enable draggable events
    now: '2023-01-07',
    scrollTime: '00:00', // undo default 6am scrollTime
    headerToolbar: {
      left: 'today prev,next',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineOneMonth,resourceTimelineTwoMonths,resourceTimelineThreeMonths,resourceTimelineSixMonths,resourceTimeline1Year'
    },
    initialView: 'resourceTimelineDay',
    views: {
      resourceTimelineOneMonth: {
        type: 'resourceTimeline',
        duration: { months: 1 },
        buttonText: 'month'
      },
      resourceTimelineTwoMonths: {
        type: 'resourceTimeline',
        duration: { months: 2 },
        buttonText: '2 months'
      },
      resourceTimelineThreeMonths: {
        type: 'resourceTimeline',
        duration: { months: 3 },
        buttonText: '3 months'
      },
      resourceTimelineSixMonths: {
        type: 'resourceTimeline',
        duration: { months: 6 },
        buttonText: '6 months'
      },
      resourceTimeline1Year: {
        type: 'resourceTimeline',
        duration: { months: 12 },
        buttonText: '1 year'
      },

    },
    expandRows: true,
    resourceAreaHeaderContent: 'Contracts',
    resources: [
      { id: 'a', title: 'Contract1' },
      { id: 'b', title: 'Contract2', eventColor: 'green' },
      { id: 'c', title: 'Contract3', eventColor: 'orange' },
      {
        id: 'd', title: 'Contract4', children: [
          { id: 'd1', title: 'Contract5' },
          { id: 'd2', title: 'Contract6' }
        ]
      },
      { id: 'e', title: 'Contract7' },
      { id: 'f', title: 'Contract8', eventColor: 'red' },
      // { id: 'g', title: 'Auditorium G' },
      // { id: 'h', title: 'Auditorium H' },
      // { id: 'i', title: 'Auditorium I' },
      // { id: 'j', title: 'Auditorium J' },
      // { id: 'k', title: 'Auditorium K' },
      // { id: 'l', title: 'Auditorium L' },
      // { id: 'm', title: 'Auditorium M' },
      // { id: 'n', title: 'Auditorium N' },
      // { id: 'o', title: 'Auditorium O' },
      // { id: 'p', title: 'Auditorium P' },
      // { id: 'q', title: 'Auditorium Q' },
      // { id: 'r', title: 'Auditorium R' },
      // { id: 's', title: 'Auditorium S' },
      // { id: 't', title: 'Auditorium T' },
      // { id: 'u', title: 'Auditorium U' },
      // { id: 'v', title: 'Auditorium V' },
      // { id: 'w', title: 'Auditorium W' },
      // { id: 'x', title: 'Auditorium X' },
      // { id: 'y', title: 'Auditorium Y' },
      // { id: 'z', title: 'Auditorium Z' }
    ],
    events: [
      { id: '1', resourceId: 'b', start: '2023-01-07T02:00:00', end: '2023-01-07T07:00:00', title: 'event 1' },
      { id: '2', resourceId: 'b', start: '2023-01-07T02:00:00', end: '2023-02-07T09:00:00', title: 'event 6' },
      { id: '3', resourceId: 'c', start: '2023-01-07T05:00:00', end: '2023-01-07T22:00:00', title: 'event 2' },
      { id: '4', resourceId: 'd', start: '2023-01-06', end: '2023-01-08', title: 'event 3' },
      { id: '5', resourceId: 'e', start: '2023-01-07T03:00:00', end: '2023-01-07T08:00:00', title: 'event 4' },
      { id: '6', resourceId: 'f', start: '2023-01-07T00:30:00', end: '2023-05-07T01:30:00', title: 'event 5' }
    ],

    eventDidMount: function (prop, el) {
      const event = prop.event;
      const element = prop.el;
      console.log('prop: ', prop);
      console.log('event: ', event.title);
      console.log('element: ', element);

      $(element).attr('title', `${event.title}`);

      $(element).tooltip({
        content: `<div style="background-color:green">${event.title}</div>`
      });


    










    }


  });



  calendar.render();








});




