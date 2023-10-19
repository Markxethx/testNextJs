import Image from "next/image";
import { Inter } from "next/font/google";
import { discount, orderDetails } from "../../constant";
import Status from "../../components/Status";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
    >
     <div className="lg:w-[954px]  p-24">
       {/* for the sake of this test, and to simplify i use direct and not own component  */}

      {/* discount header  */}

      <div className="rounded-[24px] border-solid border-2 lg:h-[258px] border-gray-500 md:mb-8">
        <div className="flex justify-center flex-row items-center ">
          <img src={discount[0].img} className="rounded-tl-[24px] bg-cover rounded-bl-[24px] h-[258px] w-[292px]" />

          <div className="lg:w-[546px] lg:ml-[20px] flex flex-col justify-start">
            <h3 className="text-[#6B7280] text-[14px]">{discount[0].subHeader}</h3>
            <h1 className="font-bold text-[24px] text-[#1F2937">{discount[0].title}</h1>
            <div className="grid grid-cols-3 gap-4 mt-10">
          {discount[0].rules.map((item) => (
            <div key={item.id} className="flex"> 
                  
                  <Image src={`/${item.icon}.svg`} alt="viewers logo" width={20} height={20} />
                  
                  <h3>{item.content}</h3>
            </div>
          ))}
        </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              {/* <img src={viewers} alt='viewers logo' /> */}

              {/* <Image src="/viewers.svg" alt="viewers logo" width={20} height={20} /> */}
            </div>
          </div>
        </div>

        
      </div>
      {/* order details here, either create new reusable components   */}
      <div>
        <table className="rounded-lg w-full">
          <thead className="bg-gray-100 text-black text-start">
            <tr>
              <th className="text-start font-roboto text-[12px] text-[#6B7280] p-3">ORDER DETAILS</th>
              <th className="text-start font-roboto text-[12px] text-[#6B7280] p-3">Date</th>
              <th className="text-start font-roboto text-[12px] text-[#6B7280] p-3">Status</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((item) => (
              <tr className="border-spacing-2" key={item.id}>
                <td className="flex">
                  <div className="p-3">
                      <img src={item.img} className="h-40px w-[62px] rounded-[5px]" alt="Bar Image"/>
                  </div>

                  <article className="p-3">
                    <h1 className="font-bold text-[16px] text-[#1F2937">
                    {item.title} 
                  </h1>
                  <p className="text-[#6B7280] text-[14px]">
                    {item.subTitle}
                  </p>  
                  </article>                  
                </td>
                <td className="text-[#6B7280] text-[14px]">{item.date}</td>
                <td>{item.status}</td>
                {/* it should be another component that recieves props if the client already approve, cancelled or pending */}
                  {/* <Status status={item.status} /> */}
                {/* suppose to be a resuable component  */}
                <td className="text-[indigo/600]">View</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </div>
    </main>
  );
}
