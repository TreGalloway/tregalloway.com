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
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
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
          <Tool title="VSCode">
            I don’t feel like spending time I could be coding configuring NeoVim
            instead.
          </Tool>
          <Tool title="Warp">
            Used to use Iterm2 but found Warp to be better for my terminal
            needs.
          </Tool>
          <Tool title="Docker">
            Recently started to learn and use. Will update when I figure it out
            more.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">Learning more about UX design.</Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            It’s the best spotlight alternative. So many features to assist
            anyones workflow.
          </Tool>
          <Tool title="Mem">
            I’ve used most note taking apps out their and landed on mem ai. I
            like quickly jotting notes, its search, and ai implementation.
          </Tool>
          <Tool title="Readwise/Reader">
            Readwise takes highlights from kindle books, its Reader app (super
            cool read later/feed app), and a bunch more sources together in a
            nice organized way.
          </Tool>
          <Tool title="Notion">
            A good tool for many work related tasks. Currently using for coding
            projects.
          </Tool>
          <Tool title="Things 3">Simple and clean personal task manager.</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
