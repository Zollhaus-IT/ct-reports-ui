import { bitter } from '@/app/ui/fonts';

export default function Page() {
   return  (
      <main>
        <h1 className={`${bitter.className} mb-4 text-xl md:text-2xl`}>
          Dashboard Home Page
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <p>Select Dashboard from navigation</p>
        </div>
      </main>
    )
 }