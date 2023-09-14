import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
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
  title: 'Tech',
  description: 'Les technologies et outils au coeur de ma créativité web.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Les technologies et outils au coeur de ma créativité web."
      intro="Je m'appuie sur un ensemble d'outils et de technologies pour concevoir des solutions web de qualité. Si vous êtes basé à la Réunion, sachez que vos projets peuvent bénéficier d'un financement grâce à Kap Numérik. Découvrez ci-dessous les ressources que j'utilise pour créer des sites et des applications qui répondent aux besoins spécifiques de mes clients."
    >
      <div className="space-y-20">
        <ToolsSection title="Station de travail">
          <Tool title="16” MacBook Pro, Intel, 16GB RAM (2019)">
            C&apos;est ma station de travail de confiance. Solide et fiable,
            elle m&apos;accompagne dans chaque projet web que je développe. Que
            ce soit pour des simulations de lancement, des tests de performance
            ou tout simplement du développement au quotidien, elle ne me fait
            jamais défaut.
          </Tool>
          <Tool title="Écran Prolite IIyama 27” Full HD">
            Un ajout essentiel à ma station de travail, cet écran me donne
            l&apos;espace nécessaire pour organiser mes fenêtres de code,
            navigateurs, et autres outils de développement. Une vraie différence
            en termes de productivité et de confort.
          </Tool>
          <Tool title="Magic Mouse d'Apple">
            Avec cette souris, je me sens comme un véritable magicien du web !
            Pointage précis, défilement fluide, et un design si élégant
            qu&apos;on pourrait le qualifier de magique.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Outils de développement">
          <Tool title="Visual Studio Code">
            Mon environnement de développement favori, un outil indispensable.
            Léger, personnalisable et extrêmement puissant, VS Code est la
            baguette magique de tout développeur web moderne.
          </Tool>
          <Tool title="Git">
            Git est un incontournable pour le contrôle de version. Il me permet
            de gérer l&apos;évolution de mes projets et de collaborer aisément
            avec d&apos;autres développeurs. Un filet de sécurité pour la
            créativité et l&apos;organisation.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Figma est mon choix pour le design d&apos;interface et la prototypage. Sa
            simplicité et sa flexibilité favorisent une collaboration fluide
            avec les clients et les équipes de design.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
