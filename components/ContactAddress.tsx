import Image from "next/image";

const ContactAddress = () => {

 return (
  <div className="w-full flex flex-col gap-[20px] border p-[10px]">
      <div className="text-center font-bold text-2xl">
          <h3>Mon adresse</h3>
          <h3>Complet</h3>
      </div>

      <p>
          Vous pouvez obtenir mes coordonnées ici et,
          si vous le souhaitez, vous pouvez utiliser
          les URL de mes pages sur les réseaux sociaux
          en haut de la page pour me retrouver là-bas.
      </p>

      <div className="flex flex-col gap-[20px] font-bold">
          <div className="flex flex-row gap-[10px]">
              <Image src="/assets/icons/location.svg" alt="" width={24} height={24} />
              <p>49000 Angers, France</p>
          </div>

          <div className="flex flex-row gap-[10px]">
              <Image src="/assets/icons/chat.svg" alt="" width={24} height={24} />
              <p>email@gmail.com</p>
          </div>

          <div className="flex flex-row gap-[10px]">
              <Image src="/assets/icons/phone.svg" alt="" width={24} height={24} />
              <p>+212 762 91 29 31</p>
          </div>
      </div>
  </div>
 );
};

export default ContactAddress;