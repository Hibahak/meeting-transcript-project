'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Mon', meetings: 2, tasks: 4 },
  { name: 'Tue', meetings: 3, tasks: 2 },
  { name: 'Wed', meetings: 1, tasks: 5 },
  { name: 'Thu', meetings: 4, tasks: 3 },
  { name: 'Fri', meetings: 2, tasks: 1 },
];

export function ActivityTimelineChart() {
  return (
    <Card className="col-span-1 lg:col-span-2 border-border/50 bg-card/40">
      <CardHeader>
        <CardTitle className="text-base font-heading">Weekly Activity Overview</CardTitle>
        <CardDescription>Meetings held vs tasks created this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
              <Tooltip 
                cursor={{ fill: '#1E293B', opacity: 0.5 }}
                contentStyle={{ 
                  backgroundColor: '#0F172A', 
                  borderColor: '#334155',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar dataKey="meetings" name="Meetings" fill="#6366F1" radius={[4, 4, 0, 0]} barSize={30} />
              <Bar dataKey="tasks" name="Tasks Generated" fill="#22D3EE" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
