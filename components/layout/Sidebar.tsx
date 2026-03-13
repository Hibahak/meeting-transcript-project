'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Radio, 
  FileText, 
  CheckSquare, 
  GitCommit, 
  Bot, 
  Settings,
  BrainCircuit
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Meetings', href: '/meetings', icon: Users },
  { name: 'Live Meeting', href: '/live', icon: Radio },
  { name: 'Transcripts', href: '/meetings', icon: FileText }, // Alias to meetings for now
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Decision Timeline', href: '/decisions', icon: GitCommit },
  { name: 'AI Assistant', href: '/assistant', icon: Bot },
  { name: 'Settings', href: '#', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-all duration-300">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-border">
        <BrainCircuit className="h-6 w-6 text-primary mr-3" />
        <span className="font-heading font-bold text-lg tracking-tight">MeetingMind</span>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname.startsWith(item.href) && (item.href !== '#' && item.href !== '/meetings');
            // special check to avoid highlighting generic meetings path if we are on Dashboard
            const actuallyActive = item.href === '/meetings' ? pathname === '/meetings' || pathname.startsWith('/meetings/') : pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  actuallyActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors'
                )}
              >
                <item.icon
                  className={cn(
                    actuallyActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground',
                    'mr-3 h-5 w-5 shrink-0 transition-colors'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="shrink-0 p-4 border-t border-border">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs uppercase">
            AJ
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-foreground">Alex Johnson</p>
            <p className="text-xs font-medium text-muted-foreground">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
