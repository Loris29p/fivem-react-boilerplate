import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

export default function Home() {
    return (
        <div className='flex bg-[#1d1e1fcc] drop-shadow-3xl h-full rounded-md flex-col gap-20 bg-chiraq2 bg-contain bg-center'>
            <div className='flex justify-center'>
                <h1 className='text-7xl font-Irongate text-white tracking-wider'>Stories Of Chicago</h1>
            </div>
            <div className='flex place-content-center text-center'>
                <p className='font-Zen_Dots text-white text-xl tracking-wider leading-8'>Second City est un serveur Serious RP dans un premier temps Free Access, basé à Chicago.<br /><br />
                    Il est actuellement sur une MAP Los Santos avec des mappings immersif de Chicago, mais dans un futur proche il passera sur une MAP entièrement semblable à Chicago dans les moindres détails, à l'instar de Liberty-City et New York.<br /><br />

                    Pourquoi Second City ? Car tout peut ce passer dans une seconde, surtout à Chicago ou Chiraq la ville du crime, dans les années 2010s.<br /><br />
                    Et ça tombe bien car le Lore de SC se déroule en l'an 2012.<br /><br />

                    Vous l'aurez donc compris, chaque seconde compte.
                </p>
            </div>
        </div>
    )
}