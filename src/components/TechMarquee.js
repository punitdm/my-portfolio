"use client";

const row1 = [
  { name: "Meta Ads", color: "#1877F2" },
  { name: "Google Ads", color: "#4285F4" },
  { name: "Shopify", color: "#96BF48" },
  { name: "WordPress", color: "#21759B" },
  { name: "Klaviyo", color: "#f97316" },
  { name: "Google Analytics", color: "#E37400" },
  { name: "SEMrush", color: "#FF6B2C" },
  { name: "WhatsApp Business", color: "#25D366" },
  { name: "Canva", color: "#00C4CC" },
  { name: "HubSpot", color: "#FF7A59" },
];

const row2 = [
  { name: "Ahrefs", color: "#0F6AFF" },
  { name: "Mailchimp", color: "#FFD200" },
  { name: "Google Tag Manager", color: "#4285F4" },
  { name: "Hotjar", color: "#FD3A5C" },
  { name: "Zapier", color: "#FF4A00" },
  { name: "Meta Business Suite", color: "#1877F2" },
  { name: "Google Search Console", color: "#34A853" },
  { name: "Notion", color: "#a0a0a0" },
  { name: "Screaming Frog", color: "#45b56a" },
  { name: "Figma", color: "#F24E1E" },
];

function MarqueeRow({ items, direction = "left" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden marquee-wrapper">
      <div className={`flex gap-4 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {doubled.map((tool, i) => (
          <span
            key={i}
            className="px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap bg-white/5 border"
            style={{ color: tool.color, borderColor: `${tool.color}44` }}
          >
            {tool.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-14 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Tools & Platforms</p>
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
          My Tech Stack
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-gray-400 text-sm">
          Platforms and tools I use daily to plan, execute, and scale campaigns.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
}
