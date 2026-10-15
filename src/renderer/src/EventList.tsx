import { MapPin, TriangleAlert } from 'lucide-react'
import type { CalendarData, CalendarEvent } from '../../shared/types'
import { countdown, courseMap, eventColor, eventLabel, formatTime, isoDate, overlapping, relativeDay, roomName } from './lib/calendar'

const weekdayShort = new Intl.DateTimeFormat('de-AT', { weekday: 'short' })
const monthShort = new Intl.DateTimeFormat('de-AT', { month: 'short' })

/** Upcoming appointments grouped by day ("Heute", "Morgen", …), used on "Heute" and in the mini window. */
export function EventList(props: { data: CalendarData; events: CalendarEvent[]; now: Date; compact?: boolean }) {
  const courses = courseMap(props.data)
  const clashes = overlapping(props.data)
  const groups = new Map<string, CalendarEvent[]>()
  for (const event of props.events) {
    const day = isoDate(new Date(event.start))
    groups.set(day, [...(groups.get(day) ?? []), event])
  }

  return (
    <div className={`event-list${props.compact ? ' compact' : ''}`}>
      {[...groups].map(([key, events]) => {
        const date = new Date(events[0]!.start)
        const label = relativeDay(events[0]!.start, props.now)
        // "Heute"/"Morgen" say it already; otherwise the weekday is enough next to the date.
        const near = label === 'Heute' || label === 'Morgen'
        return (
          <section key={key} className="event-day" aria-label={label}>
            {props.compact ? (
              <div className="event-day-label">{label}</div>
            ) : (
              <div className="event-date" aria-hidden="true">
                <span className={`event-date-weekday${near ? ' near' : ''}`}>{near ? label : weekdayShort.format(date).replace('.', '')}</span>
                <span className="event-date-day">{date.getDate()}</span>
                <span className="event-date-month">{monthShort.format(date).replace('.', '')}</span>
              </div>
            )}
            <div className="event-day-rows">
              {events.map((event, index) => {
                const course = event.courseKey ? courses.get(event.courseKey) : undefined
                const soon = index === 0 && label === 'Heute' ? countdown(event, props.now) : null
                return (
                  <div key={event.id} className="event-row" title={event.title}>
                    <span className="event-time">
                      {formatTime(event.start)}
                      {!props.compact && <span className="event-time-end">–{formatTime(event.end)}</span>}
                    </span>
                    <span className="event-title">
                      <span className="event-swatch" style={{ background: eventColor(event, course) }} aria-hidden="true" />
                      {clashes.has(event.id) && (
                        <span
                          className="cal-clash"
                          title={`Gleichzeitig: ${clashes
                            .get(event.id)!
                            .map((other) => eventLabel(other, other.courseKey ? courses.get(other.courseKey) : undefined))
                            .join(', ')}`}
                        >
                          <TriangleAlert size={12} />
                        </span>
                      )}
                      <span className="event-title-text">{eventLabel(event, course)}</span>
                    </span>
                    {event.location && (
                      <span className="event-room">
                        <MapPin size={12} aria-hidden="true" />
                        <span className="event-room-text">{roomName(event.location)}</span>
                      </span>
                    )}
                    {soon && <span className={`event-soon${soon === 'läuft' ? ' now' : ''}`}>{soon}</span>}
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
