import React from "react";

const polls = [
  {
    id: 1,
    question: "Is remote work better than office work?",
    votes: 1243,
    sentiment: "Positive",
    time: "2h ago",
  },
  {
    id: 2,
    question: "Should college attendance be mandatory?",
    votes: 892,
    sentiment: "Negative",
    time: "5h ago",
  },
  {
    id: 3,
    question: "Is AI a threat to developers?",
    votes: 2310,
    sentiment: "Neutral",
    time: "1d ago",
  },
];

const sentimentColor = {
  Positive: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Neutral: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  Negative: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

const SamplePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Pollverse</h1>
          <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
            + Create Poll
          </button>
        </div>
      </header>

      {/* Feed */}
      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {polls.map((poll) => (
          <div
            key={poll.id}
            className="
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              rounded-2xl
              p-4 sm:p-5
              space-y-3
              hover:shadow-md transition
            "
          >
            {/* Poll meta */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{poll.time}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${sentimentColor[poll.sentiment]}`}>
                {poll.sentiment}
              </span>
            </div>

            {/* Question */}
            <h2 className="text-base sm:text-lg font-semibold leading-snug">
              {poll.question}
            </h2>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{poll.votes} votes</span>
              <button className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Vote & View Results
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Mobile Bottom Bar */}
      <nav className="fixed bottom-0 w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 sm:hidden">
        <div className="flex justify-around py-2 text-sm">
          <button className="font-medium">Home</button>
          <button>Trending</button>
          <button>Profile</button>
        </div>
      </nav>
    </div>
  );
};

export default SamplePage;
