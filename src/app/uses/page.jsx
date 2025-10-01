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
          <Tool title="M4 Mac Mini">
            My daily driver for all computer needs. Compact, powerful, and perfect for my workflow.
          </Tool>
          <Tool title="Custom PC - Ryzen 3600X, GTX 3060, 32GB RAM">
            My custom build with a Ryzen 3600X processor, GTX 3060 graphics card, and 32GB of RAM.
            I use this for networking work and PC gaming.
          </Tool>
          <Tool title="Custom Standing Desk">
            A custom standing desk setup with a countertop surface and TOPSKY Dual Motor base.
            Perfect for switching between sitting and standing throughout the day.
          </Tool>
          <Tool title="Secretlab TITAN™ Evo">
            If I'm going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Zed">
            It's a simple code editor that I use for most of my coding needs
            with vim bindings.
          </Tool>
          <Tool title="VSCode">
            My go-to editor for AI engineering work and Jupyter notebook development.
            Great extensions and integrated terminal make it perfect for data science workflows.
          </Tool>
          <Tool title="Polypane">
            I use this for testing responsive design. It's a great tool for web
            development, you can see how your site looks on different
            devices.Has a lot of features that I haven't even touched yet.
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
            It's the best spotlight alternative. So many features to assist
            anyones workflow.
          </Tool>
          <Tool title="Apple Notes">
            My preferred app for quick capture and note-taking. Simple, syncs across
            all my devices, and always accessible when I need to jot something down quickly.
          </Tool>
          <Tool title="Sofa">
            I use this for tracking my TV shows and movies. It's a great way to
            keep track of what I'm watching, reading, and adding things I want
            to get into.
          </Tool>
          <Tool title="Things 3">Simple and clean personal task manager.</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
