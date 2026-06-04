"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight, X, Clock, Calendar } from "lucide-react";

const posts = [
  {
    title: "Why Pricing Strategy Is the Underrated Core PM Skill",
    excerpt: "Most product managers obsess over features. The best ones obsess over value exchange. Here's how pricing literacy transformed my product thinking.",
    date: "March 2025",
    readTime: "7 min",
    category: "Product Strategy",
    tags: ["Pricing", "Product Management"],
    emoji: "💰",
    content: `Most product managers I've worked with can tell you everything about their roadmap, their sprint velocity, and their NPS scores. But ask them to explain why their product is priced the way it is — or what would happen if you changed the packaging — and you often get a blank stare.

That's the gap I want to address. Pricing is not a finance problem. It's not a sales problem. It is fundamentally a product problem.

**The value exchange is the product**

When I took ownership of Pricing & Packaging at TeamViewer, my first instinct was to dive into the numbers — cost structures, market benchmarks, competitor tiers. All useful, but all incomplete. The real work started when I asked a simpler question: what does a customer actually get, and do they feel it was worth it?

Price sensitivity analysis tells you where customers start to hesitate. But it's the qualitative signal — the discovery calls, the churn conversations, the "why didn't you renew?" interviews — that tells you *why* the hesitation happens.

**Packaging is product design**

The way you bundle features is a product decision with commercial consequences. When we redesigned the TeamViewer ONE tiers, every packaging decision directly shaped how customers understood the value. Put too much in the entry tier and you destroy upgrade motivation. Put too little and you lose the deal upfront.

The best packaging decisions I've made came from sitting with enterprise customers and watching how they actually used the product — not how we imagined they did.

**What I'd tell every PM**

Own the pricing conversation. Don't defer it to finance or sales. Understand your cost structure. Run sensitivity analysis. But most importantly — build a strong mental model of why customers pay, not just what they pay.

That model will make every roadmap decision sharper.`,
  },
  {
    title: "From Project Manager to Product Manager: Lessons from the Trenches",
    excerpt: "After years in project delivery, I made the jump to product ownership. The transition taught me more about value, customers, and strategy than any certification.",
    date: "January 2025",
    readTime: "6 min",
    category: "Career",
    tags: ["Career", "Product", "Leadership"],
    emoji: "🚀",
    content: `I spent several years as a project manager — at Turkish Airlines, Dogus Technology, and eventually TeamViewer. I was good at it. Gantt charts, risk registers, steering committees: I had the toolkit and I used it well.

But somewhere along the way I realized I was optimizing for delivery, not for value. I was asking "are we on time and on budget?" when I should have been asking "should we be building this at all?"

**The hardest thing to unlearn**

In project management, the scope is given to you. Your job is execution. In product management, defining the scope *is* the job — and that shift is harder than it sounds.

The first time I owned a full product roadmap, I kept waiting for someone to hand me a brief. When they didn't, I had to build my own conviction about what mattered and why. That required talking to customers in a way I never had before — not to gather requirements, but to understand problems.

**What carried over**

Stakeholder management. Cross-functional coordination. Executive communication. Risk thinking. All of it transferred, and it gave me a structural advantage over PMs who came straight from design or engineering.

The hybrid role at TeamViewer — where I act as both PM and PO — maps almost perfectly to that background. I can run a sprint, manage a backlog, write a sharp user story, and then walk into a steering committee and tell the same story in business terms.

**The advice I'd give**

If you're making this transition: don't shed your project management skills, reframe them. And start talking to customers immediately. Not in six months. Now.

The best PMs I've worked with aren't the ones who knew the most frameworks. They're the ones who understood people.`,
  },
  {
    title: "Building Strategic Partnerships That Actually Deliver Value",
    excerpt: "Leading integrations with Lansweeper and Malwarebytes gave me a front-row seat to how great partnerships are forged — and how most fail before they start.",
    date: "November 2024",
    readTime: "8 min",
    category: "Partnerships",
    tags: ["Partnerships", "B2B", "Integration"],
    emoji: "🤝",
    content: `I've led two major technology partnerships at TeamViewer — with Lansweeper for IT Asset Discovery, and with Malwarebytes for Endpoint Protection. Both were different in nature, but both taught me the same fundamental lesson: most partnerships fail because they optimize for the press release, not the customer.

**Start with the customer job, not the product fit**

Before any commercial conversation, I spent time mapping what TeamViewer customers were actually trying to do. They weren't just managing remote connections — they were trying to maintain IT hygiene across distributed device fleets. That job required visibility (Lansweeper) and protection (Malwarebytes). The integrations weren't arbitrary; they were job-shaped.

**Technical fit is table stakes**

Once the strategic logic is clear, you move to integration design. This is where a lot of PM work happens that never gets talked about: API contracts, authentication flows, licensing models that work across two billing systems, support ownership boundaries. Getting this wrong creates customer confusion and internal finger-pointing.

**The pricing model is the partnership**

How you price a bundled integration signals everything about the relationship. Is the partner a premium add-on? A free value-add? A replacement for something in the base? Each answer carries different GTM implications and different incentives for the partner's sales team.

With Malwarebytes, we had to find a model that felt premium to customers, was easy for TeamViewer sales to position, and still gave Malwarebytes meaningful revenue participation. That negotiation took months — and it should have.

**What I've learned**

The best partnerships feel invisible to the customer. They just work. Getting to that point requires far more alignment on pricing, support, and GTM than most partner teams expect.`,
  },
  {
    title: "RMM Products in 2025: What Every PM Should Know",
    excerpt: "Remote Monitoring & Management is a growing but misunderstood space. Here's my breakdown of the landscape, the key players, and where the opportunity lies.",
    date: "September 2024",
    readTime: "10 min",
    category: "Industry",
    tags: ["RMM", "Industry", "Market"],
    emoji: "📡",
    content: `Remote Monitoring & Management — RMM — has been a staple of the MSP (Managed Service Provider) world for over a decade. But with the shift toward hybrid work, distributed IT, and enterprise self-service IT operations, the category is evolving fast.

**What RMM actually is**

At its core, RMM software lets IT teams monitor device health, manage software and patches, run scripts remotely, and respond to alerts — all without being physically present at a device. What used to be an MSP-specific tool is increasingly used by internal IT teams at mid-market and enterprise companies.

**The key dimensions of the market**

The RMM space breaks down along a few axes:

*MSP-focused vs. enterprise IT:* Products like NinjaRMM and Datto are built for MSPs managing many clients. TeamViewer's Remote Management is increasingly targeting internal IT at enterprises.

*Monitoring depth vs. breadth:* Some tools go deep on network monitoring, others on endpoint management, others on patch compliance. The trend is toward convergence — and that's where Asset Discovery integrations like Lansweeper matter.

*Security integration:* The line between RMM and endpoint security is blurring. Bundling antivirus, vulnerability scanning, and patch management is now table stakes.

**Where the opportunity lies**

For product managers in this space, the biggest white space is around IT visibility and automation. IT teams have too many alerts and too little context. The products that win will be the ones that can surface signal from noise — and increasingly, that means AI-assisted triage and remediation workflows.

Pricing is also shifting: from device-based to outcome-based models. Expect to see more RMM vendors experimenting with consumption pricing and success-based tiers over the next 2-3 years.`,
  },
];

