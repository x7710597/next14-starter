import Image from "next/image"
// import styles from "./about.module.css"

export const metadata = {
  title: 'About Page',
  description: 'contact page description',
}

const AboutPage = () => {
  return (
    <div className="">

        <div className="">
          <h2 className="">About Agency</h2>
          <h1 className="">We create digital ideas that are bigger, bolder, braver and better.</h1>
          <p className="">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We&apos;re world&apos;s Our Special
          Team best consulting & finance solution provider. Wide range of web
          and software development services.
          </p>
          <div className="">
            <div className="">
              <h1>10 K+</h1>
              <p>Yes of experience</p>
            </div>
            <div className="">
              <h1>234 K+</h1>
              <p>People reached</p>
            </div>
            <div className="">
              <h1>5 K+</h1>
              <p>Services and plugins</p>
            </div>
          </div>
        </div>
        <div className="">
          <Image src="/about.png" alt="about page picture"  fill className="" />
        </div>
    </div>
  )
}

export default AboutPage
