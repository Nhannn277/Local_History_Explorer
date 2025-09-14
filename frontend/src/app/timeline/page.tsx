// app/timeline/page.tsx

import { AnimatedTimeline } from "@/components/timeline/timeline";


export default function TimelinePage() {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-background min-h-screen">
      <AnimatedTimeline />  
    </main>
  );
}
