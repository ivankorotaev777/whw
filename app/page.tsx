"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Car,
  Check,
  ChevronRight,
  DollarSign,
  MessageSquare,
  Shield,
  Sparkles,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                White Hat Way
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#problem"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                The Problem
              </Link>
              <Link
                href="#benefits"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Benefits
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </div>
            <Button size="sm" className="gap-2">
              Start Free Pilot
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_100%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,oklch(0.75_0.16_65_/_0.15)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.35_0.06_260_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.35_0.06_260_/_0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm border-accent/30 bg-accent/10 text-accent-foreground animate-fade-up"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2 text-accent" />
              2024 was the worst year on record for BHPH charge-offs
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up animation-delay-100">
              Catch the Warning Signs{" "}
              <span className="bg-gradient-to-r from-accent via-chart-3 to-accent bg-clip-text text-transparent">
                Before They Become Charge-Offs
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up animation-delay-200">
              The BHPH Early Warning Agent contacts your customers for you — and
              flags the ones who are about to slip through the cracks,{" "}
              <span className="text-foreground font-medium">
                before the payment stops
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up animation-delay-300">
              <Button
                size="lg"
                className="gap-2 px-8 py-6 text-base font-semibold animate-pulse-glow"
              >
                Start Your Free 30-Day Pilot
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 px-8 py-6 text-base"
              >
                Watch Demo
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <p className="text-sm text-muted-foreground animate-fade-up animation-delay-400">
              No contract. No credit card required.{" "}
              <span className="text-foreground">
                Works with iDMS, DealerCenter, Wayne Reaves, and more.
              </span>
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up animation-delay-500">
            {[
              { value: "~21", label: "Avg Monthly Charge-offs", icon: TrendingDown },
              { value: "$16K", label: "Avg Receivable / Account", icon: DollarSign },
              { value: "$336K+", label: "Monthly $ at Risk", icon: AlertTriangle },
              { value: "Worst", label: "2024 Industry Trend", icon: TrendingDown },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <stat.icon className="h-5 w-5 mx-auto mb-2 text-accent" />
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              The Problem
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              Charge-offs don&apos;t start with a missed payment
            </h2>
          </div>

          {/* Visual Timeline - How Accounts Go Bad */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative">
              
              <div className="grid md:grid-cols-5 gap-4 md:gap-2">
                {[
                  { 
                    icon: Car, 
                    label: "Week 1", 
                    text: "Engine light comes on",
                    color: "bg-chart-5/20 border-chart-5/40",
                    iconColor: "text-chart-5"
                  },
                  { 
                    icon: Users, 
                    label: "Week 2", 
                    text: "Customer loses job",
                    color: "bg-chart-3/20 border-chart-3/40",
                    iconColor: "text-chart-3"
                  },
                  { 
                    icon: MessageSquare, 
                    label: "Week 3", 
                    text: "Too embarrassed to call",
                    color: "bg-accent/20 border-accent/40",
                    iconColor: "text-accent"
                  },
                  { 
                    icon: AlertTriangle, 
                    label: "Week 4", 
                    text: "Payment missed",
                    color: "bg-destructive/10 border-destructive/30",
                    iconColor: "text-destructive"
                  },
                  { 
                    icon: TrendingDown, 
                    label: "Week 6+", 
                    text: "Charge-off",
                    color: "bg-destructive/20 border-destructive/50",
                    iconColor: "text-destructive"
                  },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative">
                    <div className={`w-20 h-20 rounded-2xl ${step.color} border-2 flex items-center justify-center mb-3 relative z-10 bg-background`}>
                      <step.icon className={`h-9 w-9 ${step.iconColor}`} />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{step.label}</span>
                    <span className="text-sm font-medium">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Arrow pointing to the gap */}
            <div className="flex justify-center mt-8">
              <div className="relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-accent" />
                <div className="bg-accent/10 border-2 border-accent/30 rounded-xl px-6 py-3 mt-2">
                  <p className="text-sm font-semibold text-accent">
                    You find out here → but the problem started 3 weeks ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                value: "1-2",
                unit: "collectors",
                subtext: "managing 100-400 accounts",
                color: "from-chart-2 to-primary"
              },
              {
                icon: AlertTriangle,
                value: "0",
                unit: "early warnings",
                subtext: "until payment is missed",
                color: "from-destructive to-chart-3"
              },
              {
                icon: DollarSign,
                value: "$16K",
                unit: "per account",
                subtext: "average receivable at risk",
                color: "from-accent to-chart-3"
              },
              {
                icon: TrendingDown,
                value: "21",
                unit: "charge-offs",
                subtext: "average per month",
                color: "from-destructive to-destructive/60"
              },
            ].map((stat, i) => (
              <Card key={i} className="relative overflow-hidden border-2 group hover:border-accent/50 transition-all">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="p-6 text-center relative">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{stat.value}</span>
                    <span className="text-lg text-muted-foreground">{stat.unit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{stat.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Line - Visual */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/5 rounded-2xl border border-primary/20">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <p className="text-lg text-foreground text-left">
                Your team isn&apos;t failing. <span className="text-accent font-bold">They&apos;re outnumbered.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              Benefits
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              What changes when you have Early Warning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop reacting. Start preventing. Here&apos;s what dealers
              experience in their first 30 days.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
              <CardContent className="p-8 relative">
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Bell className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Catch accounts about to fail — while you can still save them
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Right now, your first signal is a missed payment. By then, the
                  customer has already made up their mind. Early Warning checks
                  in regularly — not collection calls, just touchpoints — and
                  listens for car trouble, job changes, financial stress.
                </p>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm text-foreground">
                  <span className="font-medium">&quot;Customer mentioned the check
                  engine light has been on for two weeks. Payment due Friday.
                  Recommend proactive outreach.&quot;</span>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-chart-2/10 rounded-full blur-3xl group-hover:bg-chart-2/20 transition-colors" />
              <CardContent className="p-8 relative">
                <div className="h-14 w-14 rounded-2xl bg-chart-2/10 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Your collector is 10x more effective without working 10x
                  harder
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A single collector managing 150–300 accounts cannot stay on
                  top of every customer every week. It&apos;s not humanly
                  possible. Early Warning doesn&apos;t replace your collector —
                  it makes them smarter.
                </p>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm text-foreground">
                  Instead of cold-calling through a list,{" "}
                  <span className="font-medium">
                    your collector starts every day with a prioritized alert
                    digest
                  </span>
                  : accounts that need attention today, ranked by urgency.
                </div>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-chart-3/10 rounded-full blur-3xl group-hover:bg-chart-3/20 transition-colors" />
              <CardContent className="p-8 relative">
                <div className="h-14 w-14 rounded-2xl bg-chart-3/10 flex items-center justify-center mb-6">
                  <Car className="h-7 w-7 text-chart-3" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Stop losing accounts to problems you never knew existed
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mechanical issues are one of the leading causes of charge-offs
                  in BHPH. A car breaks down, the customer gets frustrated,
                  payments stop. Dealers who find out after the payment stops
                  have already lost the relationship.
                </p>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm text-foreground">
                  <span className="font-medium">
                    Turn a potential charge-off into a loyalty moment
                  </span>
                  . Catch the mechanical complaint two weeks before the due date
                  and bring the car in.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              What dealers are saying after their first 60 days
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-card border-2">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-4 w-4 text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  &quot;I&apos;ve been doing this for 14 years and I&apos;ve never had
                  visibility into my portfolio like this. The first week of the
                  pilot, the system flagged a customer who mentioned she&apos;d lost
                  her job. I called her same day, worked out a hardship plan,
                  and she&apos;s been current ever since.{" "}
                  <span className="font-semibold text-accent">
                    That account would have been a charge-off by month-end.
                  </span>
                  &quot;
                </blockquote>
                <Separator className="my-4" />
                <div>
                  <div className="font-semibold">Marcus T.</div>
                  <div className="text-sm text-muted-foreground">
                    BHPH dealer, Ohio • 220 active accounts
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-card border-2">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-4 w-4 text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  &quot;My collector was skeptical at first — she thought it was
                  going to replace her. Now she tells me it&apos;s{" "}
                  <span className="font-semibold text-accent">
                    the best thing we&apos;ve ever put in the business
                  </span>
                  . She goes into every morning knowing which accounts need her
                  attention. She&apos;s not guessing anymore. Her recovery rate this
                  quarter is the best it&apos;s ever been.&quot;
                </blockquote>
                <Separator className="my-4" />
                <div>
                  <div className="font-semibold">Donna R.</div>
                  <div className="text-sm text-muted-foreground">
                    BHPH dealer, Georgia • 310 active accounts
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-card border-2">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-4 w-4 text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  &quot;We tried the pilot with 20 accounts just to see. Within the
                  first two weeks we had three alerts — one was a transmission
                  issue, one was a job change, one was a guy who mentioned he
                  was thinking about letting the car go back. We saved all
                  three.{" "}
                  <span className="font-semibold text-accent">
                    That&apos;s $48,000 in receivables we would have lost. For $499 a
                    month.
                  </span>
                  &quot;
                </blockquote>
                <Separator className="my-4" />
                <div>
                  <div className="font-semibold">Tony M.</div>
                  <div className="text-sm text-muted-foreground">
                    BHPH dealer, Texas • 175 active accounts
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              The BHPH Early Warning Agent
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here&apos;s exactly what you&apos;re getting — an AI-powered agent
              purpose-built for Buy Here, Pay Here dealers.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Connect your DMS",
                  desc: "Early Warning integrates with iDMS, DealerCenter, Wayne Reaves, DealerPack, AutoManager, and others via API or simple file import. Setup takes less than a day. No IT department required.",
                  icon: Zap,
                },
                {
                  step: "2",
                  title: "The agent contacts your customers",
                  desc: "On a configurable cadence — weekly or bi-weekly — the system sends a friendly, brief, branded text message to each active account. These are not collection messages. They are lightweight check-ins that give the customer an easy opening to share what's going on.",
                  icon: MessageSquare,
                },
                {
                  step: "3",
                  title: "The AI listens for risk signals",
                  desc: "Every response is analyzed for indicators of account risk: car trouble, job loss, financial hardship, ghosting risk, relocation, or dissatisfaction. The system is trained specifically on BHPH account failure patterns.",
                  icon: AlertTriangle,
                },
                {
                  step: "4",
                  title: "Your team gets a daily alert digest",
                  desc: "Each morning, your collector or manager sees a prioritized list of accounts that triggered a warning signal overnight, with context and recommended actions. No wading through a full portfolio list. Just the accounts that need you today.",
                  icon: Bell,
                },
                {
                  step: "5",
                  title: "Your team makes the call",
                  desc: "Early Warning does not negotiate, does not make demands, and does not attempt to resolve the account on its own. It surfaces the signal and hands it to your human team while the relationship is still intact. That's the White Hat Way.",
                  icon: Users,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, text: "TCPA-compliant messaging" },
              { icon: MessageSquare, text: "Two-way SMS or voice AI" },
              { icon: Bell, text: "Daily alert digest" },
              { icon: Zap, text: "Payment reminder layer" },
              { icon: TrendingDown, text: "Dashboard & reporting" },
              { icon: Check, text: "White-glove onboarding" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <item.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Simple, flat monthly pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At $16,000 average receivables per account,{" "}
              <span className="text-foreground font-medium">
                saving one account a month more than covers the cost of any tier
              </span>
              . Most dealers in our pilot saved two to four accounts in their
              first 30 days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <Card className="relative border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Up to 150 accounts
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Break-even: Save 1 account every 2 months
                </p>
                <Button variant="outline" className="w-full mb-6">
                  Get Started
                </Button>
                <ul className="space-y-3 text-sm">
                  {[
                    "Weekly or bi-weekly check-ins",
                    "Payment reminders",
                    "Daily alert digest",
                    "DMS integration",
                    "TCPA compliance tools",
                    "Dashboard & reporting",
                    "Standard onboarding",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Growth - Featured */}
            <Card className="relative border-2 border-accent shadow-lg shadow-accent/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-8 pt-10">
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  150–300 accounts
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Break-even: Save 1 account/month
                </p>
                <Button className="w-full mb-6">Get Started</Button>
                <ul className="space-y-3 text-sm">
                  {[
                    "Weekly or bi-weekly check-ins",
                    "Payment reminders",
                    "Daily alert digest",
                    "DMS integration",
                    "TCPA compliance tools",
                    "Dashboard & reporting",
                    "Priority onboarding",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card className="relative border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Portfolio</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  300–500 accounts
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$799</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Break-even: Save 1–2 accounts/month
                </p>
                <Button variant="outline" className="w-full mb-6">
                  Get Started
                </Button>
                <ul className="space-y-3 text-sm">
                  {[
                    "Weekly or bi-weekly check-ins",
                    "Payment reminders",
                    "Daily alert digest",
                    "DMS integration",
                    "TCPA compliance tools",
                    "Dashboard & reporting",
                    "White-glove onboarding",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Founding Member Offer */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-chart-3/5 border-2 border-accent/30">
              <CardContent className="p-8 text-center">
                <Badge className="bg-accent text-accent-foreground mb-4">
                  <Sparkles className="h-3.5 w-3.5 mr-1" />
                  Founding Member Offer — First 20 Dealers Only
                </Badge>
                <h3 className="text-2xl font-bold mb-4">
                  Lock in{" "}
                  <span className="text-accent">$199/month</span> — regardless
                  of tier
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  The first 20 dealers to join get this rate locked in for as
                  long as they stay active. You&apos;ll also get white-glove
                  onboarding, direct access to the product team, and your story
                  featured when we officially launch.
                </p>
                <Button size="lg" className="gap-2 animate-pulse-glow">
                  Claim Your Founding Member Spot
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Month-to-month. No long-term contract required. Cancel
                  anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.75_0.16_65_/_0.1)_0%,transparent_70%)]" />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Every charge-off that could have been saved started with a signal
            nobody caught in time.
          </h2>
          <p className="text-xl text-accent font-semibold mb-8">
            This tool catches those signals.
          </p>
          <Button
            size="lg"
            className="gap-2 px-10 py-6 text-lg animate-pulse-glow"
          >
            Start Your Free 30-Day Pilot
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">White Hat Way</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              BHPH Early Warning Agent — Technology that makes human
              relationships stronger.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
