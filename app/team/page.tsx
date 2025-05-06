import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Phone } from 'lucide-react'

export const metadata = {
  title: "Team | GUARDIANS - Un guardiano sempre al tuo polso",
  description: "Conosci il team di professionisti dietro GUARDIANS",
}

const teamMembers = [
  {
    name: "Merisi Martina",
    role: "Amministratore Delegato (CEO)",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Fondatrice e visionaria di GUARDIANS, Martina ha oltre 10 anni di esperienza nel settore tecnologico e una passione per la sicurezza personale. Ha guidato lo sviluppo del concetto GUARDIANS fin dall'inizio.",
    linkedin: "#",
    email: "martina@guardians.it",
  },
  {
    name: "Giulio Grossi",
    role: "Direttore Finanziario (CFO)",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Con un background in finanza e startup tecnologiche, Giulio gestisce la strategia finanziaria di GUARDIANS, assicurando una crescita sostenibile e l'ottimizzazione delle risorse aziendali.",
    linkedin: "#",
    email: "giulio@guardians.it",
  },
  {
    name: "Sara Meco",
    role: "Responsabile Marketing / Video Maker (CMO)",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sara combina creatività e strategia per comunicare efficacemente il valore di GUARDIANS. La sua esperienza in video making e digital marketing ha contribuito a costruire l'identità del brand.",
    linkedin: "#",
    email: "sara@guardians.it",
  },
  {
    name: "Francesco Caratù",
    role: "Responsabile Risorse Umane / Marketing (CHRO)",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Francesco si occupa di costruire e mantenere una cultura aziendale positiva, oltre a supportare le iniziative di marketing. La sua doppia competenza è fondamentale per la crescita del team.",
    linkedin: "#",
    email: "francesco@guardians.it",
  },
  {
    name: "Michael Tranchino",
    role: "Responsabile IT / Direttore operativo",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael supervisiona lo sviluppo tecnologico e le operazioni quotidiane di GUARDIANS. La sua esperienza in IT e gestione operativa garantisce che i nostri prodotti siano all'avanguardia.",
    linkedin: "#",
    email: "michael@guardians.it",
  },
  {
    name: "Dario Battistini",
    role: "Ingegnere IT / Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dario unisce competenze tecniche e design thinking per creare prodotti che siano tanto belli quanto funzionali. È responsabile dell'aspetto estetico e dell'usabilità dei bracciali GUARDIANS.",
    linkedin: "#",
    email: "dario@guardians.it",
  },
]

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Il Nostro Team</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professionisti appassionati che lavorano insieme per rivoluzionare la sicurezza personale attraverso
            accessori innovativi.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-gray-100">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label={`LinkedIn di ${member.name}`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label={`Email di ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">La Nostra Cultura Aziendale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96">
              <Image
                src="/foto_insieme.png?height=400&width=600"
                alt="Cultura aziendale GUARDIANS"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900">Innovazione e Collaborazione</h3>
              <p className="text-gray-700">
                In GUARDIANS, crediamo che le migliori idee nascano dalla collaborazione. Il nostro ambiente di lavoro
                promuove la creatività, l'innovazione e il rispetto reciproco. Ogni membro del team è incoraggiato a
                contribuire con le proprie idee e competenze uniche.
              </p>
              <p className="text-gray-700">
                Lavoriamo con passione per la nostra missione di rendere il mondo più sicuro attraverso la tecnologia
                indossabile, mantenendo sempre al centro l'esperienza dell'utente e la qualità del prodotto.
              </p>
              <p className="text-gray-700">
                La nostra cultura aziendale si basa su questi principi fondamentali:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Innovazione continua</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Collaborazione e lavoro di squadra</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Attenzione ai dettagli</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Responsabilità sociale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Unisciti al Team GUARDIANS</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Siamo sempre alla ricerca di talenti appassionati che vogliono contribuire alla nostra missione di
            rivoluzionare la sicurezza personale.
          </p>
          <a
            href="/contatti"
            className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-800 transition-colors"
          >
            Scopri le Opportunità di Carriera
          </a>
        </div>
      </section>
    </main>
  )
}

