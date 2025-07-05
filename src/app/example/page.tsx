import { Button } from '@/components/ui/button';


export default function ExamplePage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1>Hello Sameer from Example Page</h1>
                <Button variant='outline' className="rounded-full text-4xl p-10">Click ME</Button>
            </main>
        </div>
    );
}