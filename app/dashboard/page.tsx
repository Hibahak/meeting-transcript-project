'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { api } from '@/lib/api';
import { Meeting } from '@/lib/types';
import { StatsCard } from '@/components/cards/StatsCard';
import { MeetingCard } from '@/components/cards/MeetingCard';
import { ActivityTimelineChart } from '@/components/charts/ActivityTimelineChart';
import { SpeakingTimeChart } from '@/components/charts/SpeakingTimeChart';
import { Video, CheckSquare, GitCommit, Activity, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function DashboardPage() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await api.getMeetings();
      setMeetings(data);
      setIsLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="space-y-8 pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening in your meetings.</p>
        </div>
        <Button className="font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> Start Live Meeting
        </Button>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <motion.div variants={item}>
          <StatsCard
            title="Total Meetings"
            value="24"
            description="This month"
            icon={Video}
            trend="up"
            trendValue="12%"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatsCard
            title="Action Items Pending"
            value="18"
            description="Across all projects"
            icon={CheckSquare}
            trend="down"
            trendValue="5%"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatsCard
            title="Decisions Recorded"
            value="142"
            description="In the knowledge base"
            icon={GitCommit}
            trend="neutral"
            trendValue="Stable"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatsCard
            title="Avg. Productivity Score"
            value="86"
            description="Out of 100"
            icon={Activity}
            trend="up"
            trendValue="4 pts"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
      >
        <ActivityTimelineChart />
        <SpeakingTimeChart />
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold font-heading">Recent Meetings</h2>
          <Button variant="link" className="text-primary p-0 h-auto">View all</Button>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-40 rounded-xl bg-card/50 animate-pulse border border-border/50"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meetings.map((meeting) => (
              <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
