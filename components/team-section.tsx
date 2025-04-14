import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Merisi Martina",
    role: "Amministratore Delegato (CEO)",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Giulio Grossi",
    role: "Direttore Finanziario (CFO)",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sara Meco",
    role: "Responsabile Marketing / Video Maker (CMO)",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Francesco Caratù",
    role: "Responsabile Risorse Umane / Marketing (CHRO)",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Tranchino",
    role: "Responsabile IT / Direttore operativo",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dario Battistini",
    role: "Ingegnere IT / Designer",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Il Nostro Team</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Professionisti appassionati che lavorano insieme per rivoluzionare la sicurezza personale attraverso accessori
          innovativi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-100">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-3">
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
