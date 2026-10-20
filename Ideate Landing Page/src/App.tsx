/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IdentityMarquee } from './components/IdentityMarquee';
import { EventDiscovery } from './components/EventDiscovery';
import { CompetitionSpotlight } from './components/CompetitionSpotlight';
import { WorkshopSection } from './components/WorkshopSection';
import { FestivalExperience } from './components/FestivalExperience';
import { ScheduleSection } from './components/ScheduleSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EventModal } from './components/EventModal';
import { RegistrationModal } from './components/RegistrationModal';
import { EventItem } from './data/techfestData';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [preselectedTrackId, setPreselectedTrackId] = useState<string | undefined>(undefined);

  const handleOpenRegister = (eventId?: string) => {
    setPreselectedTrackId(eventId);
    setRegistrationOpen(true);
  };

  const handleSelectEvent = (event: EventItem) => {
    setSelectedEvent(event);
  };

  const handleCloseEventModal = () => {
    setSelectedEvent(null);
  };

  const handleExploreEvents = () => {
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Bar Navigation */}
      <Navbar onOpenRegister={() => handleOpenRegister()} />

      <main className="flex-1">
        {/* Signature Hero Experience */}
        <HeroSection
          onOpenRegister={() => handleOpenRegister()}
          onExploreEvents={handleExploreEvents}
        />

        {/* Festival Identity Marquee & Verified Metrics */}
        <IdentityMarquee />

        {/* Event Discovery & Filterable Bento Grid */}
        <EventDiscovery
          onSelectEvent={handleSelectEvent}
          onOpenRegister={handleOpenRegister}
        />

        {/* Competition Spotlight (Robowars & Meshmerize) */}
        <CompetitionSpotlight
          onSelectEvent={handleSelectEvent}
          onOpenRegister={handleOpenRegister}
        />

        {/* Hands-On Workshops & Learning */}
        <WorkshopSection
          onSelectEvent={handleSelectEvent}
          onOpenRegister={handleOpenRegister}
        />

        {/* Campus Atmosphere & Technoholix Night Shows */}
        <FestivalExperience />

        {/* 3-Day Program Schedule & Venues */}
        <ScheduleSection />

        {/* Final Conversion Section */}
        <FinalCTA
          onOpenRegister={() => handleOpenRegister()}
          onExploreEvents={handleExploreEvents}
        />
      </main>

      {/* Official Footer with Contacts & FAQs */}
      <Footer onOpenRegister={() => handleOpenRegister()} />

      {/* Event Details Inspection Modal */}
      <EventModal
        event={selectedEvent}
        onClose={handleCloseEventModal}
        onRegister={(eventId) => handleOpenRegister(eventId)}
      />

      {/* Official Delegate Pass & Registration Modal */}
      <RegistrationModal
        isOpen={registrationOpen}
        onClose={() => setRegistrationOpen(false)}
        preselectedEventId={preselectedTrackId}
      />
    </div>
  );
}
