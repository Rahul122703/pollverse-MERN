import React from "react";
import {
  FiEyeOff,
  FiTrendingUp,
  FiActivity,
  FiMessageCircle,
  FiBarChart2,
  FiLock,
  FiUnlock,
  FiBell,
  FiUsers,
  FiZap,
  FiHash,
} from "react-icons/fi";

const feed = [
  {
    id: 1,
    author: "Rahul Sharma",
    anonymous: false,
    question: "Is remote work actually improving work–life balance?",
    sentiment: "Positive",
    confidence: "High",
    volatility: "Low",
    state: "Active",
    shift: "+12%",
    votes: 2341,
    anonSplit: "Anon 48% • Public 71%",
    reason: "Stabilized after public votes increased",
    timeline: "Stable for 6h",
    scope: "Professionals",
    discussion: "Thoughtful",
    locked: false,
    comments: 142,
    time: "2h ago",
  },
  {
    id: 2,
    author: "Anonymous User",
    anonymous: true,
    question: "Do college degrees still matter for tech jobs?",
    sentiment: "Negative",
    confidence: "Medium",
    volatility: "High",
    state: "🔥 Active",
    shift: "-8%",
    votes: 1890,
    anonSplit: "Anon 67% • Public 42%",
    reason: "Negative spike after anonymous surge",
    timeline: "Flipped twice today",
    scope: "Students",
    discussion: "Heated",
    locked: true,
    comments: 321,
    time: "5h ago",
  },
];

const sentimentStyle = {
  Positive: "bg-green-600/10 text-green-400",
  Neutral: "bg-yellow-600/10 text-yellow-400",
  Negative: "bg-red-600/10 text-red-400",
};

const SamplePage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">

      {/* LEFT SIDEBAR */}
      <aside className="hidden xl:flex w-72 flex-col border-r border-white/10 p-6 space-y-6">
        <h1 className="text-2xl font-bold">Pollverse</h1>

        <nav className="space-y-2 text-sm">
          <button className="w-full px-4 py-2 rounded-xl bg-indigo-600 text-white flex items-center gap-3">
            <FiTrendingUp /> Home Feed
          </button>
          <button className="w-full px-4 py-2 rounded-xl hover:bg-white/5 flex items-center gap-3">
            <FiBarChart2 /> My Polls
          </button>
          <button className="w-full px-4 py-2 rounded-xl hover:bg-white/5 flex items-center gap-3">
            <FiEyeOff /> Incognito Mode
          </button>
          <button className="w-full px-4 py-2 rounded-xl hover:bg-white/5 flex items-center gap-3">
            <FiBell /> Alerts
          </button>
        </nav>

        <button className="mt-auto py-3 rounded-xl bg-indigo-600 font-semibold">
          + Create Poll
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-3xl mx-auto w-full">

        {/* TOP BAR */}
        <header className="sticky top-0 z-20 bg-gray-950/90 backdrop-blur border-b border-white/10">
          <div className="px-4 py-3 flex justify-between items-center">
            <h2 className="font-semibold">Opinion Feed</h2>
            <FiBell />
          </div>
        </header>

        {/* CREATE POLL */}
        <div className="px-4 py-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <input
              placeholder="Ask something anonymously or publicly…"
              className="w-full bg-transparent outline-none text-sm"
            />
            <div className="flex justify-between mt-3 text-xs text-gray-400">
              <span>Anonymous toggle • Sentiment tracking ON</span>
              <button className="px-4 py-1.5 rounded-lg bg-indigo-600">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* FEED */}
        <div className="px-4 space-y-8 pb-28">
          {feed.map((item) => (
            <div key={item.id} className="relative">

              {/* USER PILL */}
              <div className="absolute -top-4 left-5 z-10">
                <div className="flex items-center gap-2 bg-gray-900 border border-white/10 rounded-full px-3 py-1 text-xs">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-semibold">
                    {item.anonymous ? <FiEyeOff /> : item.author[0]}
                  </div>
                  <span className={item.anonymous ? "blur-sm select-none" : ""}>
                    {item.author}
                  </span>
                </div>
              </div>

              {/* CARD */}
              <div className="rounded-3xl border border-white/10 bg-gray-900">
                <div className="px-6 pt-8 pb-5 space-y-4">

                  {/* META */}
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{item.time}</span>
                    <span className={`px-2 py-1 rounded-full ${sentimentStyle[item.sentiment]}`}>
                      {item.sentiment}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold">
                    {item.question}
                  </h3>

                  {/* METRICS */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                    <span>State: {item.state}</span>
                    <span>Confidence: {item.confidence}</span>
                    <span>Volatility: {item.volatility}</span>
                  </div>

                  {/* SHIFT */}
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FiActivity /> Sentiment shift {item.shift}
                  </div>

                  {/* BAR */}
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-2/3 bg-indigo-600 rounded-full" />
                  </div>

                  {/* INSIGHTS */}
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>🕵️ {item.anonSplit}</p>
                    <p>📌 {item.reason}</p>
                    <p>⏱ {item.timeline}</p>
                    <p>🎯 Audience: {item.scope}</p>
                    <p>💬 Discussion: {item.discussion}</p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex justify-between text-sm text-gray-400 pt-3">
                    <span>{item.votes} votes</span>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1 hover:text-indigo-400">
                        <FiBarChart2 /> Results
                      </button>
                      <button className="flex items-center gap-1 hover:text-indigo-400">
                        <FiMessageCircle /> {item.comments}
                      </button>
                      <button className="flex items-center gap-1 hover:text-indigo-400">
                        {item.locked ? <FiLock /> : <FiUnlock />}
                        {item.locked ? "Vote to unlock" : "Unlocked"}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden lg:flex w-80 flex-col border-l border-white/10 p-6 space-y-4">
        <div className="rounded-2xl bg-white/5 p-4">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FiZap /> Live Sentiment
          </h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>📈 3 polls turned Positive</li>
            <li>📉 2 polls turned Negative</li>
            <li>🔄 5 sentiment flips today</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white/5 p-4">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FiHash /> Trending Topics
          </h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>#RemoteWork</li>
            <li>#AIJobs</li>
            <li>#CollegeDebate</li>
            <li>#IncognitoVoting</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white/5 p-4">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FiUsers /> Community Pulse
          </h3>
          <p className="text-sm text-gray-400">
            12,431 users active in the last 24 hours
          </p>
        </div>
      </aside>
    </div>
  );
};

export default SamplePage;
