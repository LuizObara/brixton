import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Inbox } from 'lucide-react';

export default function ContactInfo () {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <div className="flex justify-left text-white items-center">
                <h4 className='mr-3 text-lg font-semibold'>Redes Sociais:</h4>
                <Linkedin className='mx-2'/>
                <Facebook className='mx-2'/>
                <Inbox className='mx-2'/>
            </div>

            <div className="flex justify-left text-white items-center">
                <h4 className='mr-3 text-lg font-semibold'>Endereço:</h4>

                <div className="w-full text-justify">
                    <h5>TRAVESSA MOACIR TUDELA FERNANDES, 297, IPANEMA DO MEIO, SOROCABA, SP CEP 18.035-257</h5>
                </div>
            </div>
            
            <div className="flex justify-left text-white items-center">
                <h4 className='mr-3 text-lg font-semibold'>Contato:</h4>
                <h5>(015) 98153-7823 </h5>
            </div>
        </div>
    )
}