export default function Blog() {
  const ref = useReveal();
  const [activePost, setActivePost] = useState<typeof posts[0] | null>(null);

  return (
    <section id="blog" style={{ padding: "120px 32px", background: "var(--bg-secondary)" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span className="section-divider" />
              <span className="section-tag">Blog</span>
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Thoughts on product,<br /><em style={{ color: "var(--accent)" }}>strategy & growth</em>
            </h2>
          </div>
        </div>

        {/* Featured */}
        <div className="reveal" style={{ marginBottom: 24 }}>
          <div
            onClick={() => setActivePost(posts[0])}
            className="card blog-featured" style={{ borderRadius: 16, padding: 40, cursor: "pointer", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}
          >
            <div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
                <span className="badge">{posts[0].category}</span>
                <span style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
                  <Calendar size={11} />{posts[0].date}
                </span>
                <span style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
                  <Clock size={11} />{posts[0].readTime} read
                </span>
              </div>
              <h3 className="font-display" style={{ fontSize: 26, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{posts[0].title}</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>{posts[0].excerpt}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--accent)", fontSize: 14, fontWeight: 600 }}>
                Read article <ArrowUpRight size={14} />
              </span>
            </div>
            <div className="blog-emoji" style={{ fontSize: 64, opacity: 0.25 }}>{posts[0].emoji}</div>
          </div>
        </div>

        {/* Grid */}
        <div className="reveal blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {posts.slice(1).map((p, i) => (
            <div key={i} className="card" onClick={() => setActivePost(p)} style={{ borderRadius: 16, padding: 26, cursor: "pointer" }}>
              <div style={{ fontSize: 28, marginBottom: 14, opacity: 0.6 }}>{p.emoji}</div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
                <span className="badge" style={{ fontSize: 10, padding: "2px 8px" }}>{p.category}</span>
                <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{p.readTime} read</span>
              </div>
              <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, lineHeight: 1.45 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 18 }}>{p.excerpt}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-soft)", paddingTop: 14 }}>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{p.date}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--accent)", fontSize: 13, fontWeight: 600 }}>
                  Read <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activePost && (
        <div
          onClick={() => setActivePost(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(4px)" }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, width: "100%", maxWidth: 700, maxHeight: "85vh", overflowY: "auto", position: "relative", boxShadow: "var(--shadow-lg)" }}
          >
            {/* Close */}
            <button
              onClick={() => setActivePost(null)}
              style={{ position: "sticky", top: 16, float: "right", margin: "16px 16px 0 0", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)", zIndex: 10 }}
            >
              <X size={15} />
            </button>

            <div style={{ padding: "40px 48px 48px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
                <span className="badge">{activePost.category}</span>
                <span style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
                  <Calendar size={11} />{activePost.date}
                </span>
                <span style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
                  <Clock size={11} />{activePost.readTime} read
                </span>
              </div>
              <h2 className="font-display" style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.25, marginBottom: 24, letterSpacing: "-0.02em" }}>
                {activePost.title}
              </h2>
              <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                {activePost.content.split("\n\n").map((para, i) => {
                  if (para.startsWith("**") && para.endsWith("**")) {
                    return <h3 key={i} style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 12px", fontFamily: "'Playfair Display', serif" }}>{para.replace(/\*\*/g, "")}</h3>;
                  }
                  const rendered = para.replace(/\*\*(.*?)\*\*/g, (_, t) => `<strong style="color:var(--text-primary);font-weight:600">${t}</strong>`);
                  const isItalicLine = para.startsWith("*") && para.endsWith("*");
                  if (isItalicLine) {
                    return <p key={i} style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 500, margin: "12px 0" }}>{para.replace(/\*/g, "")}</p>;
                  }
                  return <p key={i} style={{ marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: rendered }} />;
                })}
              </div>
              <div style={{ marginTop: 36, paddingTop: 24, borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: 8 }}>
                {activePost.tags.map(t => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
