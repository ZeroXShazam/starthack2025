'use client';

import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { WorkflowHeader } from '@/components/WorkflowHeader';
import { WorkflowGrid } from '@/components/WorkflowGrid';
import { initialWorkflows } from '@/data/workflows';
import { WorkflowCard } from '@/components/WorkflowCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome to your AI workflow dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WorkflowCard
          workflow={{
            id: '1',
            name: 'Financial Analysis',
            description: 'Analyze financial data and generate reports',
            status: 'active',
            lastRun: '2h ago',
            assignee: 'AI Assistant',
            prompt: 'Analyze the latest financial data...',
            chatHistory: []
          }}
        />
        {/* Add more workflow cards */}
      </div>
    </div>
  );
}
