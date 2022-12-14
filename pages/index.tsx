import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'
import {Tab} from '@headlessui/react';
import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'
import Product from '../components/Product'
import Cart from '../components/Cart'
import Footer from "../components/Footer";

interface Props {
  categories: Category[];
  products: Product[];
}

const Home= ({categories, products}: Props) => {
  const showProducts = (category: number) => {
    // filter all products by category
    return products.filter((product) => product.category._ref === categories[category]._id).map((product) => (
      <Product product={product} key={product._id} />
    ))
  }
  return (
    <>
      <Head>
        <title>The Candle History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Cart/>
      <main className="relative  bg-gradient-to-b from-[#E7ECEE] to-white">
        <Landing/>
      </main>
      <section className="relative z-30  min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Candles
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home

// Backend 

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories()
  const products = await fetchProducts()
  return {
    props: {
      categories,
      products
    },
  }
}