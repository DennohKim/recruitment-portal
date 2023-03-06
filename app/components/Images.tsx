


import React from 'react';
import logoLaravel from "../../images/logos/laravel.svg";
import logoMirage from "../../images/logos/mirage.svg";
import logoStatamic from "../../images/logos/statamic.svg";
import logoStaticKit from "../../images/logos/statickit.svg";
import logoTransistor from "../../images/logos/transistor.svg";
import logoTuple from "../../images/logos/tuple.svg";
import Image from "next/image";

export default function Images() {
  return (
    <div className="">
      <p className="font-display text-base text-center text-slate-900">
        Trusted by these six companies so far
      </p>
      <ul className="mt-8 flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12">
        <li>
          <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
            <li className="flex">
              <Image
                src={logoTransistor}
                alt="Transistor"
                layout="fixed"
                unoptimized
              />
            </li>
            <li className="flex">
              <Image src={logoTuple} alt="Tuple" layout="fixed" unoptimized />
            </li>
            <li className="flex">
              <Image
                src={logoStaticKit}
                alt="StaticKit"
                layout="fixed"
                unoptimized
              />
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
            <li className="flex">
              <Image src={logoMirage} alt="Mirage" layout="fixed" unoptimized />
            </li>
            <li className="flex">
              <Image
                src={logoLaravel}
                alt="Laravel"
                layout="fixed"
                unoptimized
              />
            </li>
            <li className="flex">
              <Image
                src={logoStatamic}
                alt="Statamic"
                layout="fixed"
                unoptimized
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
