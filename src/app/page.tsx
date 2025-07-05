import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold animate-bounce text-gray-700 mb-4">
                Quote Generator
            </h1>
            <br />
            <div className="flex items-center space-x-4">
              <Input className="w-xl h-10 rounded-full" placeholder="Enter a Topic To Generate Quotes!" />
              <Button className="h-10 px-4 rounded-full bg-violet-700 text-white hover:bg-violet-800">Generate</Button>
            </div>
            <div className="mt-4">
              <p className="text-gray-500">Please enter a topic above to generate quotes.</p>
            </div>
          </div>
    );
}
