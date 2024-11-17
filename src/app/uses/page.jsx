import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="Here are some of the tools, gadgets, and software I use on a daily basis and think you might enjoy too."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air, M1 , 8GB RAM (2021)">
            This is the second laptop ever getting and glad I did. I do most
            things on here instead of my PC, which I used just for gaming now.
          </Tool>
          <Tool title="Secretlab TITAN™ Evo">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Zed">
            It’s a simple code editor that I use for most of my coding needs
            with vim bindings.
          </Tool>
          <Tool title="Polypane">
            I use this for testing responsive design. It’s a great tool for web
            development, you can see how your site looks on different
            devices.Has a lot of features that I haven’t even touched yet.
          </Tool>
          <Tool title="Wezterm">
            Used to use Iterm2 but found Wezterm to be better for my terminal
            needs.
          </Tool>
          <Tool title="Fly.io">
            I use this for hosting my personal projects. It’s a great service
            for quickly deploying apps.
          </Tool>
          <Tool title="Docker">
            Recently started to learn and use. Will update when I figure it out
            more.
          </Tool>
          <Tool title="Go-Blueprint">
            I use this for generating boilerplate code for my Go projects. Made
            by Melkey, check him out on Twitch and YouTube.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            It’s the best spotlight alternative. So many features to assist
            anyones workflow.
          </Tool>
          <Tool title="Raycast Notes">
            I use this for quick notes and todos. It’s a great way to keep focus
            on the task at hand while jotting down quick notes.
          </Tool>
          <Tool title="Raindrop">
            Bookmark manager that I use to save articles, videos, and other
            things I want to read later.
          </Tool>
          <Tool title="Sofa">
            I use this for tracking my TV shows and movies. It’s a great way to
            keep track of what I’m watching, reading, and adding things I want
            to get into.
          </Tool>
          <Tool title="Things 3">Simple and clean personal task manager.</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
