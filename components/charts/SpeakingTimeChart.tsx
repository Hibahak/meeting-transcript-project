'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Alex Johnson', value: 45 },
  { name: 'Sarah Miller', value: 25 },
  { name: 'James Wilson', value: 20 },
  { name: 'Emily Davis', value: 10 },
];

const COLORS = ['#6366F1', '#22D3EE', '#8B5CF6', '#F43F5E'];

export function SpeakingTimeChart() {
  return (
    <Card className="col-span-1 border-border/50 bg-card/40">
      <CardHeader>
        <CardTitle className="text-base font-heading">Speaking Time Analytics</CardTitle>
        <CardDescription>Aggregate share of voice across recent meetings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <RechartsTooltip 
                contentStyle={{ 
                  backgroundColor: '#1E293B', 
                  borderColor: '#334155',
                  borderRadius: '8px',
                  color: '#E2E8F0'
                }}
                itemStyle={{ color: '#E2E8F0' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
