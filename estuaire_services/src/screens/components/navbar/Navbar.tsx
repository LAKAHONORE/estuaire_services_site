
import { useState } from "react";
import { List, XCircle, XLg } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { httpDeviService } from "../../../http/devi";

export default function Navbar() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [adresse, setAdresse] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(false);

  const showModal = () => {
    setIsVisible(true); // Afficher la div
    setTimeout(() => {
        setIsVisible(false); // Cacher la div après 3 secondes
    }, 3000);
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDisabledBtn(true) // Désactivation du bouton
    setTimeout(() => {
      setDisabledBtn(false);
    }, 3000);

      const formData = {
        name,
        email,
        tel,
        adresse,
        title,
        description
      }

    try{
      const response = await httpDeviService.create(formData);

      showModal()
      console.log(response)
    }catch(e){ 
      console.log(e)
      alert("Veuillez renseigner tous les champs!")
    }

  };

  const [mobileNav, setMobileNav] = useState(false);
  const [devisModal, setDevisModal] = useState(false);



  return (
    <>
      <nav
        className="flex flex-row justify-between items-center h-16 top-0 z-20 sticky w-full bg-gray-300 px-6 md:px-12 shadow-lg"
      >
        <NavLink to="/" className="flex flex-row justify-center items-center gap-2">
          <img src="/assets/logo_estuaire_service.png" alt="logo" className="w-12" />
          <span className="lugrasimo-font font-bold">Estuaire Services</span>
        </NavLink>


        <ul className="hidden md:flex flex-row justify-center items-center gap-8">
          <li className="font-semibold text-blue transition-all">
            <NavLink to="/" >
              Accueil
            </NavLink>
          </li>

          <li className="font-semibold hover:text-blue transition-all">
            <NavLink to="/about" >
              A Propos
            </NavLink>
          </li>


          <li className="font-semibold hover:text-blue transition-all">
            <NavLink to="/services" >
              Services
            </NavLink>
          </li>

          <li className="bg-blue py-2 px-5 text-white font-semibold hover:bg-transparent hover:border-[2px] hover:text-blue border-blue transition-all rounded-md">
            <NavLink to="" onClick={() => setDevisModal(true)}>
              Obtenir un devis
            </NavLink>
          </li>
        </ul>


        <div className="md:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {
            mobileNav ? (
              <XLg className="text-xl text-blue" />
            ) : (
              <List className="text-xl text-blue" />
            )
          }
        </div>



        <div className={`md:hidden fixed top-16 bg-gray-300 left-0 h-dvh px-8 py-8 ${mobileNav ? 'w-full' : 'left-[100%] w-0 opacity-0'} animate__animated animate__slideInLeft duration-200`}>
          <ul className="md:hidden flex flex-col justify-start items-start gap-8">
            <li className="font-semibold text-blue transition-all">
              <NavLink to="/" >
                Accueil
              </NavLink>
            </li>

            <li className="font-semibold hover:text-blue transition-all">
              <NavLink to="/about" >
                A Propos
              </NavLink>
            </li>


            <li className="font-semibold hover:text-blue transition-all">
              <NavLink to="/services" >
                Services
              </NavLink>
            </li>

            <li className="bg-blue py-2 px-5 text-white font-semibold hover:bg-transparent hover:border-[2px] hover:text-blue border-blue transition-all rounded-md">
              <NavLink to="" onClick={() => setDevisModal(true)}>
                Obtenir un devis
              </NavLink>
            </li>
          </ul>
        </div>

      </nav>

      {
        devisModal && (
          <>
            <div className="fixed w-full md:w-[50%] z-50 h-dvh right-0 top-0 bg-slate-100 overflow-x-scroll px-6 md:px-12 py-6 animate__animated animate__slideInRight">
              <div className="flex flex-row justify-between items-center">
                <XCircle className="text-2xl text-blue cursor-pointer hover:animate-spin" onClick={() => setDevisModal(false)} />
                <h1 className="text-2xl font-semibold">
                  <span className="relative text-2xl font-semibold after:absolute after:left-0 after:w-full after:scale-x-75 after:origin-right after:border-b-4 after:border-blue after:bottom-0">
                    Obtenir un devis !
                  </span>
                </h1>
              </div>

              <div className="flex flex-col w-full h-8 my-20 ">
                <form onSubmit={handleClick} autoComplete="off">
                  <div className="flex flex-col md:grid grid-cols-2 gap-10">
                    <input type="text" name="nom" id="nom" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom Complet / Raison sociale"
                      className="px-3 py-3 outline-none shadow-lg placeholder:text-gray-400 rounded-md" />

                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Adresse Email"
                      className="px-3 py-3 outline-none shadow-lg placeholder:text-gray-400 rounded-md" />
                  </div>

                  <div className="flex flex-col md:grid grid-cols-2 gap-10 md:mt-8">
                    <input type="tel" name="tel" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="Numéro de téléphone"
                      className="px-3 py-3 outline-none shadow-lg placeholder:text-gray-400 mt-8 md:mt-0 rounded-md" />

                    <input type="text" name="adresse" id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} placeholder="Adresse"
                      className="px-3 py-3 outline-none shadow-lg placeholder:text-gray-400 rounded-md" />
                  </div>

                  <div className="flex flex-col my-8">
                    <input type="text" name="project_name" id="project_name" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Intitulé du projet"
                      className="px-3 py-3 outline-none shadow-lg placeholder:text-gray-400 rounded-md" />
                  </div>

                  <div className="flex flex-col my-8">
                    <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={5} className="outline-none px-3 py-2 shadow-lg rounded-md" placeholder="Description du projet">

                    </textarea>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <button type="submit" className="bg-blue px-12 md:px-40 py-3 text-white font-semibold rounded-md hover:bg-purple transition-all" onClick={()=>handleClick} disabled={disabledBtn}>
                    {disabledBtn ? 'Veuillez patienter ...' : 'Enregistrer !'}
                    </button>
                  </div>

                  {
                    isVisible && (
                      <div className="flex flex-row justify-center items-center bg-green-300 py-4 mx-12 my-6 rounded-md animate__animated animate__slideInLeft">
                        <h1 className="font-semibold">Demande enregistrée avec succès !</h1>
                      </div>
                    )
                  }
                </form>
              </div>
            </div>

            <div className="md:fixed w-[50%] text-sm z-50 h-dvh top-0 bg-black opacity-50 animate__animated animate__slideInLeft">

            </div>
          </>
        )
      }
    </>
  )
}