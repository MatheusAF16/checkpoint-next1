"use client"
import ConteudoHome from '@/components/ConteudoHome'
import { useEffect, useState } from "react"
import Link from 'next/link';
import { FaEdit, FaTrash } from 'react-icons/fa';


export default function Home() {
  return (
    <main className="porto-seguro-home">
      <img className="porto-seguro-logo" src='/andando-bike.jpg' width={600} height={400} alt='Bike' />
      <h1 className="porto-seguro-title">Seguro Bike da Porto Seguro</h1>
      <ConteudoHome />
    </main>
  );
}
