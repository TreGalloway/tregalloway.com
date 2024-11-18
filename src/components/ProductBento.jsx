import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconTerminal2,
  IconChartDots3,
  IconChartDots,
  IconNumber1,
} from '@tabler/icons-react'

export function ProductBentoBox() {
  return (
    <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full   flex-1 rounded-xl border  border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black"></div>
)
const items = [
  {
    title: 'PureCraft',
    description: 'Helping you focus on what matters most, crafting.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Planni',
    description:
      'Quickly plan your new project with ease and simplicity right from your terminal.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <IconTerminal2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: '1Feed',
    description: 'Get all your feeds in one place, and enjoy them in peace.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <IconNumber1 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Tconnect',
    description:
      'Helping recruiters and job seekers connect in a more meaningful way.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <IconChartDots3 className="h-4 w-4 text-neutral-500" />,
  },
]
