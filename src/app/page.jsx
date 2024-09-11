import Image from "next/image"

const HomePage = () => {
  return (
  <div className="mt-40">
    <div className="">
      <h1 className="">Creative Thought Agency </h1>
      <p className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam qui ipsa voluptatum
        Exercitationem eos et explicabo vitae eligendi voluptatum sunt. Quis natus quod temporibus
      </p>
      <div className="">
        <button className="">Learn more</button>
        <button className="">Contact</button>
      </div>
      <div className="w-[100px] h-[100px]">
        {/* <Image src="/brands.png" alt="" fill style={{objectFit: 'cover'}} /> */}
      </div>
    </div>

    <div className="">
      {/* <Image  src="/hero.gif" alt="" fill /> */}
    </div>

  </div>

  )
}

export default HomePage;
