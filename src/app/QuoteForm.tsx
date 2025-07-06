"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function QuoteForm() {
    const [topic, setTopic] = useState("");
    const [quotes, setQuotes] = useState<string[]>([]);
    const [currentTopic, setCurrentTopic] = useState("");

    const fetchQuotes = async () => {
        try {
            const response = await fetch("/quotes.json");
            const data = await response.json();
            const matchedTopic = data.find((item: { topic: string }) => item.topic.toLowerCase() === topic.toLowerCase());
            setQuotes(matchedTopic ? matchedTopic.quotes.slice(0, 3) : ["No quotes found for this topic."]);
        } catch (error) {
            console.error("Error fetching quotes:", error);
            setQuotes(["Error fetching quotes."]);
        }
        setCurrentTopic(topic);
        setTopic("");
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            fetchQuotes();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold animate-bounce text-gray-700 mb-4">
                Quote Generator
            </h1>
            <br />
            <div className="flex items-center space-x-4">
                <Input
                    className="w-xl h-10 rounded-full"
                    placeholder="Enter a Topic To Generate Quotes!"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button
                    className="h-10 px-4 rounded-full bg-violet-700 text-white hover:bg-violet-800"
                    onClick={fetchQuotes}
                >
                    Generate
                </Button>
            </div>
            <br />
            <div className="mt-4">
                {quotes.length > 0 && quotes[0] !== "No quotes found for this topic." && (
                    <h1 className="text-4xl font-semibold text-gray-800 mb-2 -translate-x-5">Quotes about {currentTopic}:</h1>
                )}
                {quotes.map((quote, index) => (
                    <p key={index} className="text-lg text-violet-500 font-medium mb-2 animate-pulse">
                        <span className="text-2xl text-violet-600 font-bold">•</span> {quote}
                    </p>
                ))}
            </div>
        </div>
    );
}
