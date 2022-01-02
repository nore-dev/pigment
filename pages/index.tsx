import { Box } from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>hello world</p>
    </div>
  )
}

export default Home
