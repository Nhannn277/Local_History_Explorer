"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  type?: "milestone" | "achievement" | "launch"
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "June 2016",
    title: "Project Genesis",
    description:
      "The initial spark of an idea that would change everything. Started with a simple concept and endless possibilities.",
    type: "milestone",
  },
  {
    id: "2",
    date: "August 2017",
    title: "First Breakthrough",
    description:
      "After collectively failing a number of business ventures, Dan and Adam finally have their first break. Together they discovered the key to sustainable growth.",
    type: "achievement",
  },
  {
    id: "3",
    date: "March 2019",
    title: "Major Launch",
    description:
      "Successfully launched our flagship product to the market. The response was overwhelming and exceeded all expectations.",
    type: "launch",
  },
  {
    id: "4",
    date: "November 2020",
    title: "Global Expansion",
    description:
      "Expanded operations to 15 countries worldwide. Built a diverse team of talented individuals from around the globe.",
    type: "milestone",
  },
  {
    id: "5",
    date: "July 2022",
    title: "Innovation Award",
    description:
      "Received the prestigious Innovation Excellence Award for our groundbreaking approach to solving complex problems.",
    type: "achievement",
  },
  {
    id: "6",
    date: "Present",
    title: "Continuous Evolution",
    description:
      "Today we continue to push boundaries and explore new frontiers. The journey never ends, and the best is yet to come.",
    type: "milestone",
  },
]

export function AnimatedTimeline() {
  const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const eventRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventId = entry.target.getAttribute("data-event-id")
            if (eventId) {
              setVisibleEvents((prev) => new Set([...prev, eventId]))
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: "50px" },
    )

    eventRefs.current.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const setEventRef = (eventId: string, element: HTMLDivElement | null) => {
    if (element) {
      eventRefs.current.set(eventId, element)
    } else {
      eventRefs.current.delete(eventId)
    }
  }

  const getEventTypeColor = (type?: string) => {
    switch (type) {
      case "milestone":
        return "from-primary to-secondary"
      case "achievement":
        return "from-accent to-primary"
      case "launch":
        return "from-secondary to-accent"
      default:
        return "from-primary to-secondary"
    }
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Our Journey Through Time</h1>
          <p className="text-xl text-muted text-pretty">
            A visual story of milestones, achievements, and continuous growth
          </p>
        </div>

        <div className="relative">
          {/* Gradient Timeline Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-lg shadow-primary/20"
            style={{
              background: "linear-gradient(180deg, #dc2626 0%, #9b59b6 50%, #f59e0b 100%)",
              filter: "drop-shadow(0 0 10px rgba(220, 38, 38, 0.3))",
            }}
          />

          {/* Timeline Events */}
          <div className="space-y-24">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0
              const isVisible = visibleEvents.has(event.id)

              return (
                <div
                  key={event.id}
                  ref={(el) => setEventRef(event.id, el)}
                  data-event-id={event.id}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-background transition-all duration-500 hover:scale-125 hover:shadow-lg hover:shadow-accent/50 ${
                        isVisible ? "animate-pulse-3d" : ""
                      }`}
                      style={{
                        background: `linear-gradient(135deg, #dc2626, #9b59b6)`,
                        transform: isVisible ? "scale(1.1) translateZ(5px)" : "scale(1)",
                        boxShadow: isVisible ? "0 0 20px rgba(220, 38, 38, 0.5)" : "0 0 0 rgba(220, 38, 38, 0)",
                      }}
                    />
                  </div>

                  {/* Event Content */}
                  <div
                    className={`w-5/12 ${isLeft ? "pr-16" : "pl-16"} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <Card className="p-6 bg-card backdrop-blur-sm border-2 border-border/70 hover:border-accent/70 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:scale-105 transform-gpu">
                      <div className="space-y-3">
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getEventTypeColor(event.type)} text-white shadow-lg`}
                        >
                          {event.date}
                        </div>
                        <h3 className="text-2xl font-bold text-card-foreground">{event.title}</h3>
                        <p className="text-muted leading-relaxed text-pretty">{event.description}</p>
                      </div>
                    </Card>
                  </div>

                  {/* Connecting Line to Marker */}
                  <div
                    className={`absolute top-1/2 w-16 h-0.5 bg-gradient-to-r ${
                      isLeft
                        ? "right-1/2 mr-3 from-transparent to-primary"
                        : "left-1/2 ml-3 from-primary to-transparent"
                    } ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                    style={{
                      animationDelay: `${index * 0.2 + 0.3}s`,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </div>
  )
}
