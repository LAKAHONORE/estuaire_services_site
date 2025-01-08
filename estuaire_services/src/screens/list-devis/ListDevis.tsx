import Navbar from '../components/navbar/Navbar'
import OldHero from '../components/hero/OldHero'
import Footer from '../components/footer/Footer'
import ListDevisComponent from '../components/list-devis/ListDevisComponent'

export default function ListDevis() {
  return (
    <>
      <Navbar />
      <OldHero title="Demandes de devis"/>
      <ListDevisComponent />
      <Footer />
    </>
  )
}